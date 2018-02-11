<template lang="pug">
  .App
    AppHeader
    AppNavigation
    main.AppContent
      router-view
    AppFooter
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
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
    methods: {
      ...mapActions('i18n', [
        'langChange'
      ])
    },
    mounted () {
      this.langChange({
        lang: this.langDefault,
        app: this
      })
    }
  }
</script>

<style lang="scss">
  @import "stylesheet/app";
</style>
