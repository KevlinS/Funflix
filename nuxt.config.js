export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  
  head: {
    title: 'Funflix',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: "stylesheet", type: "text/css", href: "https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" },
      {rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"}
    ],
    script: [
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js' },
      { src: 'https://code.jquery.com/jquery-3.3.1.slim.min.js' },
      { src: 'https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [

  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src : '~/plugins/vuesimplealert', ssr: false}
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/axios',
    
  ],
//   axios: {
//     baseURL: process.env.BASE_URL ||'https://api.themoviedb.org/3'
// },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },
  env: {
    API_URL_NOWPLAYING: process.env.API_URL_NOWPLAYING,
    API_URL_POPULAR: process.env.API_URL_POPULAR,
    API_URL_TOPRATED: process.env.API_URL_TOPRATED,
    API_URL_UPCOMING: process.env.API_URL_UPCOMING,
    API_URL_MOVIE: process.env.API_URL_MOVIE,
    API_KEY: process.env.API_KEY
  }

}
