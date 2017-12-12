import Vue from 'vue'
import Router from 'vue-router'

// Pages
import Home from '@/view/pages/home'
import About from '@/view/pages/about'
import Contact from '@/view/pages/contact'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        main_menu: true
      }
    },
    {
      path: '/about',
      name: 'About',
      component: About,
      meta: {
        main_menu: true
      }
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact,
      meta: {
        main_menu: true
      }
    }
  ]
})

export default router
