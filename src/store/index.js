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

const String = {
    namespaced: true,//名前空間を有効にする
    getters: {
        getStringitemName (state, getters, rootState) {
            return rootState.itemName
        },
        getStringlistPrice (state, getters, rootState) {
            return rootState.listPrice
        },
    }
}

export default new Vuex.Store({
    state: {
        stepCount: 0,
        itemName: "",
        errorFlag: false, //trueなら通過
        listPrice: "",

      },
      mutations: {
        setStepCount (state) {
          console.log("rootsetStepCount")
          state.stepCount++
        },
        updateItemName (state, value) {
          state.itemName = value
          if (state.itemName) {
            state.errorFlag = true
          } else {
            state.errorFlag = false
          }
          },
        updateListPrice (state, value) {
            state.listPrice = value
            if (state.listPrice) {
                state.errorFlag = true
            } else {
                state.errorFlag = false
            }
        }
      },
  modules: {
    Edit,
    String
  }
})