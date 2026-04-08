/**
 * ============================================
 * GEOPORTAL ULTRA - EK ÖZELLİKLER
 * ============================================
 */

// --- GLOBAL DEĞİŞKENLER GÜNCELLEME ---
let issMarker = null;
let issPath = null;
let issInterval = null;
let issHistory = [];

let heatmapLayer = null;
let heatmapActive = false;
let lastEarthquakeData = null;

let terminatorLayer = null;
let terminatorInterval = null;

let areaToolActive = false;
let areaPoints = [];
let areaMarkers = [];
let areaPolygon = null;

// Mevcut DOMContentLoaded içine yeni dinleyicileri ekle
document.addEventListener('DOMContentLoaded', function() {
    // ... mevcut init çağrıları ...
    initUltraEventListeners();
});

function initUltraEventListeners() {
    // ISS Takibi
    document.getElementById('toggle-iss-btn').addEventListener('click', toggleISSTracking);
    
    // Isı Haritası
    document.getElementById('toggle-heatmap-btn').addEventListener('click', toggleHeatmapMode);
    
    // Gece/Gündüz
    document.getElementById('toggle-terminator-btn').addEventListener('click', toggleTerminator);
    
    // Alan Hesaplama
    document.getElementById('area-tool-btn').addEventListener('click', toggleAreaTool);
}

// --- ULTRA ÖZELLİK 1: ISS CANLI TAKİBİ ---
async function toggleISSTracking() {
    const btn = document.getElementById('toggle-iss-btn');
    const isActive = btn.classList.contains('active');

    if (isActive) {
        clearInterval(issInterval);
        if (issMarker) map.removeLayer(issMarker);
        if (issPath) map.removeLayer(issPath);
        issMarker = null;
        issPath = null;
        issHistory = [];
        btn.classList.remove('active');
        btn.querySelector('.toggle-indicator').textContent = 'Kapalı';
    } else {
        btn.classList.add('active');
        btn.querySelector('.toggle-indicator').textContent = 'Takipte';
        
        // İlk yükleme
        await updateISSPosition();
        // 3 saniyede bir güncelleme
        issInterval = setInterval(updateISSPosition, 3000);
    }
}

async function updateISSPosition() {
    try {
        const response = await fetch('https://api.wheretheiss.at/v1/satellites/25544');
        const data = await response.json();
        const pos = [data.latitude, data.longitude];

        issHistory.push(pos);
        if (issHistory.length > 100) issHistory.shift(); // Son 100 noktayı tut

        if (!issMarker) {
            const issIcon = L.divIcon({
                className: 'iss-icon',
                html: '🚀',
                iconSize: [30, 30],
                iconAnchor: [15, 15]
            });
            issMarker = L.marker(pos, { icon: issIcon }).addTo(map);
            issMarker.bindPopup("<b>ISS (Uluslararası Uzay İstasyonu)</b><br>Hız: " + Math.round(data.velocity) + " km/h");
            
            issPath = L.polyline(issHistory, {
                color: '#6366f1',
                weight: 2,
                opacity: 0.6,
                className: 'iss-path'
            }).addTo(map);
        } else {
            issMarker.setLatLng(pos);
            issPath.setLatLngs(issHistory);
        }

        // Eğer ilk kez yüklendiyse oraya odaklan
        if (issHistory.length === 1) map.flyTo(pos, 4);

    } catch (error) {
        console.error("ISS Verisi alınamadı:", error);
    }
}

// --- ULTRA ÖZELLİK 2: DEPREM ISI HARİTASI ---
function toggleHeatmapMode() {
    heatmapActive = !heatmapActive;
    const btn = document.getElementById('toggle-heatmap-btn');
    
    if (heatmapActive) {
        btn.classList.add('heatmap-active');
        btn.textContent = 'Aktif';
        renderEarthquakes(); // Mod değişince tekrar çiz
    } else {
        btn.classList.remove('heatmap-active');
        btn.textContent = 'Aktif Değil';
        if (heatmapLayer) map.removeLayer(heatmapLayer);
        renderEarthquakes(); // Normal moda dön
    }
}

// Orijinal loadEarthquakes fonksiyonunda data çekildikten sonra 
// lastEarthquakeData = data; satırını eklediğini varsayıyoruz.
// renderEarthquakes adında bir yardımcı fonksiyon oluşturuyoruz:

