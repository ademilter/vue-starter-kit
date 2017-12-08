<i18n>
  {
  "en": {
  "welcome": "Welcome!"
  },
  "tr": {
  "welcome": "Hoş geldin!"
  }
  }
</i18n>

<template lang="pug">
  .Home
    h1.title {{ $t('welcome') }}

</template>

<script>
  export default {
    name: 'Home'
  }
</script>

<style lang="scss">
  @import "../../../stylesheet/config/variables";

  .Home {
    padding: 50px;
  }
</style>
