import Vue from 'vue'
import Vuex from 'vuex'

// Global
import i18n from '@/i18n/store'

// Pages
import Home from '@/view/pages/Home/store'
import About from '@/view/pages/About/store'
import Contact from '@/view/pages/Contact/store'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    i18n,
    Home,
    About,
    Contact
  },
  strict: debug
})
