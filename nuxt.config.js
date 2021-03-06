
export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      { name: 'url', property: 'og:url', content: 'https://photo-masonry.herokuapp.com/' },
      { name: 'title', property: 'og:title', content: 'nuxt-masonry' },
      { property: 'og:type', content: 'website' },
      { name: 'description', property: 'og:description', content: process.env.npm_package_description || '' },
      { name: 'image', property: 'og:image', content: '/og-image-linkedin.png' },
      { name: 'author', content: 'Jaswanth Sai Sattenapalli (jaswanthsaisattenapalli@gmail.com)' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    // '~/plugins/axios',
    '~/plugins/api-service',
    '~/plugins/vue-lazyload',
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/router',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    },
  },
  generate: {
    routes: [
      '/'
    ]
  }
}
