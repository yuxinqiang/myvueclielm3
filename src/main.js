import Vue from 'vue'
import './plugins/axios'
import { Button, Cell, Header, Tabbar, TabItem } from 'mint-ui'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.component(Button.name, Button)
  .component(Cell.name, Cell)
  .component(Header.name, Header)
  .component(Tabbar.name, Tabbar)
  .component(TabItem.name, TabItem)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
