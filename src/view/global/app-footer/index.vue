<template lang="pug">
  .AppFooter
    select(v-model="siteLang")
      option(v-for="(lang, index) in langSupport",
      :val="lang",
      :key="index") {{ lang }}
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'AppFooter',
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
        const payload = {
          lang: this.siteLang,
          app: this
        }
        this.$store.commit('i18n/LANG_CHANGE', payload, { root: true })
      }
    },
    computed: {
      ...mapGetters('i18n', [
        'langDefault',
        'langSupport'
      ])
    }
  }
</script>

<style lang="scss" scoped>
  .AppFooter {
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #eee;
  }
</style>
