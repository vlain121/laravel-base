import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    user: {}
  },
  mutations: {
    commitSetUser(state, data) {
      state.user = data
    }
  },
  actions: {
    setUser({ commit }, data) {
      commit('commitSetUser', data)
    }
  }
})
export default store
