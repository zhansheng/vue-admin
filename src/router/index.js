import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import General from '@/pages/General'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/general',
      name: 'General',
      component: General
    }
  ]
})
