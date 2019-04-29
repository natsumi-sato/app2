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

const PropertyStore = {
  namespaced: true,
  state() {
    return {
      type: '1',
      itemName: '',
      listPrice: '',
      sellPrice: '',
      brand: '',
      category: '',
      color: '',
      postage: '',
      point: '',
      importFlag: '',
      stock: '',
      detail: '',
      seibun: '',
      mainImage: '',
    };
  },
  mutations: {
    setItemName(state, payload) {
      state.itemName = payload
      console.log(state.itemName)
    },
  }
}

const Image = {
  namespaced: true,
  /*state: {
    uploadedImage: '',
  },*/
  state() {
    return {
      uploadedImage: '',
    };
  },
  getters: {
  },
  mutations: {
    // アップロードした画像を表示
    createImage(state, payload) {
      console.log(state)
      console.log(payload)
      let reader = new FileReader();
      reader.onload = (payload) => {
        state.uploadedImage = payload.target.result;
        console.log(state.uploadedImage)
      };
      reader.readAsDataURL(payload);
    },
  },
  actions: {
    onFileChange(context, payload) {
      console.log(context)
      console.log(payload)
      let files = payload.target.files || payload.dataTransfer.files;
      console.log(files[0])
      //this.createImage(files[0]);
      context.commit('createImage', files[0])
    },
  },
}

export default new Vuex.Store({
  modules: {
    Edit,
    PropertyStore,
    Image1: Image,
    Image2: Image,
    Image3: Image,
    Image4: Image,
    Image5: Image,
    Image6: Image,
  }
})