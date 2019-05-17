// Configuration for your app
// const port = 9527
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, '.', dir)
}

module.exports = function (ctx) {
  return {
    // app plugins (/src/plugins)
    plugins: [
      'vuelidate',
      'i18n',
      'ECharts',
    ],
    css: [
      'app.styl'
    ],
    extras: [
      ctx.theme.mat ? 'roboto-font' : null,
      'material-icons' // optional, you are not bound to it
      // 'ionicons',
      // 'mdi',
      // 'fontawesome'
    ],
    supportIE: true,
    build: {
      // env: ctx.dev
      // ? { // so on dev we'll have
      //   API: JSON.stringify('http://localhost:3000')
      // }
      // : { // and on build (production):
      //   API: JSON.stringify('http://69.171.69.13:3000')
      // },
      scopeHoisting: true,
      // vueRouterMode: 'history',
      // vueCompiler: true,
      // gzip: true,
      // analyze: true,
      // extractCSS: false,
      extendWebpack (cfg) {
        // cfg.module.rules.push({
        //   enforce: 'pre',
        //   test: /\.(js|vue)$/,
        //   loader: 'eslint-loader',
        //   exclude: /node_modules/
        // })
        cfg.resolve.alias = {
          ...cfg.resolve.alias, // This adds the existing alias

          // Add you own alias like this
          '@': resolve('src')
        }
      }
    },
    devServer: {
      // https: true,
      // port: port,
      open: true, // opens browser window automatically
      // overlay: {
      //   warnings:false,
      //   errors:true
      // },
      // proxy: {
      //   [process.env.VUE_APP_BASE_API]: {
      //     target: `http://localhost:${port}/mock`,
      //     changeOrigin: true,
      //     pathRewrite: {
      //       ['^' + process.env.VUE_APP_BASE_API]: ''
      //     }
      //   }
      // },
      // after: require('./mock/mock.js')
    },
    framework: 'all', //--- includes everything; for dev only!
    // framework: {
    //   components: [
    //     'QLayout',
    //     'QLayoutHeader',
    //     'QLayoutDrawer',
    //     'QPageContainer',
    //     'QPage',
    //     'QToolbar',
    //     'QToolbarTitle',
    //     'QBtn',
    //     'QIcon',
    //     'QList',
    //     'QListHeader',
    //     'QItem',
    //     'QItemMain',
    //     'QItemSide',
    //     'QTable',
    //     'QTh',
    //     'QTr',
    //     'QTd',
    //     'QTableColumns',
    //     'QCard',
    //     'QCardTitle',
    //     'QCardMain',
    //     'QCardMedia',
    //     'QCardSeparator',
    //     'QCardActions',
    //     'QTabs',
    //     'QTab',
    //     'QTabPane',
    //     'QRouteTab',
    //     'QToggle',
    //     'QInput',
    //     'QTree',
    //     'QChip',
    //     'QCollapsible'
    //   ],
    //   directives: [
    //     'Ripple'
    //   ],
    //   // Quasar plugins
    //   plugins: [
    //     'Notify'
    //   ]
    //   // iconSet: ctx.theme.mat ? 'material-icons' : 'ionicons'
    //   // i18n: 'de' // Quasar language
    // },
    animations: 'all', //--- includes all animations
    // animations: [],
    ssr: {
      pwa: false
    },
    pwa: {
      // workboxPluginMode: 'InjectManifest',
      // workboxOptions: {},
      manifest: {
        // name: 'Quasar App',
        // short_name: 'Quasar-PWA',
        // description: 'Best PWA App in town!',
        display: 'standalone',
        orientation: 'portrait',
        background_color: '#ffffff',
        theme_color: '#027be3',
        icons: [
          {
            'src': 'statics/icons/icon-128x128.png',
            'sizes': '128x128',
            'type': 'image/png'
          },
          {
            'src': 'statics/icons/icon-192x192.png',
            'sizes': '192x192',
            'type': 'image/png'
          },
          {
            'src': 'statics/icons/icon-256x256.png',
            'sizes': '256x256',
            'type': 'image/png'
          },
          {
            'src': 'statics/icons/icon-384x384.png',
            'sizes': '384x384',
            'type': 'image/png'
          },
          {
            'src': 'statics/icons/icon-512x512.png',
            'sizes': '512x512',
            'type': 'image/png'
          }
        ]
      }
    },
    cordova: {
      // id: 'org.cordova.quasar.app'
    },
    electron: {
      // bundler: 'builder', // or 'packager'
      extendWebpack (cfg) {
        // do something with Electron process Webpack cfg
      },
      packager: {
        // https://github.com/electron-userland/electron-packager/blob/master/docs/api.md#options

        // OS X / Mac App Store
        // appBundleId: '',
        // appCategoryType: '',
        // osxSign: '',
        // protocol: 'myapp://path',

        // Window only
        // win32metadata: { ... }
      },
      builder: {
        // https://www.electron.build/configuration/configuration

        // appId: 'quasar-app'
      }
    }
  }
}
