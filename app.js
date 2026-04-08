/**
 * ============================================
 * GEOPORTAL PRO - COĞRAFİ BİLGİ SİSTEMİ
 * Gelişmiş, Tam Donanımlı Web Uygulaması
 * ============================================
 */

// ============================================
// TÜRKÇE ÜLKE İSİMLERİ ÇEVİRİSİ
// ============================================
const countryNamesTR = {
    "Turkey": "Türkiye", "Germany": "Almanya", "France": "Fransa", "Italy": "İtalya",
    "Spain": "İspanya", "Portugal": "Portekiz", "United Kingdom": "Birleşik Krallık",
    "England": "İngiltere", "Scotland": "İskoçya", "Ireland": "İrlanda", "Netherlands": "Hollanda",
    "Belgium": "Belçika", "Switzerland": "İsviçre", "Austria": "Avusturya", "Sweden": "İsveç",
    "Norway": "Norveç", "Denmark": "Danimarka", "Finland": "Finlandiya", "Poland": "Polonya",
    "Czech Republic": "Çek Cumhuriyeti", "Czechia": "Çekya", "Hungary": "Macaristan", "Romania": "Romanya",
    "Bulgaria": "Bulgaristan", "Greece": "Yunanistan", "Serbia": "Sırbistan", "Croatia": "Hırvatistan",
    "Bosnia and Herzegovina": "Bosna-Hersek", "Slovenia": "Slovenya", "Slovakia": "Slovakya",
    "Ukraine": "Ukrayna", "Russia": "Rusya", "Belarus": "Beyaz Rusya", "Moldova": "Moldova",
    "Lithuania": "Litvanya", "Latvia": "Letonya", "Estonia": "Estonya", "United States": "Amerika Birleşik Devletleri",
    "USA": "ABD", "Canada": "Kanada", "Mexico": "Meksika", "Cuba": "Küba", "Jamaica": "Jamaika",
    "Haiti": "Haiti", "Dominican Republic": "Dominik Cumhuriyeti", "Guatemala": "Guatemala",
    "Belize": "Belize", "El Salvador": "El Salvador", "Honduras": "Honduras", "Nicaragua": "Nikaragua",
    "Costa Rica": "Kosta Rika", "Panama": "Panama", "Colombia": "Kolombiya", "Venezuela": "Venezuela",
    "Guyana": "Guyana", "Suriname": "Surinam", "Ecuador": "Ekvador", "Peru": "Peru",
    "Brazil": "Brezilya", "Bolivia": "Bolivya", "Paraguay": "Paraguay", "Chile": "Şili",
    "Argentina": "Arjantin", "Uruguay": "Uruguay", "China": "Çin", "Japan": "Japonya",
    "South Korea": "Güney Kore", "North Korea": "Kuzey Kore", "India": "Hindistan", "Pakistan": "Pakistan",
    "Bangladesh": "Bangladeş", "Sri Lanka": "Sri Lanka", "Nepal": "Nepal", "Bhutan": "Butan",
    "Myanmar": "Myanmar", "Thailand": "Tayland", "Laos": "Laos", "Cambodia": "Kamboçya",
    "Vietnam": "Vietnam", "Malaysia": "Malezya", "Singapore": "Singapur", "Indonesia": "Endonezya",
    "Philippines": "Filipinler", "Australia": "Avustralya", "New Zealand": "Yeni Zelanda",
    "Papua New Guinea": "Papua Yeni Gine", "Fiji": "Fiji", "Solomon Islands": "Solomon Adaları",
    "South Africa": "Güney Afrika", "Egypt": "Mısır", "Nigeria": "Nijerya", "Kenya": "Kenya",
    "Ethiopia": "Etiyopya", "Ghana": "Gana", "Morocco": "Fas", "Algeria": "Cezayir",
    "Tunisia": "Tunus", "Libya": "Libya", "Sudan": "Sudan", "Somalia": "Somali",
    "Tanzania": "Tanzanya", "Uganda": "Uganda", "Rwanda": "Ruanda", "Zimbabwe": "Zimbabve",
    "Zambia": "Zambiya", "Botswana": "Botsvana", "Namibia": "Namibya", "Angola": "Angola",
    "Mozambique": "Mozambik", "Madagascar": "Madagaskar", "Cameroon": "Kamerun", "Ivory Coast": "Fildişi Sahili",
    "Senegal": "Senegal", "Mali": "Mali", "Burkina Faso": "Burkina Faso", "Niger": "Nijer",
    "Chad": "Çad", "Central African Republic": "Orta Afrika Cumhuriyeti", "Democratic Republic of the Congo": "Kongo Demokratik Cumhuriyeti",
    "Republic of the Congo": "Kongo Cumhuriyeti", "Gabon": "Gabon", "Equatorial Guinea": "Ekvator Ginesi",
    "Saudi Arabia": "Suudi Arabistan", "Iran": "İran", "Iraq": "Irak", "Syria": "Suriye",
    "Jordan": "Ürdün", "Lebanon": "Lübnan", "Israel": "İsrail", "Palestine": "Filistin",
    "Kuwait": "Kuveyt", "Qatar": "Katar", "Bahrain": "Bahreyn", "United Arab Emirates": "Birleşik Arap Emirlikleri",
    "Oman": "Umman", "Yemen": "Yemen", "Afghanistan": "Afganistan", "Uzbekistan": "Özbekistan",
    "Kazakhstan": "Kazakistan", "Kyrgyzstan": "Kırgızistan", "Tajikistan": "Tacikistan", "Turkmenistan": "Türkmenistan",
    "Mongolia": "Moğolistan", "Azerbaijan": "Azerbaycan", "Armenia": "Ermenistan", "Georgia": "Gürcistan",
    "Maldives": "Maldivler", "Mauritius": "Mauritius", "Seychelles": "Seyşeller", "Comoros": "Komorlar",
    "Cape Verde": "Cape Verde", "Sao Tome and Principe": "Sao Tome ve Principe", "Gambia": "Gambiya",
    "Guinea": "Gine", "Guinea-Bissau": "Gine-Bissau", "Sierra Leone": "Sierra Leone", "Liberia": "Liberya",
    "Togo": "Togo", "Benin": "Benin", "Malawi": "Malavi", "Lesotho": "Lesoto", "Eswatini": "Esvatini",
    "Swaziland": "Svaziland", "Djibouti": "Cibuti", "Eritrea": "Eritre", "Burundi": "Burundi",
    "South Sudan": "Güney Sudan", "Western Sahara": "Batı Sahra", "Taiwan": "Tayvan", "Hong Kong": "Hong Kong",
    "Macau": "Makao", "Brunei": "Brunei", "East Timor": "Doğu Timor", "Malta": "Malta", "Cyprus": "Kıbrıs",
    "Iceland": "İzlanda", "Luxembourg": "Lüksemburg", "Monaco": "Monako", "Andorra": "Andorra",
    "Liechtenstein": "Lihtenştayn", "San Marino": "San Marino", "Vatican City": "Vatikan",
    "Montenegro": "Karadağ", "North Macedonia": "Kuzey Makedonya", "Macedonia": "Makedonya",
    "Albania": "Arnavutluk", "Kosovo": "Kosova", "Moldova": "Moldova", "Greenland": "Grönland",
    "Faroe Islands": "Faroe Adaları", "Gibraltar": "Cebelitarık", "Isle of Man": "Man Adası",
    "Jersey": "Jersey", "Guernsey": "Guernsey", "Bermuda": "Bermuda", "Cayman Islands": "Cayman Adaları",
    "Turks and Caicos Islands": "Turks ve Caicos Adaları", "British Virgin Islands": "Britanya Virjin Adaları",
    "US Virgin Islands": "ABD Virjin Adaları", "Anguilla": "Anguilla", "Saint Martin": "Saint Martin",
    "Sint Maarten": "Sint Maarten", "Saint Barthelemy": "Saint Barthelemy", "Saint Pierre and Miquelon": "Saint Pierre ve Miquelon",
    "Falkland Islands": "Falkland Adaları", "South Georgia": "Güney Georgia", "Northern Mariana Islands": "Kuzey Mariana Adaları",
    "Guam": "Guam", "American Samoa": "Amerikan Samoası", "Puerto Rico": "Porto Riko",
    "Aruba": "Aruba", "Curacao": "Curaçao", "Bonaire": "Bonaire", "Saba": "Saba",
    "Sint Eustatius": "Sint Eustatius", "Saint Kitts and Nevis": "Saint Kitts ve Nevis",
    "Antigua and Barbuda": "Antigua ve Barbuda", "Dominica": "Dominika", "Saint Lucia": "Saint Lucia",
    "Saint Vincent and the Grenadines": "Saint Vincent ve Grenadinler", "Barbados": "Barbados",
    "Grenada": "Grenada", "Trinidad and Tobago": "Trinidad ve Tobago", "Bahamas": "Bahamalar",
    "Jamaica": "Jamaika", "Haiti": "Haiti", "Suriname": "Surinam", "Guyana": "Guyana",
    "French Guiana": "Fransız Guyanası", "Martinique": "Martinik", "Guadeloupe": "Guadeloupe",
    "Reunion": "Reunion", "Mayotte": "Mayotte", "French Polynesia": "Fransız Polinezyası",
    "New Caledonia": "Yeni Kaledonya", "Wallis and Futuna": "Wallis ve Futuna",
    "Vanuatu": "Vanuatu", "Samoa": "Samoa", "Tonga": "Tonga", "Kiribati": "Kiribati",
    "Tuvalu": "Tuvalu", "Nauru": "Nauru", "Palau": "Palau", "Marshall Islands": "Marshall Adaları",
    "Micronesia": "Mikronezya", "Cook Islands": "Cook Adaları", "Niue": "Niue", "Tokelau": "Tokelau",
    "Pitcairn Islands": "Pitcairn Adaları", "Christmas Island": "Christmas Adası",
    "Cocos Islands": "Cocos Adaları", "Norfolk Island": "Norfolk Adası", "Antarctica": "Antarktika"
};

