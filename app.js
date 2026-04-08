/**
 * ============================================
 * GEOPORTAL - COĞRAFİ BİLGİ SİSTEMİ
 * Tam Donanımlı Web Uygulaması
 * ============================================
 */

// ============================================
// GLOBAL DEĞİŞKENLER
// ============================================
let map;
let currentMarkers = [];
let currentLayers = [];
let tectonicPlatesLayer = null;
let earthquakesLayer = null;

// ============================================
// HARİTA BAŞLATMA
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    initMap();
    initEventListeners();
    initTabs();
    initMobileMenu();
});

function initMap() {
    // Haritayı başlat (Türkiye merkezli)
    map = L.map('map', {
        center: [39.0, 35.0],
        zoom: 6,
        zoomControl: false,
        attributionControl: true
    });

    // Zoom kontrolünü sağ alt köşeye ekle
    L.control.zoom({
        position: 'bottomright'
    }).addTo(map);

    // OpenStreetMap katmanı ekle
    const baseLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19
    });

    baseLayer.addTo(map);
    currentLayers.push(baseLayer);
}

// ============================================
// OLAY DİNLEYİCİLERİ
// ============================================
function initEventListeners() {
    // Ülke arama
    const searchBtn = document.getElementById('search-btn');
    const countryInput = document.getElementById('country-input');

    searchBtn.addEventListener('click', searchCountry);
    countryInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            searchCountry();
        }
    });

    // Deprem yükleme
    const loadEarthquakesBtn = document.getElementById('load-earthquakes-btn');
    loadEarthquakesBtn.addEventListener('click', loadEarthquakes);

    // Tektonik plakalar
    const togglePlatesBtn = document.getElementById('toggle-plates-btn');
    togglePlatesBtn.addEventListener('click', toggleTectonicPlates);

    // Harita kontrolleri
    const resetViewBtn = document.getElementById('reset-view-btn');
    resetViewBtn.addEventListener('click', resetMapView);

    const clearLayersBtn = document.getElementById('clear-layers-btn');
    clearLayersBtn.addEventListener('click', clearAllLayers);
}

function initTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');

            // Tüm tab butonlarından active sınıfını kaldır
            tabBtns.forEach(b => b.classList.remove('active'));
            // Tüm tab içeriklerinden active sınıfını kaldır
            tabContents.forEach(c => c.classList.remove('active'));

            // Aktif tab'ı işaretle
            this.classList.add('active');
            document.getElementById('tab-' + tabId).classList.add('active');
        });
    });
}

function initMobileMenu() {
    const mobileToggle = document.getElementById('mobile-toggle');
    const sidebar = document.getElementById('sidebar');

    // Overlay oluştur
    const overlay = document.createElement('div');
    overlay.className = 'sidebar-overlay';
    document.body.appendChild(overlay);

    mobileToggle.addEventListener('click', function() {
        sidebar.classList.toggle('open');
        overlay.classList.toggle('active');
    });

    overlay.addEventListener('click', function() {
        sidebar.classList.remove('open');
        overlay.classList.remove('active');
    });
}

// ============================================
// ÜLKE REHBERİ FONKSİYONLARI
// ============================================
async function searchCountry() {
    const input = document.getElementById('country-input');
    const resultContainer = document.getElementById('country-result');
    const searchTerm = input.value.trim();

    if (!searchTerm) {
        showError('Lütfen bir ülke adı girin.');
        return;
    }

    // Yükleniyor göster
    resultContainer.innerHTML = `
        <div class="loading-state">
            <div class="spinner"></div>
            <p>Ülke bilgileri yükleniyor...</p>
        </div>
    `;

    try {
        const response = await fetch(`https://restcountries.com/v3.1/name/${encodeURIComponent(searchTerm)}`);
        
        if (!response.ok) {
            if (response.status === 404) {
                throw new Error('Ülke bulunamadı. Lütfen farklı bir isim deneyin.');
            }
            throw new Error('Bir hata oluştu. Lütfen tekrar deneyin.');
        }

        const data = await response.json();
        
        // En iyi eşleşmeyi bul (genellikle ilk sonuç)
        const country = data[0];
        
        displayCountryInfo(country);
        flyToCountry(country);
        
    } catch (error) {
        showError(error.message);
    }
}

