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
      <ul>
        <draggable v-model="uploadedImage">
          <li v-for="(item, index) in uploadedImage" :class="['img-' + (index+1)]" :key="index">
            <img v-if="item" :src="item">
            <button @click="deleteImage(index)">削除</button>
          </li>
        </draggable>
      </ul>
      <draggable v-model="uploadedImage">
        <div v-for="(item, index) in uploadedImage" :class="['img-' + (index+1)]" :key="index">
          <img v-if="item" :src="item">
          <button @click="deleteImage(index)">削除</button>
        </div>
      </draggable>
    </div>
    <hr>
    <vue-dropzone
      ref="myVueDropzone"
      id="dropzone"
      :options="dropzoneOptions"
      :useCustomSlot="true"
      @vdropzone-file-added="thumbnail"
    >
      <!-- <draggable v-model="uploadedImage">
        <div v-for="(item, index) in uploadedImage" :class="['img-' + (index+1)]" :key="index">
          <img v-if="item" :src="item">
          <button @click="deleteImage(index)">削除</button>
        </div>
      </draggable>-->
    </vue-dropzone>
    <hr>
    <div id="example1" class="list-group col" ref="example1">
      <div v-for="(item, index) in uploadedImage" :class="['img-' + (index+1)]" :key="index">
          <img v-if="item" :src="item">
          <button @click="deleteImage(index)">削除</button>
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
/* import mainImage from "@/components/modules/mainImage.vue";
import subImage1 from "@/components/modules/subImage1.vue";
import subImage2 from "@/components/modules/subImage2.vue";
import subImage3 from "@/components/modules/subImage3.vue";
import subImage4 from "@/components/modules/subImage4.vue";
import subImage5 from "@/components/modules/subImage5.vue"; */
import confirm from "@/components/modules/confirm.vue";

import { mapState, mapGetters } from "vuex";
import draggable from "vuedraggable";
import vue2Dropzone from "vue2-dropzone";
import "vue2-dropzone/dist/vue2Dropzone.min.css";
import Sortable from 'sortablejs';

export default {
  name: "editWrap",
  data() {
    return {
      msg: "あああ",
      dropzoneOptions: {
        url: "https://httpbin.org/post",
        thumbnailWidth: 150,
        maxFilesize: 0.5,
        headers: { "My-Awesome-Header": "header value" },
        previewTemplate: this.template()
      },
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
    confirm,
    draggable,
    vueDropzone: vue2Dropzone
  },
  computed: {
    //...mapState("Image", ["uploadedImage"]),
    uploadedImage: {
      get() {
        return this.$store.state.Image.uploadedImage;
      },
      set(val) {
        this.$store.commit("Image/dragUploadedImage", val);
      }
    }
  },
  methods: {
    validate: function(event) {
      console.log(this.$el);
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
      console.log(e);
      this.$store.dispatch("Image/onFileChange", e);
    },
    deleteImage(index) {
      this.$store.commit("Image/deleteImage", index);
    },
    template: function() {
      return `<draggable v-model="uploadedImage">
        <div v-for="(item, index) in uploadedImage" :class="['img-' + (index+1)]" :key="index">
          <img v-if="item" :src="item">
          <button @click="deleteImage(index)">削除</button>
        </div>
      </draggable>
        `;
    },
    thumbnail: function(file) {
      console.log(file.dataUrl);
      //console.log(dataUrl);
      //this.$store.commit("Image/dragImage", dataUrl);
    }
  },
  beforeCreate() {
    this.$store.dispatch("PropertyStore/axiosJSON");
    
  },
  mounted() {
    console.log(Sortable);
    //console.log(this.$refs.example1)
    Sortable.create(document.getElementById('example1'), {
        animation: 150,
        ghostClass: 'blue-background-class'
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
