/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import { loadFonts } from './webfontloader'
import vuetify from './vuetify'
import router from '../router'
import Toaster from "@meforma/vue-toaster"
import styles from '../styles/style.css'

export function registerPlugins (app) {
  loadFonts()
  app
    .use(vuetify)
    .use(router)
    .use(styles)
    .use(Toaster, { timeout: 2000 })
}
