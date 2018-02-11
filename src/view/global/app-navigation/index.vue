<i18n>
  {
  "en": {
  "home": "Home",
  "about": "About",
  "contact": "Contact"
  },
  "tr": {
  "home": "Anasayfa",
  "about": "Hakkımda",
  "contact": "İletişim"
  }
  }
</i18n>

<template lang="pug">
  .AppNavigation
    ul
      router-link(v-for="(item, index) in mainNav",
      tag="li", :to="item.path", :key="index")
        a {{ $t(item.name) }}
</template>

<script>
  import router from '@/router'
  import _has from 'lodash/has'

  export default {
    name: 'AppNavigation',
    computed: {
      mainNav () {
        let nav = router.options.routes.filter(route => {
          return _has(route, 'meta') && route.meta.main_menu
        })
        nav.forEach(item => {
          item.name = item.name.toLocaleLowerCase()
        })
        return nav
      }
    }
  }
</script>

<style lang="scss" scoped>
  .AppNavigation {
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ccc;

    ul {
      display: flex;
      align-items: center;

      li {
        margin-left: 10px;
        margin-right: 10px;

        &.router-link-exact-active {
          color: red;
        }
      }
    }
  }
</style>
