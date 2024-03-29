export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Anna Rodrigues",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      {charset: "utf-8"},
      {name: "viewport", content: "width=device-width, initial-scale=1"},
      {hid: "description", name: "description", content: ""},
      {name: "format-detection", content: "telephone=no"},
    ],
    link: [
      {rel: "icon", type: "image/x-icon", href: "/favicon.ico"},
      {rel: "stylesheet", href: "https://use.typekit.net/ggt2pmd.css"},
      {rel: "preconnect", href: "https://fonts.googleapis.com"},
      {rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: ""},
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;700&display=swap",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/css/main", "@/assets/css/icon", "@/assets/css/breakpoints"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxt/content"],

  // https://content.nuxtjs.org/api/configuration
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  target: 'static',
};
