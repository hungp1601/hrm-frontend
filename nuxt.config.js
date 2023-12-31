/* eslint-disable @typescript-eslint/no-unused-vars */
import { join } from 'path'
import * as env from './env'

import { Routes } from './src/config'


global.appEnv = env
const {
  /* Paths */
  SRC_DIR,
  // STYLES_DIR,
  /* URL */
  // BASE_URL,
  // BASE_API_URL,
  FULL_API_URL,
  // FULL_API_GRAPHQL_URL,
  /* Locales */
  // DEFAULT_LOCALE,
  // FALLBACK_LOCALE,
  // LOCALES,
  /* Server */
  NUXT_HOST,
  NUXT_PORT
  /* Other */
  // BROWSERS_SUPPORT,
  // NODE_SUPPORT
} = env

// const plugins = require(join(CONFIGS_DIR, 'plugins.ts')).default

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'hrm-app',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Roboto",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Khula&display=swap",
      },

    ]
  },

  srcDir: 'src',

  tailwindcss: {
    // add '~tailwind.config` alias
    exposeConfig: true
  },

  server: {
    host: NUXT_HOST,
    port:NUXT_PORT,
  },

  css: [
    '@/assets/scss/global.scss',
    '@/assets/scss/app.scss'
  ],

  plugins: [
    '@/ui/plugins/element-ui',
    '@/ui/plugins/bootstrap',
    '@/plugins/global/perfect-scrollbar',
    '@/plugins/global/draggable',
    '@/plugins/global/mixins',
    '@/plugins/serivce.locator'
  ],

  components: true,

  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxt/postcss8',
    '@nuxtjs/google-fonts',
    '@nuxtjs/fontawesome'
  ],

  modules: [
    'cookie-universal-nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    '@nuxtjs/style-resources',

  ],

  middleware: ['@/middleware/auth'],

  components: [
    { path: '@/ui/components' },
  ],

//   auth: {
//     localStorage: false,
//     cookie: {
//       options: {
//         expires: 30,
//       },
//     },
//     redirect: {
//       home: '/',
//       login: '/',
//       logout: '/',
//     },

//     strategies: {
//       local: {
// //      scheme: "refresh",
//         token: {
//           property: "token",
//           global: true,
//           required: true,
//           type: "Bearer"
//         },

//         endpoints: {
// //           login: { url: "/auth/login", method: "post" },
// // //        refresh: { url: "  /auth/refresh-token", method: "post" },
// //           logout: { url: '/auth/logout', method: 'post' },
// //           user: { url: "/auth/user", method: "get" }
//         }
//       }
//     }
//   },

  axios: {
    baseURL: FULL_API_URL,
    proxyHeaders: false,
    credentials: true,
  },

  router: {
    extendRoutes (routes) {
      routes.splice(0)
      routes.push(...Routes)
    },
    // base: APP_PATH.PATH_PROJECT_RESOURCES
    //   ? `/${APP_PATH.PATH_PROJECT_RESOURCES}/`
    //   : '/',
  },


  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
