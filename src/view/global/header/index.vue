<template lang="pug">
  .Header CISTAKA CISTAK
</template>

<script>
  export default {
    name: 'Header'
  }
</script>

<style lang="scss" scoped>
  @import "../../../stylesheet/config/variables";

  .Header {
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #052d49;
    color: white;
  }
</style>
