import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import General from '@/pages/General'
import Buttons from '@/pages/Buttons'
import Datepicker from '@/pages/Datepicker'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [{
        path: '/ui/general',
        name: 'General',
        component: General
      }, {
        path: '/ui/buttons',
        name: 'Buttons',
        component: Buttons
      },{
        path: '/component/datepicker',
        name: 'Datepicker',
        component: Datepicker
      },]
    },
  ]
})
