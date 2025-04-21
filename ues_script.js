let uesMap;


// Initialize the map
uesMap = L.map('map');

// Add a tile layer to the map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(uesMap);

uesMap.setView([40.7763279, -73.962955], 16);

L.GeoJSON(ues70nyc).addTo(uesMap);

L.GeoJSON(ues70nyc, {
    style: function(feature) {
        return {
        color: 'blue',
        fillColor: 'yellow',
        weight: 2,
        fillOpacity: 0.5
        };
    }
}).addTo(uesMap);

// L.geoJson(ues70nyc, {
//     style: {
//         color: '#3388ff',
//         weight: 2,
//         fillOpacity: 0.5
//     },
//     onEachFeature: function (feature, layer) {
//         layer.bindPopup(feature.properties.name);
//     }
// }).addTo(uesMap);

// Example marker
const e77Park = L.marker([40.7763279, -73.962955]).addTo(uesMap)
    .bindPopup('East 77th Street Park<br>Located at 40.7763279, -73.962955')
    .openPopup();