// Ters çeviri (Türkçe'den İngilizce'ye)
const countryNamesEN = Object.fromEntries(
    Object.entries(countryNamesTR).map(([en, tr]) => [tr.toLowerCase(), en])
);

// ============================================
// GLOBAL DEĞİŞKENLER
// ============================================
let map;
let currentMarkers = [];
let currentLayers = [];
let tectonicPlatesLayer = null;
let earthquakesLayer = null;
let volcanoesLayer = null;
let riversLayer = null;
let boundariesLayer = null;
let coordinateToolActive = false;
let distanceToolActive = false;
let weatherToolActive = false;
let distancePoints = [];
let distanceLine = null;
let distanceMarkers = [];

// ============================================
// HARİTA BAŞLATMA
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    initMap();
    initEventListeners();
    initTabs();
    initMobileMenu();
    initCoordinateDisplay();
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

    // Hızlı ülke butonları
    document.querySelectorAll('.quick-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const country = this.getAttribute('data-country');
            document.getElementById('country-input').value = country;
            searchCountry();
        });
    });

    // Deprem yükleme
    const loadEarthquakesBtn = document.getElementById('load-earthquakes-btn');
    loadEarthquakesBtn.addEventListener('click', loadEarthquakes);

    // Volkan yükleme
    const loadVolcanoesBtn = document.getElementById('load-volcanoes-btn');
    loadVolcanoesBtn.addEventListener('click', loadVolcanoes);

    // Tematik katmanlar
    document.getElementById('toggle-plates-btn').addEventListener('click', toggleTectonicPlates);
    document.getElementById('toggle-rivers-btn').addEventListener('click', toggleRivers);
    document.getElementById('toggle-boundaries-btn').addEventListener('click', toggleBoundaries);

    // Eğitim araçları
    document.getElementById('coordinate-tool-btn').addEventListener('click', toggleCoordinateTool);
    document.getElementById('distance-tool-btn').addEventListener('click', toggleDistanceTool);
    document.getElementById('compare-btn').addEventListener('click', compareCountries);
    document.getElementById('weather-tool-btn').addEventListener('click', toggleWeatherTool);

    // Harita kontrolleri
    document.getElementById('reset-view-btn').addEventListener('click', resetMapView);
    document.getElementById('clear-layers-btn').addEventListener('click', clearAllLayers);
    document.getElementById('fullscreen-btn').addEventListener('click', toggleFullscreen);
}

function initTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');

            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));

            this.classList.add('active');
            document.getElementById('tab-' + tabId).classList.add('active');
        });
    });
}

function initMobileMenu() {
    const mobileToggle = document.getElementById('mobile-toggle');
    const sidebar = document.getElementById('sidebar');

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

function initCoordinateDisplay() {
    const coordDisplay = document.getElementById('mouse-coords');
    
    map.on('mousemove', function(e) {
        const lat = e.latlng.lat.toFixed(4);
        const lng = e.latlng.lng.toFixed(4);
        coordDisplay.textContent = `Enlem: ${lat}° | Boylam: ${lng}°`;
    });

    map.on('mouseout', function() {
        coordDisplay.textContent = 'Fareyi harita üzerinde hareket ettirin';
    });
}

// ============================================
// ÜLKE REHBERİ FONKSİYONLARI
// ============================================
async function searchCountry() {
    const input = document.getElementById('country-input');
    const resultContainer = document.getElementById('country-result');
    let searchTerm = input.value.trim();

    if (!searchTerm) {
        showError('Lütfen bir ülke adı girin.');
        return;
    }

    // Türkçe isim kontrolü
    const searchTermLower = searchTerm.toLowerCase();
    if (countryNamesEN[searchTermLower]) {
        searchTerm = countryNamesEN[searchTermLower];
    }

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
        const country = data[0];
        
        displayCountryInfo(country);
        flyToCountry(country);
        
    } catch (error) {
        showError(error.message);
    }
}

function displayCountryInfo(country) {
    const resultContainer = document.getElementById('country-result');
    
    const name = country.name.common;
    const turkishName = countryNamesTR[name] || name;
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
    const currencySymbol = country.currencies ? 
        Object.values(country.currencies)[0].symbol || '' : '';
    const language = country.languages ? 
        Object.values(country.languages)[0] : 'Bilinmiyor';
    const latlng = country.latlng || [0, 0];

    resultContainer.innerHTML = `
        <div class="country-card">
            <div class="country-header">
                <img src="${flag}" alt="${name} Bayrağı" class="country-flag" onerror="this.src='https://via.placeholder.com/80x55?text=Bayrak'">
                <div class="country-name">
                    <h2>${turkishName}</h2>
                    <span class="native-name">${nativeName} | ${name}</span>
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
                    <div class="info-value">${currency} ${currencySymbol}</div>
                </div>
                <div class="info-item">
                    <div class="info-label">Dil</div>
                    <div class="info-value">${language}</div>
                </div>
                <div class="info-item">
                    <div class="info-label">Koordinatlar</div>
                    <div class="info-value">${latlng[0].toFixed(2)}°, ${latlng[1].toFixed(2)}°</div>
                </div>
                <div class="info-item">
                    <div class="info-label">ISO Kodu</div>
                    <div class="info-value">${country.cca2 || country.cca3 || 'N/A'}</div>
                </div>
            </div>
        </div>
    `;
}

function flyToCountry(country) {
    clearMarkers();

    const latlng = country.latlng;
    if (!latlng || latlng.length < 2) {
        console.error('Koordinat bilgisi bulunamadı');
        return;
    }

    const lat = latlng[0];
    const lng = latlng[1];

    map.flyTo([lat, lng], 6, {
        duration: 1.5,
        easeLinearity: 0.25
    });

    const marker = L.marker([lat, lng], {
        icon: createCustomMarkerIcon()
    }).addTo(map);

    const turkishName = countryNamesTR[country.name.common] || country.name.common;
    const popupContent = `
        <div class="popup-title">${turkishName}</div>
        <div class="popup-content">
            <strong>Başkent:</strong> ${country.capital ? country.capital[0] : 'Bilinmiyor'}<br>
            <strong>Nüfus:</strong> ${country.population ? new Intl.NumberFormat('tr-TR').format(country.population) : 'Bilinmiyor'}<br>
            <strong>Yüzölçümü:</strong> ${country.area ? new Intl.NumberFormat('tr-TR').format(Math.round(country.area)) : 'Bilinmiyor'} km²
        </div>
    `;

    marker.bindPopup(popupContent);
    
    setTimeout(() => {
        marker.openPopup();
    }, 1600);

    currentMarkers.push(marker);
}

