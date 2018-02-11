<template lang="pug">
  .App
    AppHeader
    AppNavigation
    main.AppContent
      router-view
    AppFooter
</template>

<script>
  import { mapGetters } from 'vuex'
  import AppHeader from '@/view/global/app-header'
  import AppNavigation from '@/view/global/app-navigation'
  import AppFooter from '@/view/global/app-footer'

  export default {
    name: 'App',
    components: {
      AppHeader,
      AppNavigation,
      AppFooter
    },
    computed: {
      ...mapGetters('i18n', [
        'langDefault'
      ])
    },
    mounted () {
      const payload = {
        lang: this.langDefault,
        app: this
      }
      this.$store.commit('i18n/LANG_CHANGE', payload, { root: true })
    }
  }
</script>

<style lang="scss">
  @import "stylesheet/app";
</style>
