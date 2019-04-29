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
      itemNameValidation: '',
      listPriceValidation: '',
      sellPriceValidation: '',

    };
  },
  mutations: {
    setItemName(state, payload) {
      state.itemName = payload
      console.log(state.itemName)
    },
    setListPrice(state, payload) {
      state.listPrice = payload
      console.log(state.listPrice)
    },
    setSellPrice(state, payload) {
      state.sellPrice = payload
      console.log(state.sellPrice)
    },
    setBrand(state, payload) {
      state.brand = payload
      console.log(state.brand)
    },
    setCategory(state, payload) {
      state.category = payload
      console.log(state.category)
    },
    setColor(state, payload) {
      state.color = payload
      console.log(state.color)
    },
    setPostage(state, payload) {
      state.postage = payload
      console.log(state.postage)
    },
    setPoint(state, payload) {
      state.point = payload
      console.log(state.point)
    },
    setImportFlag(state, payload) {
      state.importFlag = payload
      console.log(state.importFlag)
    },
    setStock(state, payload) {
      state.stock = payload
      console.log(state.stock)
    },
    setDetail(state, payload) {
      state.detail = payload
      console.log(state.detail)
    },
    setSeibun(state, payload) {
      state.seibun = payload
      console.log(state.seibun)
    },
  },
  actions: {
    buttonAction({ commit, state, rootState })  {
      console.log(state.itemName)

      if (state.itemName.length >= 3) {
        state.itemNameValidation = ""
      } else {
        state.itemNameValidation = "3文字以上入力してください。"
      }
      
      //正規表現パターン（半角英数に一致）
      var regex = new RegExp(/^[0-9]*$/);

      //定価
      if (regex.test(state.listPrice)) {
        state.listPriceValidation = ""
      } else {
        state.listPriceValidation = "半角英数字で入力してください。"
      }

      //販売価格
      if (regex.test(state.sellPrice) && state.sellPrice.length > 0) {
        state.sellPriceValidation = ""
      } else {
        state.sellPriceValidation = "半角英数字で入力してください。"
      }
    }
  },
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

const Submit = {
  namespaced: true,
  state() {
    return {
    };
  },
  mutations: {
  },
  actions: {
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
    Submit,
  }
})