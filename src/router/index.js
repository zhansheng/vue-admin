import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import General from '@/pages/General'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/general',
      name: 'General',
      component: General
    }
  ]
})
