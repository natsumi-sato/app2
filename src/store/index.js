import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'

Vue.use(Vuex)

const Edit = {
    namespaced: true,
    state: {},
    mutations: {},
    actions: {
      buttonAction({ commit, state, rootState })  {
      console.log("buttonAction")
      }
   }
}

export default new Vuex.Store({
  state: {
    itemName: "",
  },
  mutations: {
    
  },
  getters: {
  },
  actions: {

  },
  modules: {
    Edit,
  }
})