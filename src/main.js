import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import { Button, Cell } from 'mint-ui'

Vue.config.productionTip = false

Vue.component(Button.name, Button)
  .component(Cell.name, Cell)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
