import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    accessToken: '',
    currentUser: '',
    baseUrl: 'https://xdg.com'
  },
  mutations: {
    setToken (state, accessToken) {
      state.accessToken = accessToken;
    },
    setUser (state, user) {
      state.currentUser = user;
    }
  }
})
export { store }