function createCustomMarkerIcon() {
    return L.divIcon({
        className: 'custom-marker',
        html: `
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="#6366f1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                <circle cx="12" cy="10" r="3" fill="white"/>
            </svg>
        `,
        iconSize: [40, 40],
        iconAnchor: [20, 40],
        popupAnchor: [0, -40]
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
// DOĞAL AFET FONKSİYONLARI
// ============================================
async function loadEarthquakes() {
    const btn = document.getElementById('load-earthquakes-btn');
    const timeFilter = document.getElementById('earthquake-time-filter').value;
    const statsContainer = document.getElementById('disaster-stats');
    
    btn.disabled = true;
    btn.innerHTML = `
        <div class="spinner" style="width: 18px; height: 18px; border-width: 2px; margin: 0;"></div>
        Yükleniyor...
    `;

    try {
        if (earthquakesLayer) {
            map.removeLayer(earthquakesLayer);
            earthquakesLayer = null;
        }
        clearMarkers();

        // Tüm büyüklüklerde depremler
        const response = await fetch(`https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/${timeFilter}.geojson`);
        
        if (!response.ok) {
            throw new Error('Deprem verileri yüklenirken bir hata oluştu.');
        }

        const data = await response.json();
        
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
                
                let magnitudeClass = getMagnitudeClass(magnitude);
                
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
        
        const features = data.features;
        const count = features.length;
        const maxMagnitude = features.length > 0 ? Math.max(...features.map(f => f.properties.mag)) : 0;
        
        document.getElementById('disaster-count').textContent = count;
        document.getElementById('disaster-max').textContent = maxMagnitude.toFixed(1);
        statsContainer.classList.remove('hidden');
        
        if (features.length > 0) {
            const group = new L.featureGroup(earthquakesLayer.getLayers());
            map.fitBounds(group.getBounds().pad(0.1));
        }
        
    } catch (error) {
        alert('Hata: ' + error.message);
        console.error('Deprem verisi yüklenirken hata:', error);
    } finally {
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
    if (magnitude < 2.0) {
        return { radius: 4, color: '#16a34a', fillColor: '#22c55e' };
    } else if (magnitude < 3.0) {
        return { radius: 5, color: '#16a34a', fillColor: '#22c55e' };
    } else if (magnitude < 4.0) {
        return { radius: 7, color: '#2563eb', fillColor: '#3b82f6' };
    } else if (magnitude < 5.0) {
        return { radius: 10, color: '#d97706', fillColor: '#fbbf24' };
    } else if (magnitude < 6.0) {
        return { radius: 14, color: '#ea580c', fillColor: '#f97316' };
    } else {
        return { radius: 18, color: '#dc2626', fillColor: '#ef4444' };
    }
}

function getMagnitudeClass(magnitude) {
    if (magnitude < 3.0) return 'magnitude-very-low';
    if (magnitude < 4.0) return 'magnitude-low';
    if (magnitude < 5.0) return 'magnitude-medium';
    if (magnitude < 6.0) return 'magnitude-high';
    return 'magnitude-very-high';
}

async function loadVolcanoes() {
    const btn = document.getElementById('load-volcanoes-btn');
    
    btn.disabled = true;
    btn.innerHTML = `
        <div class="spinner" style="width: 18px; height: 18px; border-width: 2px; margin: 0;"></div>
        Yükleniyor...
    `;

    try {
        if (volcanoesLayer) {
            map.removeLayer(volcanoesLayer);
            volcanoesLayer = null;
            btn.classList.remove('active');
            btn.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M12 2v20"/>
                    <path d="M8 6c0-2 2-4 4-4s4 2 4 4"/>
                    <path d="M6 10c0-2 2-4 4-4s4 2 4 4"/>
                    <path d="M10 14c0-2 2-4 4-4s4 2 4 4"/>
                    <path d="M8 18c0-2 2-4 4-4s4 2 4 4"/>
                </svg>
                Volkanları Göster
            `;
            return;
        }

        clearMarkers();

        // Smithsonian Global Volcanism Program API
        const response = await fetch('https://webservices.volcano.si.edu/geoserver/GVP-VOTW/wfs?service=WFS&version=2.0.0&request=GetFeature&typeName=GVP-VOTW:Smithsonian_VOTW_Holocene_Volcanoes&outputFormat=application/json&maxFeatures=2000');
        
        if (!response.ok) {
            throw new Error('Volkan verileri yüklenirken bir hata oluştu.');
        }

        const data = await response.json();
        
        volcanoesLayer = L.geoJSON(data, {
            pointToLayer: function(feature, latlng) {
                return L.marker(latlng, {
                    icon: createVolcanoIcon()
                });
            },
            onEachFeature: function(feature, layer) {
                const props = feature.properties;
                const volcanoName = props.Volcano_Name || 'Bilinmiyor';
                const country = props.Country || 'Bilinmiyor';
                const elevation = props.Elevation || 'Bilinmiyor';
                const volcanoType = props.Primary_Volcano_Type || 'Bilinmiyor';
                
                const popupContent = `
                    <div class="popup-title">🌋 ${volcanoName}</div>
                    <div class="popup-content">
                        <strong>Ülke:</strong> ${country}<br>
                        <strong>Yükseklik:</strong> ${elevation} m<br>
                        <strong>Tip:</strong> ${volcanoType}
                    </div>
                `;
                
                layer.bindPopup(popupContent);
            }
        });

        volcanoesLayer.addTo(map);
        btn.classList.add('active');
        
        const count = data.features ? data.features.length : 0;
        document.getElementById('disaster-count').textContent = count;
        document.getElementById('disaster-max').textContent = '-';
        document.getElementById('disaster-stats').classList.remove('hidden');
        
        btn.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M18 6 6 18"/>
                <path d="m6 6 12 12"/>
            </svg>
            Volkanları Gizle
        `;
        
    } catch (error) {
        alert('Hata: ' + error.message);
        console.error('Volkan verisi yüklenirken hata:', error);
    } finally {
        btn.disabled = false;
    }
}

function createVolcanoIcon() {
    return L.divIcon({
        className: 'volcano-marker',
        html: '🌋',
        iconSize: [24, 24],
        iconAnchor: [12, 12],
        popupAnchor: [0, -12]
    });
}

// ============================================
// TEMATİK KATMAN FONKSİYONLARI
// ============================================
async function toggleTectonicPlates() {
    const btn = document.getElementById('toggle-plates-btn');
    const isActive = btn.classList.contains('active');

    if (isActive) {
        if (tectonicPlatesLayer) {
            map.removeLayer(tectonicPlatesLayer);
            tectonicPlatesLayer = null;
        }
        btn.classList.remove('active');
        btn.querySelector('.toggle-indicator').textContent = 'Kapalı';
    } else {
        btn.classList.add('active');
        btn.querySelector('.toggle-indicator').textContent = 'Açık';
        
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
        alert('Tektonik plaka verileri yüklenemedi.');
        
        const btn = document.getElementById('toggle-plates-btn');
        btn.classList.remove('active');
        btn.querySelector('.toggle-indicator').textContent = 'Kapalı';
    }
}

async function toggleRivers() {
    const btn = document.getElementById('toggle-rivers-btn');
    const isActive = btn.classList.contains('active');

    if (isActive) {
        if (riversLayer) {
            map.removeLayer(riversLayer);
        }
        btn.classList.remove('active');
        btn.querySelector('.toggle-indicator').textContent = 'Kapalı';
    } else {
        btn.classList.add('active');
        btn.querySelector('.toggle-indicator').textContent = 'Açık';
        
        if (!riversLayer) {
            await loadRivers();
        } else {
            riversLayer.addTo(map);
        }
    }
}

async function loadRivers() {
    try {
        const response = await fetch('https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_50m_rivers_lake_centerlines.geojson');
        
        if (!response.ok) {
            throw new Error('Nehir verileri yüklenirken bir hata oluştu.');
        }

        const data = await response.json();
        
        riversLayer = L.geoJSON(data, {
            style: {
                color: '#3b82f6',
                weight: 1.5,
                opacity: 0.8
            },
            onEachFeature: function(feature, layer) {
                const name = feature.properties.name || 'Bilinmiyor';
                layer.bindPopup(`<div class="popup-title">Nehir</div><div class="popup-content">${name}</div>`);
            }
        });

        riversLayer.addTo(map);
        
    } catch (error) {
        console.error('Nehir verisi yüklenirken hata:', error);
        alert('Nehir verileri yüklenemedi.');
        
        const btn = document.getElementById('toggle-rivers-btn');
        btn.classList.remove('active');
        btn.querySelector('.toggle-indicator').textContent = 'Kapalı';
    }
}

async function toggleBoundaries() {
    const btn = document.getElementById('toggle-boundaries-btn');
    const isActive = btn.classList.contains('active');

    if (isActive) {
        if (boundariesLayer) {
            map.removeLayer(boundariesLayer);
        }
        btn.classList.remove('active');
        btn.querySelector('.toggle-indicator').textContent = 'Kapalı';
    } else {
        btn.classList.add('active');
        btn.querySelector('.toggle-indicator').textContent = 'Açık';
        
        if (!boundariesLayer) {
            await loadBoundaries();
        } else {
            boundariesLayer.addTo(map);
        }
    }
}

async function loadBoundaries() {
    try {
        const response = await fetch('https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_50m_admin_0_countries.geojson');
        
        if (!response.ok) {
            throw new Error('Ülke sınırı verileri yüklenirken bir hata oluştu.');
        }

        const data = await response.json();
        
        boundariesLayer = L.geoJSON(data, {
            style: {
                color: '#d97706',
                weight: 1,
                opacity: 0.6,
                fillOpacity: 0
            },
            onEachFeature: function(feature, layer) {
                const name = feature.properties.ADMIN || feature.properties.name || 'Bilinmiyor';
                layer.bindPopup(`<div class="popup-title">${name}</div>`);
            }
        });

        boundariesLayer.addTo(map);
        
    } catch (error) {
        console.error('Ülke sınırı verisi yüklenirken hata:', error);
        alert('Ülke sınırı verileri yüklenemedi.');
        
        const btn = document.getElementById('toggle-boundaries-btn');
        btn.classList.remove('active');
        btn.querySelector('.toggle-indicator').textContent = 'Kapalı';
    }
}

// ============================================
// EĞİTİM ARAÇLARI
// ============================================
function toggleCoordinateTool() {
    coordinateToolActive = !coordinateToolActive;
    const btn = document.getElementById('coordinate-tool-btn');
    const resultDiv = document.getElementById('coordinate-result');
    
    if (coordinateToolActive) {
        btn.classList.add('active');
        document.getElementById('map').classList.add('coordinate-tool-active');
        resultDiv.classList.remove('hidden');
        resultDiv.innerHTML = '<p>Haritaya tıklayarak koordinat bilgisi alın...</p>';
        
        map.on('click', handleCoordinateClick);
    } else {
        btn.classList.remove('active');
        document.getElementById('map').classList.remove('coordinate-tool-active');
        resultDiv.classList.add('hidden');
        map.off('click', handleCoordinateClick);
    }
}

async function handleCoordinateClick(e) {
    const lat = e.latlng.lat;
    const lng = e.latlng.lng;
    const resultDiv = document.getElementById('coordinate-result');
    
    resultDiv.innerHTML = `
        <div class="loading-state" style="padding: 20px;">
            <div class="spinner" style="width: 30px; height: 30px;"></div>
            <p>Konum bilgisi alınıyor...</p>
        </div>
    `;
    
    try {
        // Open-Meteo Geocoding API (tersine)
        const response = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}&localityLanguage=tr`);
        const data = await response.json();
        
        const locality = data.locality || data.city || 'Bilinmiyor';
        const country = data.countryName || 'Bilinmiyor';
        const timezone = data.timeZone || 'Bilinmiyor';
        
        // Yerel zaman hesaplama
        const now = new Date();
        const localTime = now.toLocaleTimeString('tr-TR', { timeZone: timezone.id || 'UTC' });
        
        resultDiv.innerHTML = `
            <div style="margin-bottom: 10px;"><strong>📍 Koordinatlar:</strong></div>
            <div style="font-family: monospace; background: #f1f5f9; padding: 8px; border-radius: 6px; margin-bottom: 12px;">
                Enlem: ${lat.toFixed(6)}°<br>
                Boylam: ${lng.toFixed(6)}°
            </div>
            <div style="margin-bottom: 8px;"><strong>📍 Konum:</strong> ${locality}, ${country}</div>
            <div style="margin-bottom: 8px;"><strong>🌍 Zaman Dilimi:</strong> ${timezone.id || 'Bilinmiyor'}</div>
            <div><strong>🕐 Yerel Saat:</strong> ${localTime}</div>
        `;
        
        // Marker ekle
        const marker = L.marker([lat, lng]).addTo(map);
        marker.bindPopup(`
            <div class="popup-title">Koordinat Bilgisi</div>
            <div class="popup-content">
                Enlem: ${lat.toFixed(6)}°<br>
                Boylam: ${lng.toFixed(6)}°<br>
                Konum: ${locality}, ${country}
            </div>
        `).openPopup();
        
        currentMarkers.push(marker);
        
    } catch (error) {
        resultDiv.innerHTML = `
            <div style="margin-bottom: 10px;"><strong>📍 Koordinatlar:</strong></div>
            <div style="font-family: monospace; background: #f1f5f9; padding: 8px; border-radius: 6px;">
                Enlem: ${lat.toFixed(6)}°<br>
                Boylam: ${lng.toFixed(6)}°
            </div>
            <p style="color: #ef4444; margin-top: 10px;">Adres bilgisi alınamadı.</p>
        `;
    }
}

function toggleDistanceTool() {
    distanceToolActive = !distanceToolActive;
    const btn = document.getElementById('distance-tool-btn');
    const resultDiv = document.getElementById('distance-result');
    
    if (distanceToolActive) {
        btn.classList.add('active');
        resultDiv.classList.remove('hidden');
        resultDiv.innerHTML = '<p>Haritaya iki nokta tıklayarak mesafe hesaplayın...</p>';
        
        distancePoints = [];
        clearDistanceElements();
        
        map.on('click', handleDistanceClick);
    } else {
        btn.classList.remove('active');
        resultDiv.classList.add('hidden');
        map.off('click', handleDistanceClick);
        clearDistanceElements();
    }
}

function handleDistanceClick(e) {
    const lat = e.latlng.lat;
    const lng = e.latlng.lng;
    const resultDiv = document.getElementById('distance-result');
    
    distancePoints.push({ lat, lng });
    
    // Marker ekle
    const marker = L.marker([lat, lng]).addTo(map);
    marker.bindPopup(`Nokta ${distancePoints.length}`).openPopup();
    distanceMarkers.push(marker);
    
    if (distancePoints.length === 1) {
        resultDiv.innerHTML = '<p>İkinci noktayı seçin...</p>';
    } else if (distancePoints.length === 2) {
        const distance = calculateDistance(
            distancePoints[0].lat, distancePoints[0].lng,
            distancePoints[1].lat, distancePoints[1].lng
        );
        
        // Çizgi çiz
        distanceLine = L.polyline(
            [[distancePoints[0].lat, distancePoints[0].lng], [distancePoints[1].lat, distancePoints[1].lng]],
            { color: '#6366f1', weight: 3, dashArray: '10, 5' }
        ).addTo(map);
        
        resultDiv.innerHTML = `
            <div style="text-align: center; padding: 10px;">
                <div style="font-size: 28px; font-weight: 800; color: #6366f1; margin-bottom: 5px;">
                    ${distance.toFixed(2)} km
                </div>
                <div style="font-size: 12px; color: #64748b;">
                    (${(distance * 0.621371).toFixed(2)} mil)
                </div>
            </div>
        `;
        
        // Reset
        setTimeout(() => {
            distancePoints = [];
        }, 100);
    } else {
        // Yeni hesaplama başlat
        clearDistanceElements();
        distancePoints = [{ lat, lng }];
        const marker = L.marker([lat, lng]).addTo(map);
        marker.bindPopup('Nokta 1').openPopup();
        distanceMarkers.push(marker);
        resultDiv.innerHTML = '<p>İkinci noktayı seçin...</p>';
    }
}

function clearDistanceElements() {
    if (distanceLine) {
        map.removeLayer(distanceLine);
        distanceLine = null;
    }
    distanceMarkers.forEach(marker => map.removeLayer(marker));
    distanceMarkers = [];
}

function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Dünya yarıçapı (km)
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
              Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
}

async function compareCountries() {
    const country1Input = document.getElementById('compare-country1');
    const country2Input = document.getElementById('compare-country2');
    const resultDiv = document.getElementById('compare-result');
    
    let name1 = country1Input.value.trim();
    let name2 = country2Input.value.trim();
    
    if (!name1 || !name2) {
        alert('Lütfen iki ülke adı girin.');
        return;
    }
    
    // Türkçe isim kontrolü
    const name1Lower = name1.toLowerCase();
    const name2Lower = name2.toLowerCase();
    if (countryNamesEN[name1Lower]) name1 = countryNamesEN[name1Lower];
    if (countryNamesEN[name2Lower]) name2 = countryNamesEN[name2Lower];
    
    resultDiv.classList.remove('hidden');
    resultDiv.innerHTML = `
        <div class="loading-state" style="padding: 20px;">
            <div class="spinner" style="width: 30px; height: 30px;"></div>
            <p>Ülkeler karşılaştırılıyor...</p>
        </div>
    `;
    
    try {
        const [response1, response2] = await Promise.all([
            fetch(`https://restcountries.com/v3.1/name/${encodeURIComponent(name1)}`),
            fetch(`https://restcountries.com/v3.1/name/${encodeURIComponent(name2)}`)
        ]);
        
        if (!response1.ok || !response2.ok) {
            throw new Error('Bir veya daha fazla ülke bulunamadı.');
        }
        
        const [data1, data2] = await Promise.all([
            response1.json(),
            response2.json()
        ]);
        
        const country1 = data1[0];
        const country2 = data2[0];
        
        const trName1 = countryNamesTR[country1.name.common] || country1.name.common;
        const trName2 = countryNamesTR[country2.name.common] || country2.name.common;
        
        const pop1 = country1.population || 0;
        const pop2 = country2.population || 0;
        const area1 = country1.area || 0;
        const area2 = country2.area || 0;
        
        const popDensity1 = (pop1 / area1).toFixed(1);
        const popDensity2 = (pop2 / area2).toFixed(1);
        
        resultDiv.innerHTML = `
            <table class="compare-table">
                <thead>
                    <tr>
                        <th>Özellik</th>
                        <th>${trName1}</th>
                        <th>${trName2}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Başkent</strong></td>
                        <td>${country1.capital ? country1.capital[0] : '-'}</td>
                        <td>${country2.capital ? country2.capital[0] : '-'}</td>
                    </tr>
                    <tr>
                        <td><strong>Nüfus</strong></td>
                        <td class="${pop1 > pop2 ? 'compare-winner' : ''}">${new Intl.NumberFormat('tr-TR').format(pop1)}</td>
                        <td class="${pop2 > pop1 ? 'compare-winner' : ''}">${new Intl.NumberFormat('tr-TR').format(pop2)}</td>
                    </tr>
                    <tr>
                        <td><strong>Yüzölçümü</strong></td>
                        <td class="${area1 > area2 ? 'compare-winner' : ''}">${new Intl.NumberFormat('tr-TR').format(Math.round(area1))} km²</td>
                        <td class="${area2 > area1 ? 'compare-winner' : ''}">${new Intl.NumberFormat('tr-TR').format(Math.round(area2))} km²</td>
                    </tr>
                    <tr>
                        <td><strong>Nüfus Yoğunluğu</strong></td>
                        <td>${popDensity1} kişi/km²</td>
                        <td>${popDensity2} kişi/km²</td>
                    </tr>
                    <tr>
                        <td><strong>Bölge</strong></td>
                        <td>${country1.region || '-'}</td>
                        <td>${country2.region || '-'}</td>
                    </tr>
                    <tr>
                        <td><strong>Dil</strong></td>
                        <td>${country1.languages ? Object.values(country1.languages)[0] : '-'}</td>
                        <td>${country2.languages ? Object.values(country2.languages)[0] : '-'}</td>
                    </tr>
                </tbody>
            </table>
        `;
        
    } catch (error) {
        resultDiv.innerHTML = `<p style="color: #ef4444;">${error.message}</p>`;
    }
}

function toggleWeatherTool() {
    weatherToolActive = !weatherToolActive;
    const btn = document.getElementById('weather-tool-btn');
    const resultDiv = document.getElementById('weather-result');
    
    if (weatherToolActive) {
        btn.classList.add('active');
        resultDiv.classList.remove('hidden');
        resultDiv.innerHTML = '<p>Haritaya tıklayarak hava durumu bilgisi alın...</p>';
        
        map.on('click', handleWeatherClick);
    } else {
        btn.classList.remove('active');
        resultDiv.classList.add('hidden');
        map.off('click', handleWeatherClick);
    }
}

async function handleWeatherClick(e) {
    const lat = e.latlng.lat;
    const lng = e.latlng.lng;
    const resultDiv = document.getElementById('weather-result');
    
    resultDiv.innerHTML = `
        <div class="loading-state" style="padding: 20px;">
            <div class="spinner" style="width: 30px; height: 30px;"></div>
            <p>Hava durumu bilgisi alınıyor...</p>
        </div>
    `;
    
    try {
        const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&current_weather=true&timezone=auto`);
        const data = await response.json();
        
        const weather = data.current_weather;
        const temp = weather.temperature;
        const windSpeed = weather.windspeed;
        const windDir = weather.winddirection;
        const weatherCode = weather.weathercode;
        const isDay = weather.is_day;
        
        // Hava durumu kodunu açıklamaya çevir
        const weatherDesc = getWeatherDescription(weatherCode);
        const weatherIcon = getWeatherIcon(weatherCode, isDay);
        
        resultDiv.innerHTML = `
            <div class="weather-card">
                <div class="weather-icon">${weatherIcon}</div>
                <div class="weather-info">
                    <div class="weather-temp">${temp}°C</div>
                    <div class="weather-desc">${weatherDesc}</div>
                    <div style="font-size: 11px; color: #64748b; margin-top: 4px;">
                        💨 Rüzgar: ${windSpeed} km/sa (${windDir}°)
                    </div>
                </div>
            </div>
        `;
        
        // Marker ekle
        const marker = L.marker([lat, lng]).addTo(map);
        marker.bindPopup(`
            <div class="popup-title">Hava Durumu</div>
            <div class="popup-content">
                <div style="font-size: 24px; margin-bottom: 5px;">${weatherIcon} ${temp}°C</div>
                <div>${weatherDesc}</div>
                <div style="font-size: 11px; margin-top: 5px;">Rüzgar: ${windSpeed} km/sa</div>
            </div>
        `).openPopup();
        
        currentMarkers.push(marker);
        
    } catch (error) {
        resultDiv.innerHTML = `<p style="color: #ef4444;">Hava durumu bilgisi alınamadı.</p>`;
    }
}

function getWeatherDescription(code) {
    const codes = {
        0: 'Açık', 1: 'Parçalı Bulutlu', 2: 'Parçalı Bulutlu', 3: 'Bulutlu',
        45: 'Sisli', 48: 'Sisli',
        51: 'Hafif Çisenti', 53: 'Çisenti', 55: 'Yoğun Çisenti',
        61: 'Hafif Yağmur', 63: 'Yağmur', 65: 'Şiddetli Yağmur',
        71: 'Hafif Kar', 73: 'Kar', 75: 'Yoğun Kar',
        80: 'Sağanak', 81: 'Şiddetli Sağanak', 82: 'Dolu',
        95: 'Gök Gürültülü Fırtına', 96: 'Dolu Fırtınası', 99: 'Şiddetli Dolu'
    };
    return codes[code] || 'Bilinmiyor';
}

function getWeatherIcon(code, isDay) {
    if (code === 0) return isDay ? '☀️' : '🌙';
    if (code <= 3) return '⛅';
    if (code <= 48) return '🌫️';
    if (code <= 67) return '🌧️';
    if (code <= 77) return '❄️';
    if (code <= 82) return '⛈️';
    return '⛈️';
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
    clearMarkers();
    clearDistanceElements();
    
    // Tüm katmanları temizle
    if (earthquakesLayer) {
        map.removeLayer(earthquakesLayer);
        earthquakesLayer = null;
    }
    if (volcanoesLayer) {
        map.removeLayer(volcanoesLayer);
        volcanoesLayer = null;
    }
    if (tectonicPlatesLayer) {
        map.removeLayer(tectonicPlatesLayer);
        tectonicPlatesLayer = null;
    }
    if (riversLayer) {
        map.removeLayer(riversLayer);
    }
    if (boundariesLayer) {
        map.removeLayer(boundariesLayer);
    }
    
    // Buton durumlarını sıfırla
    document.querySelectorAll('.layer-btn').forEach(btn => {
        btn.classList.remove('active');
        btn.querySelector('.toggle-indicator').textContent = 'Kapalı';
    });
    
    document.getElementById('load-volcanoes-btn').classList.remove('active');
    document.getElementById('load-volcanoes-btn').innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 2v20"/>
            <path d="M8 6c0-2 2-4 4-4s4 2 4 4"/>
            <path d="M6 10c0-2 2-4 4-4s4 2 4 4"/>
            <path d="M10 14c0-2 2-4 4-4s4 2 4 4"/>
            <path d="M8 18c0-2 2-4 4-4s4 2 4 4"/>
        </svg>
        Volkanları Göster
    `;
    
    document.getElementById('disaster-stats').classList.add('hidden');
    
    // Eğitim araçlarını kapat
    if (coordinateToolActive) toggleCoordinateTool();
    if (distanceToolActive) toggleDistanceTool();
    if (weatherToolActive) toggleWeatherTool();
    
    resetMapView();
}

function resetMapView() {
    map.flyTo([39.0, 35.0], 6, {
        duration: 1.5,
        easeLinearity: 0.25
    });
}

function toggleFullscreen() {
    const mapContainer = document.getElementById('map-container');
    
    if (!document.fullscreenElement) {
        mapContainer.requestFullscreen().catch(err => {
            alert('Tam ekran modu desteklenmiyor: ' + err.message);
        });
    } else {
        document.exitFullscreen();
    }
}

// ============================================
// GLOBAL ERİŞİM (DEBUG İÇİN)
// ============================================
window.GeoPortal = {
    map: () => map,
    clearLayers: clearAllLayers,
    resetView: resetMapView,
    searchCountry: searchCountry,
    loadEarthquakes: loadEarthquakes,
    loadVolcanoes: loadVolcanoes
};