function displayCountryInfo(country) {
    const resultContainer = document.getElementById('country-result');
    
    // Ülke bilgilerini çıkar
    const name = country.name.common;
    const nativeName = country.name.nativeName ? 
        Object.values(country.name.nativeName)[0].common : name;
    const capital = country.capital ? country.capital[0] : 'Bilinmiyor';
    const population = country.population ? 
        new Intl.NumberFormat('tr-TR').format(country.population) : 'Bilinmiyor';
    const area = country.area ? 
        new Intl.NumberFormat('tr-TR').format(Math.round(country.area)) : 'Bilinmiyor';
    const flag = country.flags ? country.flags.png : '';
    const region = country.region || 'Bilinmiyor';
    const subregion = country.subregion || '';
    const currency = country.currencies ? 
        Object.values(country.currencies)[0].name : 'Bilinmiyor';
    const language = country.languages ? 
        Object.values(country.languages)[0] : 'Bilinmiyor';

    resultContainer.innerHTML = `
        <div class="country-card">
            <div class="country-header">
                <img src="${flag}" alt="${name} Bayrağı" class="country-flag">
                <div class="country-name">
                    <h2>${name}</h2>
                    <span class="native-name">${nativeName}</span>
                </div>
            </div>
            <div class="country-info-grid">
                <div class="info-item">
                    <div class="info-label">Başkent</div>
                    <div class="info-value">${capital}</div>
                </div>
                <div class="info-item">
                    <div class="info-label">Nüfus</div>
                    <div class="info-value">${population}</div>
                </div>
                <div class="info-item">
                    <div class="info-label">Yüzölçümü</div>
                    <div class="info-value">${area} km²</div>
                </div>
                <div class="info-item">
                    <div class="info-label">Bölge</div>
                    <div class="info-value">${region}${subregion ? ' / ' + subregion : ''}</div>
                </div>
                <div class="info-item">
                    <div class="info-label">Para Birimi</div>
                    <div class="info-value">${currency}</div>
                </div>
                <div class="info-item">
                    <div class="info-label">Dil</div>
                    <div class="info-value">${language}</div>
                </div>
            </div>
        </div>
    `;
}

function flyToCountry(country) {
    // Önceki marker'ları temizle
    clearMarkers();

    const latlng = country.latlng;
    if (!latlng || latlng.length < 2) {
        console.error('Koordinat bilgisi bulunamadı');
        return;
    }

    const lat = latlng[0];
    const lng = latlng[1];

    // Haritaya flyTo animasyonu ile git
    map.flyTo([lat, lng], 6, {
        duration: 1.5,
        easeLinearity: 0.25
    });

    // Marker ekle
    const marker = L.marker([lat, lng], {
        icon: createCustomMarkerIcon()
    }).addTo(map);

    // Popup ekle
    const popupContent = `
        <div class="popup-title">${country.name.common}</div>
        <div class="popup-content">
            <strong>Başkent:</strong> ${country.capital ? country.capital[0] : 'Bilinmiyor'}<br>
            <strong>Nüfus:</strong> ${country.population ? new Intl.NumberFormat('tr-TR').format(country.population) : 'Bilinmiyor'}
        </div>
    `;

    marker.bindPopup(popupContent);
    
    // Animasyon tamamlandığında popup'ı aç
    setTimeout(() => {
        marker.openPopup();
    }, 1600);

    currentMarkers.push(marker);
}

function createCustomMarkerIcon() {
    return L.divIcon({
        className: 'custom-marker',
        html: `
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="#3b82f6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                <circle cx="12" cy="10" r="3" fill="white"/>
            </svg>
        `,
        iconSize: [36, 36],
        iconAnchor: [18, 36],
        popupAnchor: [0, -36]
    });
}

function showError(message) {
    const resultContainer = document.getElementById('country-result');
    resultContainer.innerHTML = `
        <div class="error-message">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <line x1="12" y1="8" x2="12" y2="12"/>
                <line x1="12" y1="16" x2="12.01" y2="16"/>
            </svg>
            <span>${message}</span>
        </div>
    `;
}

