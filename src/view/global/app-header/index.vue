<i18n>
  {
  "en": {
  "title": "Example Application"
  },
  "tr": {
  "title": "Örnek Uygulama"
  }
  }
</i18n>

<template lang="pug">
  .AppHeader
    h4 {{ $t('title') }}
</template>

<script>
  export default {
    name: 'AppHeader'
  }
</script>

<style lang="scss" scoped>
  .AppHeader {
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #052d49;
    color: white;
  }
</style>
