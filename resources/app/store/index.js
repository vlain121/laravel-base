import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    token: null
  },
  mutations: {
    commitSetToken(state, data) {
      state.token = data
    }
  },
  actions: {
    setToken({ commit }, data) {
      commit('commitSetToken', data)
    }
  }
})
export default store
