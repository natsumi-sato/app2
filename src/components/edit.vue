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
    <hr>
    <div id="example1" class="list-group col">
      <div
        v-for="(item, index) in uploadedImage"
        :class="['img-' + (index+1)]"
        :key="index"
        ref="dzFilePreview"
      >
        <img data-dz-thumbnail v-if="item" :src="item" :id=" 'image' + (index + 1)">
        <button @click="deleteImage(index)">削除</button>
      </div>
    </div>
    <p>{{uploadedImage}}</p>
    <hr>
    <form action="/file-upload" class="dropzone" id="myAwesomeDropzone"></form>
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
    //...mapState("Image", ["uploadedImage"]),
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
    }
  },
  beforeCreate() {
    this.$store.dispatch("PropertyStore/axiosJSON");
  },
  mounted() {
    console.log(Dropzone);

    let imgArray = [];
    let imgUrlArray = [];
    var self = this;

    Sortable.create(document.getElementById("myAwesomeDropzone"), {
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

    Dropzone.options.myAwesomeDropzone = {
      paramName: "file", // The name that will be used to transfer the file
      maxFilesize: 1000, // MB
      thumbnailWidth: 188,
      thumbnailHeight: null,
      addRemoveLinks: true,
      dictRemoveFile: "削除",
      dictRemoveFileConfirmation: "ファイルを本当に削除しますか？",
      //resizeMimeType: 'image/jpeg',
      accept: function(file, done) {
        if (file.name == "justinbieber.jpg") {
          done("Naha, you don't.");
        } else {
          done();
        }
      },
      init: function() {
        /* this.on("thumbnail", function(file, dataUrl) {
          console.log(file);
          console.log(dataUrl);
        }); */
        var addImage = this;

        

        addImage.on("addedfile", function(file) {
          console.log(file);
          var dataUri;
          var fileReader = new FileReader();
          fileReader.onload = function() {
              // Data URIを取得
              dataUri = this.result;

              // img要素に表示
              //var img = document.getElementsByTagName("img");
              //img.src = dataUri;
              console.log(dataUri); //ここはちゃんとdataUriの値が入ってるのになあ・・・。

              //なんかここでcommitするとバグる・・・・なぜ・・・。
              //self.$store.commit("Image/sortableImage", dataUri);
          }

          // ファイルをData URIとして読み込む
          fileReader.readAsDataURL(file);
          console.log("うう"+dataUri); //ここのdataUriがundefined・・・代入されてない・・？。

          self.$store.commit("Image/sortableImage", dataUri); //dataUriが入ってないからstoreのstateに代入されない・・・。

        });
      }
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
/* .dropzone .dz-preview .dz-image {
  width: fit-content !important;
  height: fit-content !important;
} */
</style>
