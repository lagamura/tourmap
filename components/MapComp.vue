<template>
  <div class="map-wrapper pa-6">
    <div id="map"></div>
    <p>{{ searchInput }}</p>
  </div>
</template>

<script setup>
import { onMounted, reactive } from "vue";
import * as GeoSearch from "leaflet-geosearch";

const popup = ref();
const searchInput = ref("");
let map;

onMounted(() => {
  L.DomEvent.fakeStop = function () {
    return true;
  };
  nextTick(function () {
    initcarte();
  });
});

function initcarte() {
  map = L.map("map");
  // map.setView([lat, lng], zoom);
  map.setView([37.98381, 23.727539], 13);
  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);

  const marker = L.marker([37.9, 23.7]) //confilct in rendering with map.addControl
    .addTo(map)
    .bindPopup("<b>Hello world!</b><br />I am a popup.")
    .openPopup();

  popup.value = L.popup()
    .setLatLng([37.9, 23.7])
    .setContent("I am a standalone popup.")
    .openOn(map);

  map.on("click", onMapClick);

  function onMapClick(e) {
    popup.value
      .setLatLng(e.latlng)
      .setContent(`You clicked the map at ${e.latlng.toString()}`)
      .openOn(map);
  }
}

const search = new GeoSearch.GeoSearchControl({
  provider: new GeoSearch.OpenStreetMapProvider(),
});

// searchInput.value = search.input;
console.log(search);
console.log(search.resultList);
console.log(search.searchElement.input);
map.addControl(search);
</script>

<style scoped>
#map {
  height: 300px;
  width: 500px;
}

.leaflet-control-geosearch form input {
  color: black !important;
  border-bottom-color: black !important;
}

input.glass {
  color: black;
}
/* geosearch leaflet-bar leaflet-control leaflet-control-geosearch leaflet-geosearch-button active" */
</style>
