import Vue from 'vue'
import App from './App'
import router from './router'
import i18n from './i18n'
import store from '@/store'
import VeeValidate, { Validator } from 'vee-validate'
import tr from 'vee-validate/dist/locale/tr'

Validator.localize('tr', tr)

const config = {
  events: 'input'
}

Vue.use(VeeValidate, config)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  store,
  template: '<App/>',
  components: {App}
})
