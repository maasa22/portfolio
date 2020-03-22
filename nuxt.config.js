export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: "Hiroaki Masaki",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          process.env.npm_package_description ||
          "A personal web page of Hiroaki Masaki"
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: ["bootstrap-vue/nuxt", "nuxt-fontawesome"],

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  fontawesome: {
    imports: [
      {
        set: "@fortawesome/free-solid-svg-icons",
        icons: ["fas"]
      },
      {
        set: "@fortawesome/free-brands-svg-icons",
        icons: ["fab"]
      },
      {
        set: "@fortawesome/free-regular-svg-icons",
        icons: ["far"]
      }
    ]
  }
};
