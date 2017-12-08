<template lang="pug">
  .App
    HeaderView
    router-view
    FooterView
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import HeaderView from '@/view/global/header'
  import FooterView from '@/view/global/footer'

  export default {
    name: 'App',
    components: {
      HeaderView,
      FooterView
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
