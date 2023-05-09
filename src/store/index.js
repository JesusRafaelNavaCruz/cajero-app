import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    balance: 0,
    user: {},
    history: [],    
  },
  getters: {
    getBalance: (state) => state.balance,
    getUser: (state) => state.user,
    getHistory: (state) => state.history,
  },
  mutations: {
    saveHistory: (state, payload) => {
      state.history.push(payload);
    },
    deposit: (state, payload) => {
      state.balance = parseInt(state.balance) + parseInt(payload);
    },
    withdraw: (state, payload) => {
      state.balance = parseInt(state.balance) - parseInt(payload);
    },
  },
  actions: {
    deposit: ({commit}, payload) => {
      commit('deposit', payload);
    },
    withdraw: ({commit}, payload) => {
      commit('withdraw', payload);
    },
    saveHistory: ({commit}, payload) =>{
      commit('saveHistory', payload);
    }
  },
  modules: {
  }
})
