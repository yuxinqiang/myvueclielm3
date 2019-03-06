import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: true
  },
  mutations: {
    changeLoginShow (state) {
      state.isLogin = !state.isLogin
    }
  },
  actions: {

  }
})
