import Vue from "vue";
import Vuex from "vuex";
import router from "../router";
import axios from "axios";

Vue.use(Vuex);

const Edit = {
  namespaced: true,
  state: {},
  mutations: {},
  actions: {
    buttonAction({ commit, state, rootState }) {
      console.log("buttonAction");
    }
  }
};

const PropertyStore = {
  namespaced: true,
  state() {
    return {
      type: "1",
      itemName: "",
      listPrice: "",
      sellPrice: "",
      brand: "",
      category: "",
      color: "",
      postage: "",
      point: "",
      importFlag: "",
      stock: "",
      detail: "",
      seibun: "",
      mainImage: "",
      itemNameValidation: "",
      listPriceValidation: "",
      sellPriceValidation: "",
      brandValidation: "",
      categoryValidation: "",
      pointValidation: "",
      brandsJSON: [],
      categorysJSON: []
    };
  },
  mutations: {
    setItemName(state, payload) {
      state.itemName = payload;
    },
    setListPrice(state, payload) {
      state.listPrice = payload;
    },
    setSellPrice(state, payload) {
      state.sellPrice = payload;
    },
    setBrand(state, payload) {
      state.brand = payload;
    },
    setCategory(state, payload) {
      state.category = payload;
    },
    setColor(state, payload) {
      state.color = payload;
    },
    setPostage(state, payload) {
      state.postage = payload;
    },
    setPoint(state, payload) {
      state.point = payload;
    },
    setImportFlag(state, payload) {
      state.importFlag = payload;
    },
    setStock(state, payload) {
      state.stock = payload;
    },
    setDetail(state, payload) {
      state.detail = payload;
    },
    setSeibun(state, payload) {
      state.seibun = payload;
    },
    axiosBrandsJSON(state, payload) {
      state.brandsJSON = payload;
    },
    axiosCategorysJSON(state, payload) {
      state.categorysJSON = payload;
    }
  },
  actions: {
    buttonAction({ commit, state, rootState }) {
      console.log(state.itemName);

      //商品名
      if (state.itemName.length >= 3) {
        state.itemNameValidation = "";
      } else {
        state.itemNameValidation = "3文字以上入力してください。";
      }

      //正規表現パターン（半角英数に一致）
      var regex = new RegExp(/^[0-9]*$/);

      //定価
      if (regex.test(state.listPrice)) {
        state.listPriceValidation = "";
      } else {
        state.listPriceValidation = "半角英数字で入力してください。";
      }

      //販売価格
      if (regex.test(state.sellPrice) && state.sellPrice.length > 0) {
        state.sellPriceValidation = "";
      } else {
        state.sellPriceValidation = "半角英数字で入力してください。";
      }

      //ブランド
      for (var i in state.brandsJSON) {
        state.brandValidation = "このブランドは登録されておりません";
        if (state.brandsJSON[i].name == state.brand) {
          state.brandValidation = "";
          break;
        }
      }

      //カテゴリ
      for (var i in state.categorysJSON) {
        state.categoryValidation = "このカテゴリは登録されておりません";
        if (state.categorysJSON[i].name == state.category) {
          state.categoryValidation = "";
          break;
        }
      }

      //ポイント
      if (regex.test(state.point)) {
        state.pointValidation = "";
      } else {
        state.pointValidation = "半角英数字で入力してください。";
      }

      //バリデーションが通ったら確認画面へプッシュ！
      if (
        state.itemNameValidation == 0 &&
        state.listPriceValidation == 0 &&
        state.sellPriceValidation == 0 &&
        state.brandValidation == 0 &&
        state.categoryValidation == 0 &&
        state.pointValidation == 0
      ) {
        console.log("プッシュ！");
        router.push("/confirm");
      }
    },
    axiosJSON({ state, commit, dispatch }, payload) {
      axios
        .get("./static/brandList.json")
        .then(function(response) {
          commit("axiosBrandsJSON", response.data);
        })
        .catch(function(error) {
          console.log(error);
        });

      axios
        .get("./static/categorysList.json")
        .then(function(response) {
          commit("axiosCategorysJSON", response.data);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};

const Image = {
  namespaced: true,
  state() {
    return {
      uploadedImage: []
    };
  },
  getters: {},
  mutations: {
    // アップロードした画像を表示
    createImage(state, payload) {
      let reader = new FileReader();
      reader.onload = payload => {
        for (var i in state.uploadedImage) {
          if (state.uploadedImage[i] == payload.target.result) {
            return;
            break;
          }
        }

        state.uploadedImage.push(payload.target.result);
        console.log(state.uploadedImage);
        //console.log(state.uploadedImage.srcElement.attributes)
      };
      reader.readAsDataURL(payload);
    },
    deleteImage(state, index) {
      console.log("うんこピッピ");
      state.uploadedImage.splice(index, 1);
    },
    dragUploadedImage(state, payload) {
      state.uploadedImage = payload;
    }
  },
  actions: {
    onFileChange(context, payload) {
      let files = payload.target.files || payload.dataTransfer.files;
      //console.log(payload.target.files);
      //this.createImage(files[0]);
      context.commit("createImage", files[0]);
    },
    
  }
};

export default new Vuex.Store({
  modules: {
    Edit,
    PropertyStore,
    Image
  }
});
