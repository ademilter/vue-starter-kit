<i18n src="./i18n/index.json"></i18n>

<template lang="pug">
  .Home
    h1.title {{ $t('title') }}

</template>

<script>
  export default {
    name: 'About'
  }
</script>

<style lang="scss">
  .Home {
    padding: 50px;
  }
</style>
