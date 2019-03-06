import Vue from 'vue'
import './plugins/axios'
// import { Button, Cell, Header, Tabbar, TabItem } from 'mint-ui'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.use(MintUI)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
