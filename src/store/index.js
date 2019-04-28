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
    uploadedImage: '',
  },
  getters: {
  },
  mutations: {
    // アップロードした画像を表示
    createImage(a, b) {
      console.log(a)
      console.log(b)
      let reader = new FileReader();
      reader.onload = (b) => {
        a.uploadedImage = b.target.result;
      };
      reader.readAsDataURL(b);
    },
  },
  actions: {
    onFileChange(a, b) {
      console.log(a)
      console.log(b)
      let files = b.target.files || b.dataTransfer.files;
      console.log(files[0])
      //this.createImage(files[0]);
      a.commit('createImage', files[0])
    },
  },
  modules: {
    Edit,
  }
})