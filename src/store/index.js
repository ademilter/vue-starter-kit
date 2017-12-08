import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import { createVuexLoader } from 'vuex-loading'

// Global
import i18n from '@/i18n/store'

// Pages
import Auth from '@/view/pages/home/store'

// Component
// import Discount from '@/view/components/Discount/store'

const VuexLoading = createVuexLoader({
  moduleName: 'loader',
  componentName: 'v-loading'
})

Vue.use(Vuex)
Vue.use(VuexLoading)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    // Globals
    i18n,
    // Pages
    Auth
    // Component
  },
  strict: debug,
  plugins: [
    VuexLoading.Store,
    createPersistedState()
  ]
})
