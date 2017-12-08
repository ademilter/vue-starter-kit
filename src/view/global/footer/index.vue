<template lang="pug">
  .Footer
    select(v-model="siteLang")
      option(v-for="(lang, index) in langSupport",
      :val="lang",
      :key="index") {{ lang }}
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'

  export default {
    name: 'Footer',
    data () {
      return {
        siteLang: ''
      }
    },
    mounted () {
      this.siteLang = this.langDefault
    },
    watch: {
      siteLang () {
        this.langChange({
          lang: this.siteLang,
          app: this
        })
      }
    },
    computed: {
      ...mapGetters('i18n', [
        'langDefault',
        'langSupport'
      ])
    },
    methods: {
      ...mapActions('i18n', [
        'langChange'
      ])
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../../stylesheet/config/variables";

  .Footer {
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
