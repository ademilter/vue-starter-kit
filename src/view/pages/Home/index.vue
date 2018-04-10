<i18n src="./i18n/index.json"></i18n>

<template lang="pug">
  .Home
    h1.title {{ $t('title') }}

</template>

<script>
  export default {
    name: 'Home'
  }
</script>

<style lang="scss">
  .Home {
    padding: 50px;
    color: $color-primary;
  }
</style>
