export default {
  namespaced: true,
  state: {
    langDefault: localStorage.lang,
    langFallback: 'tr',
    langSupport: ['tr', 'en']
  },
  getters: {
    langDefault: state => {
      if (state.langSupport.indexOf(state.langDefault) === -1) {
        return state.langFallback
      }
      return state.langDefault
    },
    langSupport: state => state.langSupport
  },
  actions: {},
  mutations: {
    LANG_CHANGE (state, { lang, app }) {
      state.langDefault = lang
      localStorage.setItem('lang', lang)
      app.$root.$i18n.locale = lang
      app.$root.$validator.localize(lang)
    }
  }
}
