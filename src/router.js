import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import(/* webpackChunkName: "home" */ './views/Home.vue')
const Index = () => import(/* webpackChunkName: "list" */ './views/index/index.vue')
const Order = () => import(/* webpackChunkName: "order" */ './views/order/order.vue')
const Discove = () => import(/* webpackChunkName: "discove" */ './views/discove/discove.vue')
const City = () => import(/* webpackChunkName: "city" */ './views/city/city.vue')

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
      path: '/city/:id',
      name: 'city',
      component: City
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // 优化路由加载方式
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }

  ]
})
