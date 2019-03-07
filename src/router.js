import Vue from 'vue'
import Router from 'vue-router'
import Home from 'views/Home.vue'
import Index from 'views/index/index.vue'
import Order from 'views/order/order.vue'
import Discove from 'views/discove/discove.vue'

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
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path: '/order',
      name: 'order',
      component: Order
    },
    {
      path: '/discove',
      name: 'discove',
      component: Discove
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }

  ]
})
