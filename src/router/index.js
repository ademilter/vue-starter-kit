import Vue from 'vue'
import Router from 'vue-router'
import authMiddleware from './auth'

// Pages
import Home from '@/view/pages/home'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})

router.beforeEach(authMiddleware)

export default router
