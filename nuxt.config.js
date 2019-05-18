// import pkg from './package'
import path from 'path'
import * as constants from './constants.js'
import axios from 'axios'

export default {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: constants.metaDescription
      }
    ],
    title: constants.metaTitle,
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: constants.color
  },

  /*
   ** Global CSS
   */
  css: ['~/assets/css/tailwind.css', '~/assets/css/main.scss'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~/plugins/globalComponents.js',
    '~/plugins/filters.js',
    '~/plugins/v-lazy-image.js',
    '~plugins/ga.client.js'
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Axios: https://axios.nuxtjs.org/
    '@nuxtjs/axios',
    // PWA functions
    '@nuxtjs/pwa',
    // RSS Feed Module: https://github.com/nuxt-community/feed-module TODO: enable
    //'@nuxtjs/feed',
    // PurgeCSS
    'nuxt-purgecss',
    // https://github.com/nuxt-community/style-resources-module
    '@nuxtjs/style-resources',
    // Storyblok https://github.com/storyblok/storyblok-nuxt
    [
      'storyblok-nuxt',
      {
        accessToken: constants.sbAccessToken
      }
    ],
    // Sitemap.xml (NEEDS TO BE LAST MODULE!) https://www.npmjs.com/package/@nuxtjs/sitemap
    '@nuxtjs/sitemap'
  ],
  /*
   ** Router Config
   */
  router: {
    /* routes: [
      {
        path: '/index',
        redirect: '/'
      }
    ], */
    middleware: ['getSettings', 'languageDetection']
  },
  /*
   ** Build configuration
   */
  build: {
    // Webpack bundle analyzer, will create report in .nuxt/stats/
    /* analyze: {
      analyzerMode: 'static'
    }, */
    /*
     ** You can extend webpack config here
     */
    postcss: {
      // https://nuxtjs.org/faq/postcss-plugins/
      plugins: {
        tailwindcss: path.resolve(__dirname, './tailwind.config.js')
      },
      preset: {
        // Change the postcss-preset-env settings
        stage: 0,
        autoprefixer: {
          cascade: false, // don't indent prefixes
          grid: 'autoplace' // enable IE polyfill for css grid
        },
        cssnano: {
          preset: 'default',
          discardComments: { removeAll: true },
          zindex: false
        }
      }
    },
    extend(config, ctx) {}
  },

  /*
   * Render configuration
   */
  render: {
    http2: { push: true }
  },
  /*
   * Generate configuration
   */
  generate: {
    routes: function() {
      return axios
        .get(
          constants.sbGetUrlProd +
          '&filter_query[component][in]=' +
          constants.sbPageComponents + // get all components that should be generated as pages
            '&excluding_ids=' +
            constants.sbIndexPageId // exclude /index page (so it is not generated twice)
        )
        .then(res => {
          const pages = res.data.stories.map(page => page.full_slug)
          return [
            '/', // home page
            ...pages // pages from storyblok
          ]
        })
    }
  },
  /*
   * module-specific settings
   */
  sitemap: {
    hostname: constants.baseUrlSecure,
    gzip: true
  },
  purgeCSS: {
    // CSS tree shaking
    // Doc: https://github.com/Developmint/nuxt-purgecss
    mode: 'postcss',
    whitelist: ['is-active', 'nuxt-link-exact-active', 'nuxt-link-active'], // https://github.com/FullHuman/purgecss-docs/blob/master/whitelisting.md
    whitelistPatterns: [/page/]
  },
  styleResources: {
    // Global scss vars/mixins/etc
    scss: ['~/assets/css/mixins.scss']
  },
  /* feed: [
    /*
     * RSS Feed
     * https://github.com/nuxt-community/feed-module
     * https://github.com/jpmonette/feed
     * https://www.storyblok.com/tp/how-to-generate-an-rss-feed-with-a-headless-cms
     
    {
      path: '/feed.xml',
      async create(feed) {
        feed.options = {
          title: constants.baseName,
          language: 'en',
          link: constants.baseUrl,
          description: constants.description
        }

        const { data } = await axios.get(sbLiveGetUrl + '&starts_with=articles')
        data.stories.forEach(post => {
          feed.addItem({
            title: post.content.title ? post.content.title : post.name,
            link: constants.baseUrl + '/blog/' + post.slug,
            description: post.content.excerpt ? post.content.excerpt : null
          })
        })

        feed.addCategory('Design')
      },
      cacheTime: 1000 * 60 * 15,
      type: 'rss2'
    }
  ], */
  manifest: {
    name: constants.baseName,
    short_name: constants.shortName,
    lang: constants.defaultLanguage,
    display: 'minimal-ui',
    theme_color: constants.colorBg,
    background_color: constants.color,
    description: constants.metaDescription,
    scope: '/',
    start_url: '/'
  }
}
