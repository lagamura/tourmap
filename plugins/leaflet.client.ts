import L from "leaflet";
// import "leaflet.markercluster";
// import "leaflet-fullscreen";
// import "leaflet-sidebar";
// import "leaflet.vectorgrid";
export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      L,
    },
  };
});