// ============================================
// DEPREM FONKSİYONLARI
// ============================================
async function loadEarthquakes() {
    const btn = document.getElementById('load-earthquakes-btn');
    const statsContainer = document.getElementById('earthquake-stats');
    
    // Butonu devre dışı bırak ve yükleniyor durumu göster
    btn.disabled = true;
    btn.innerHTML = `
        <div class="spinner" style="width: 18px; height: 18px; border-width: 2px; margin: 0;"></div>
        Yükleniyor...
    `;

    try {
        // Önceki deprem katmanını temizle
        if (earthquakesLayer) {
            map.removeLayer(earthquakesLayer);
            earthquakesLayer = null;
        }
        clearMarkers();

        const response = await fetch('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_day.geojson');
        
        if (!response.ok) {
            throw new Error('Deprem verileri yüklenirken bir hata oluştu.');
        }

        const data = await response.json();
        
        // Deprem katmanını oluştur
        earthquakesLayer = L.geoJSON(data, {
            pointToLayer: function(feature, latlng) {
                const magnitude = feature.properties.mag;
                const { radius, color, fillColor } = getEarthquakeStyle(magnitude);
                
                return L.circleMarker(latlng, {
                    radius: radius,
                    fillColor: fillColor,
                    color: color,
                    weight: 2,
                    opacity: 1,
                    fillOpacity: 0.7,
                    className: 'earthquake-circle'
                });
            },
            onEachFeature: function(feature, layer) {
                const props = feature.properties;
                const magnitude = props.mag;
                const place = props.place;
                const time = new Date(props.time).toLocaleString('tr-TR');
                
                let magnitudeClass = 'magnitude-low';
                if (magnitude >= 6.0) magnitudeClass = 'magnitude-high';
                else if (magnitude >= 5.0) magnitudeClass = 'magnitude-medium';
                
                const popupContent = `
                    <div class="popup-title">Deprem Bilgisi</div>
                    <div class="popup-content">
                        <strong>Yer:</strong> ${place}<br>
                        <strong>Zaman:</strong> ${time}<br>
                        <strong>Derinlik:</strong> ${props.depth} km
                    </div>
                    <div class="popup-magnitude ${magnitudeClass}">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M2 12h20"/>
                            <path d="M20 12v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-6"/>
                            <path d="m12 12 4-8"/>
                            <path d="m12 12-4-8"/>
                        </svg>
                        Büyüklük: ${magnitude}
                    </div>
                `;
                
                layer.bindPopup(popupContent);
            }
        });

        earthquakesLayer.addTo(map);
        
        // İstatistikleri güncelle
        const features = data.features;
        const count = features.length;
        const maxMagnitude = Math.max(...features.map(f => f.properties.mag));
        
        document.getElementById('eq-count').textContent = count;
        document.getElementById('eq-max').textContent = maxMagnitude.toFixed(1);
        statsContainer.classList.remove('hidden');
        
        // Haritayı tüm depremleri gösterecek şekilde ayarla
        if (features.length > 0) {
            const group = new L.featureGroup(earthquakesLayer.getLayers());
            map.fitBounds(group.getBounds().pad(0.1));
        }
        
    } catch (error) {
        alert('Hata: ' + error.message);
        console.error('Deprem verisi yüklenirken hata:', error);
    } finally {
        // Butonu eski haline getir
        btn.disabled = false;
        btn.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/>
                <path d="M3 3v5h5"/>
                <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"/>
                <path d="M16 16h5v5"/>
            </svg>
            Depremleri Yükle
        `;
    }
}

function getEarthquakeStyle(magnitude) {
    let radius, color, fillColor;
    
    if (magnitude < 5.0) {
        // Hafif depremler - Sarı
        radius = 6;
        color = '#d97706';
        fillColor = '#fbbf24';
    } else if (magnitude < 6.0) {
        // Orta depremler - Turuncu
        radius = 10;
        color = '#ea580c';
        fillColor = '#f97316';
    } else {
        // Şiddetli depremler - Kırmızı
        radius = 14;
        color = '#dc2626';
        fillColor = '#ef4444';
    }
    
    // Büyüklüğe göre yarıçapı ayarla
    radius = Math.max(6, Math.min(20, magnitude * 2.5));
    
    return { radius, color, fillColor };
}

// ============================================
// TEKTONİK PLAKA FONKSİYONLARI
// ============================================
async function toggleTectonicPlates() {
    const btn = document.getElementById('toggle-plates-btn');
    const isActive = btn.getAttribute('data-active') === 'true';
    const indicator = btn.querySelector('.toggle-indicator');

    if (isActive) {
        // Katmanı kaldır
        if (tectonicPlatesLayer) {
            map.removeLayer(tectonicPlatesLayer);
            tectonicPlatesLayer = null;
        }
        btn.classList.remove('active');
        btn.setAttribute('data-active', 'false');
        indicator.textContent = 'Kapalı';
    } else {
        // Katmanı ekle
        btn.classList.add('active');
        btn.setAttribute('data-active', 'true');
        indicator.textContent = 'Açık';
        
        if (!tectonicPlatesLayer) {
            await loadTectonicPlates();
        } else {
            tectonicPlatesLayer.addTo(map);
        }
    }
}

async function loadTectonicPlates() {
    try {
        const response = await fetch('https://raw.githubusercontent.com/fraxen/tectonicplates/master/GeoJSON/PB2002_boundaries.json');
        
        if (!response.ok) {
            throw new Error('Tektonik plaka verileri yüklenirken bir hata oluştu.');
        }

        const data = await response.json();
        
        tectonicPlatesLayer = L.geoJSON(data, {
            style: {
                color: '#f97316',
                weight: 3,
                opacity: 0.9,
                dashArray: '5, 5',
                lineCap: 'round',
                lineJoin: 'round'
            },
            onEachFeature: function(feature, layer) {
                if (feature.properties) {
                    const name = feature.properties.Name || 'Bilinmiyor';
                    layer.bindPopup(`<div class="popup-title">Tektonik Plaka Sınırı</div><div class="popup-content">${name}</div>`);
                }
            }
        });

        tectonicPlatesLayer.addTo(map);
        
    } catch (error) {
        console.error('Tektonik plaka verisi yüklenirken hata:', error);
        alert('Tektonik plaka verileri yüklenemedi. Lütfen internet bağlantınızı kontrol edin.');
        
        // Buton durumunu geri al
        const btn = document.getElementById('toggle-plates-btn');
        const indicator = btn.querySelector('.toggle-indicator');
        btn.classList.remove('active');
        btn.setAttribute('data-active', 'false');
        indicator.textContent = 'Kapalı';
    }
}

// ============================================
// YARDIMCI FONKSİYONLAR
// ============================================
function clearMarkers() {
    currentMarkers.forEach(marker => {
        map.removeLayer(marker);
    });
    currentMarkers = [];
}

function clearAllLayers() {
    // Marker'ları temizle
    clearMarkers();
    
    // Deprem katmanını temizle
    if (earthquakesLayer) {
        map.removeLayer(earthquakesLayer);
        earthquakesLayer = null;
    }
    
    // Tektonik plaka katmanını temizle
    if (tectonicPlatesLayer) {
        map.removeLayer(tectonicPlatesLayer);
        tectonicPlatesLayer = null;
    }
    
    // Buton durumlarını sıfırla
    const platesBtn = document.getElementById('toggle-plates-btn');
    const platesIndicator = platesBtn.querySelector('.toggle-indicator');
    platesBtn.classList.remove('active');
    platesBtn.setAttribute('data-active', 'false');
    platesIndicator.textContent = 'Kapalı';
    
    // Deprem istatistiklerini gizle
    const statsContainer = document.getElementById('earthquake-stats');
    statsContainer.classList.add('hidden');
    
    // Haritayı varsayılan konuma getir
    resetMapView();
}

function resetMapView() {
    map.flyTo([39.0, 35.0], 6, {
        duration: 1.5,
        easeLinearity: 0.25
    });
}

// ============================================
// GLOBAL ERİŞİM (DEBUG İÇİN)
// ============================================
window.GeoPortal = {
    map: () => map,
    clearLayers: clearAllLayers,
    resetView: resetMapView
};