function renderEarthquakes() {
    // Mevcut katmanları temizle
    if (earthquakesLayer) map.removeLayer(earthquakesLayer);
    if (heatmapLayer) map.removeLayer(heatmapLayer);

    if (!lastEarthquakeData) return;

    if (heatmapActive) {
        const heatPoints = lastEarthquakeData.features.map(f => {
            return [f.geometry.coordinates[1], f.geometry.coordinates[0], f.properties.mag * 0.2];
        });
        heatmapLayer = L.heatLayer(heatPoints, {
            radius: 25,
            blur: 15,
            maxZoom: 10,
            gradient: {0.4: 'blue', 0.6: 'cyan', 0.7: 'lime', 0.8: 'yellow', 1: 'red'}
        }).addTo(map);
    } else {
        // ... Mevcut L.geoJSON çizim kodun ...
        // (Burada mevcut app.js içindeki earthquakesLayer mantığını çağır)
    }
}

// --- ULTRA ÖZELLİK 3: GECE/GÜNDÜZ DÖNGÜSÜ ---
function toggleTerminator() {
    const btn = document.getElementById('toggle-terminator-btn');
    const isActive = btn.classList.contains('active');

    if (isActive) {
        if (terminatorLayer) map.removeLayer(terminatorLayer);
        clearInterval(terminatorInterval);
        btn.classList.remove('active');
        btn.querySelector('.toggle-indicator').textContent = 'Kapalı';
    } else {
        btn.classList.add('active');
        btn.querySelector('.toggle-indicator').textContent = 'Açık';
        
        terminatorLayer = L.terminator().addTo(map);
        // Her dakika güncelle
        terminatorInterval = setInterval(() => {
            map.removeLayer(terminatorLayer);
            terminatorLayer = L.terminator().addTo(map);
        }, 60000);
    }
}

// --- ULTRA ÖZELLİK 4: ALAN HESAPLAMA ---
function toggleAreaTool() {
    areaToolActive = !areaToolActive;
    const btn = document.getElementById('area-tool-btn');
    const resultDiv = document.getElementById('area-result');
    
    if (areaToolActive) {
        btn.classList.add('active');
        document.getElementById('map').classList.add('area-tool-active');
        resultDiv.classList.remove('hidden');
        resultDiv.innerHTML = '<p>Haritaya tıklayarak en az 3 nokta belirleyin...</p>';
        
        areaPoints = [];
        clearAreaElements();
        map.on('click', handleAreaClick);
    } else {
        btn.classList.remove('active');
        document.getElementById('map').classList.remove('area-tool-active');
        resultDiv.classList.add('hidden');
        map.off('click', handleAreaClick);
        clearAreaElements();
    }
}

function handleAreaClick(e) {
    const latlng = e.latlng;
    areaPoints.push(latlng);
    
    const marker = L.circleMarker(latlng, { radius: 5, color: '#4f46e5', fillColor: '#fff', fillOpacity: 1 }).addTo(map);
    areaMarkers.push(marker);

    if (areaPoints.length > 1) {
        if (areaPolygon) map.removeLayer(areaPolygon);
        areaPolygon = L.polygon(areaPoints, { color: '#6366f1', weight: 3, fillColor: '#6366f1', fillOpacity: 0.2 }).addTo(map);
    }

    if (areaPoints.length >= 3) {
        const area = calculatePolygonArea(areaPoints);
        document.getElementById('area-result').innerHTML = `
            <div class="area-stats">
                <span style="font-size: 11px; color: var(--text-secondary);">Hesaplanan Alan:</span>
                <span class="area-value">${new Intl.NumberFormat('tr-TR').format(Math.round(area))} km²</span>
                <button onclick="window.clearAreaPoints()" class="btn-secondary" style="padding: 4px; font-size: 10px; margin-top: 5px;">Sıfırla</button>
            </div>
        `;
    }
}

// Küresel Alan Hesaplama (Spherical Excess)
function calculatePolygonArea(points) {
    if (points.length < 3) return 0;
    let total = 0;
    const R = 6371; // Dünya yarıçapı km
    
    for (let i = 0; i < points.length; i++) {
        const p1 = points[i];
        const p2 = points[(i + 1) % points.length];
        total += (p2.lng - p1.lng) * (Math.PI / 180) * (2 + Math.sin(p1.lat * (Math.PI / 180)) + Math.sin(p2.lat * (Math.PI / 180)));
    }
    
    return Math.abs(total * R * R / 2);
}

function clearAreaElements() {
    if (areaPolygon) map.removeLayer(areaPolygon);
    areaMarkers.forEach(m => map.removeLayer(m));
    areaMarkers = [];
    areaPoints = [];
    areaPolygon = null;
}

// Global sıfırlama fonksiyonu (buton için)
window.clearAreaPoints = () => {
    clearAreaElements();
    document.getElementById('area-result').innerHTML = '<p>Yeni noktalar ekleyin...</p>';
};

// --- MEVCUT loadEarthquakes GÜNCELLEMESİ ---
// Not: Mevcut loadEarthquakes fonksiyonunun sonuna "lastEarthquakeData = data; renderEarthquakes();" eklenmelidir.
