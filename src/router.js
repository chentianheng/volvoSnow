import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Item from './views/Item.vue'
import Equipment01 from  './views/Equipment01'
import Equipment02 from  './views/Equipment02'
import Equipment03 from  './views/Equipment03'
import Info from './views/Info.vue'
import Information from './views/Information.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path:'/item',
      name:'item',
      component: Item
    },
    {
      path:'/equipment01',
      name:'equipment01',
      component: Equipment01
    },
    {
      path:'/equipment02',
      name:'equipment02',
      component: Equipment02
    },
    {
      path:'/equipment03',
      name:'equipment03',
      component: Equipment03
    },
    {
      path:'/info',
      name:'info',
      component: Info
    },
    {
      path:'/information',
      name:'information',
      component: Information
    }
  ]
})
