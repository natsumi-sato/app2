<template>
  <div id="editWrap">
    <itemName/>
    <listPrice/>
    <sellPrice/>
    <brand/>
    <category/>
    <color/>
    <postage/>
    <point/>
    <importFlag/>
    <stock/>
    <detail/>
    <seibun/>
    <confirm/>
    <div class="form-group">
      <label>ファイルを追加</label>
      <input type="file" v-on:change="uploadedImage1">
    </div>
    <div class="form-group">
      <p>画像をドラッグアンドドロップすると順番が変わります。</p>
    </div>
    <div action="/file-upload" class="dropzone" id="myAwesomeDropzone">
      <div id="example1" class="list-group col">
        <div
          v-for="(item, index) in uploadedImage"
          :class="['img-' + (index+1)]"
          ref="dzFilePreview"
        >
          <img data-dz-thumbnail v-if="item" :src="item" :id=" 'image' + (index + 1)">
          <button @click="deleteImage(index)">削除</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import itemName from "@/components/modules/itemName.vue";
import listPrice from "@/components/modules/listPrice.vue";
import sellPrice from "@/components/modules/sellPrice.vue";
import brand from "@/components/modules/brand.vue";
import category from "@/components/modules/category.vue";
import color from "@/components/modules/color.vue";
import capacity from "@/components/modules/capacity.vue";
import postage from "@/components/modules/postage.vue";
import point from "@/components/modules/point.vue";
import importFlag from "@/components/modules/importFlag.vue";
import stock from "@/components/modules/stock.vue";
import detail from "@/components/modules/detail.vue";
import seibun from "@/components/modules/seibun.vue";
import confirm from "@/components/modules/confirm.vue";

import { mapState, mapGetters } from "vuex";
import Sortable from "sortablejs";
import Dropzone from "dropzone";
import "dropzone/dist/basic.css";
import "dropzone/dist/dropzone.css";

export default {
  name: "editWrap",
  data() {
    return {
      msg: "あああ"
    };
  },
  components: {
    itemName,
    listPrice,
    sellPrice,
    brand,
    category,
    color,
    capacity,
    postage,
    point,
    importFlag,
    stock,
    detail,
    seibun,
    confirm
  },
  computed: {
    uploadedImage: {
      get() {
        return this.$store.state.Image.uploadedImage;
      },
      set(val) {
        this.$store.commit("Image/vforUploadedImage", val);
      }
    }
  },
  methods: {
    validate: function(event) {
      var valid = false;
      try {
        valid = this.$data.sharedState.validate();
        if (valid) {
          this.$router.push("/confirm");
        }
      } catch (e) {
        alert(e.message);
      }
    },
    uploadedImage1(e) {
      this.$store.dispatch("Image/onFileChange", e);
    },
    deleteImage(index) {
      this.$store.commit("Image/deleteImage", index);
    }
  },
  beforeCreate() {
    this.$store.dispatch("PropertyStore/axiosJSON");
  },
  mounted() {
    let imgArray = [];
    let imgUrlArray = [];
    var self = this;

    Sortable.create(document.getElementById("example1"), {
      animation: 150,
      ghostClass: "blue-background-class",
      onUpdate: function(evt) {
        imgArray = evt.srcElement.getElementsByTagName("img");

        for (let i = 0; i < imgArray.length; i++) {
          imgUrlArray[i] = imgArray[i].src;
        }

        self.$store.commit("Image/sortableImage", imgUrlArray);
      }
    });

    Dropzone.autoDiscover = false;
    Dropzone.options.imageDropArea = {
      paramName: "file",
      parallelUploads: 1,
      acceptedFiles: "image/*",
      dictDefaultMessage: "ファイルをドラッグ&ドロップしてください(複数可)"
    };
    let dropzone = new Dropzone("div#myAwesomeDropzone", {
      url: "https://httpbin.org/post"
    });
    dropzone.on("addedfile", function(file) {
      var fileReader = new FileReader();
      fileReader.onload = function() {
        var dataUri = this.result;

        file.previewElement.remove();
        self.$store.commit("Image/vforUploadedImage", dataUri);
      };
      fileReader.readAsDataURL(file);
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
