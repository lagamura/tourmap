// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: [
    "vuetify/lib/styles/main.sass",
    "@mdi/font/css/materialdesignicons.css",
    "@vuepic/vue-datepicker/dist/main.css",
    "leaflet-geosearch/dist/geosearch.css",
  ],
  build: {
    transpile: ["vuetify", "@vuepic/vue-datepicker"],
  },
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
  },
  app: {
    head: {
      meta: [
        // <meta name="viewport" content="width=device-width, initial-scale=1">
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
      link: [
        // <link rel="stylesheet" href="https://myawesome-lib.css">
        {
          rel: "stylesheet",
          href: "https://unpkg.com/leaflet@1.9.2/dist/leaflet.css",
          integrity: "sha256-sA+zWATbFveLLNqWO2gtiw3HL/lh1giY/Inf1BJ0z14=",
          crossorigin: "",
        },
      ],
      script: [
        // <script src="https://myawesome-lib.js"></script>
        {
          src: "https://unpkg.com/leaflet@1.9.2/dist/leaflet.js",
          integrity: "sha256-o9N1jGDZrf5tS+Ft4gbIK7mYMipq9lqpVJ91xHSyKhg=",
          crossorigin: "",
        },
      ],
    },
  },
  // routeRules: { "/**": { ssr: false } },
  ssr: false, // Disable Server Side rendering
});
