if (!coordinates || coordinates.length !== 2) {
  console.error("Invalid coordinates found for this listing", coordinates);
}

//  MapTiler key
maptilersdk.config.apiKey = map_token;

//  Create Map
const map = new maptilersdk.Map({
  container: "map",
  style: https://api.maptiler.com/maps/streets-v2/style.json?key=${map_token},
  center: coordinates, // [lng, lat]
  zoom: 13,
});

//  Add Navigation Controls
map.addControl(new maptilersdk.NavigationControl(), "top-right");

// Custom Marker
const marker = new maptilersdk.Marker()
  .setLngLat(coordinates)
  .addTo(map);