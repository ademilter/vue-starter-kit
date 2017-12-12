import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

// Global
import i18n from '@/i18n/store'

// Pages
import Home from '@/view/pages/home/store'
import About from '@/view/pages/about/store'
import Contact from '@/view/pages/contact/store'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    // Globals
    i18n,
    // Pages
    Home,
    About,
    Contact
  },
  strict: debug,
  plugins: [
    createPersistedState({
      key: `${process.env.PROJECT_NAMESPACE}Store`
    })
  ]
})
