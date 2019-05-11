<template>
  <div class="comfirmWrap">
    <p>{{ msg }}</p>

    <div class="wrap">
      <swiper :options="swiperOptionTop" class="gallery-top" ref="swiperTop">
        <swiper-slide class="slide-1" v-bind:style="{backgroundImage: 'url(' +  + ')' }">
          あ
        </swiper-slide>
        <swiper-slide class="slide-2">
          い
        </swiper-slide>
        <swiper-slide class="slide-3">
          う
        </swiper-slide>
        <swiper-slide class="slide-4">
          え
        </swiper-slide>
        <swiper-slide class="slide-5">
          お
        </swiper-slide>
        <swiper-slide class="slide-6">
          か
        </swiper-slide>
        <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
        <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
      </swiper>
      <!-- swiper2 Thumbs -->
      <swiper :options="swiperOptionThumbs" class="gallery-thumbs" ref="swiperThumbs">
        <swiper-slide class="slide-1" v-bind:style="{backgroundImage: 'url(' +  + ')' }">
          １
        </swiper-slide>
        <swiper-slide class="slide-2">
          ２
        </swiper-slide>
        <swiper-slide class="slide-3">
          ３
        </swiper-slide>
        <swiper-slide class="slide-4">
          ４
        </swiper-slide>
        <swiper-slide class="slide-5">
          ５
        </swiper-slide>
        <swiper-slide class="slide-5">
          ６
        </swiper-slide>
      </swiper>
    </div>

    <hr>
    <div class="itemName">{{ itemName }}</div>
    <div class="listPrice">{{ listPrice }}</div>
    <div class="sellPrice">{{ sellPrice }}</div>
    <div class="brand">{{ brand }}</div>
    <div class="category">{{ category }}</div>
    <div class="color">{{ color }}</div>
    <div class="postage">{{ postage }}</div>
    <div class="point">{{ point }}</div>
    <div class="importFlag">{{ importFlag }}</div>
    <div class="stock">{{ stock }}</div>
    <div class="detail">{{ detail }}</div>
    <div class="seibun">{{ seibun }}</div>
    <mainImageConfirm/>
    <subImage1Confirm/>
    <subImage2Confirm/>
    <subImage3Confirm/>
    <subImage4Confirm/>
    <subImage5Confirm/>
    <br>
    <router-link to="/" tag="button">戻って修正</router-link>
    <hr>
    <img v-if="uploadedImage" :src="uploadedImage">
    {{uploadedImage}}
    {{msg}}
    {{uploadedImageURL}}
    <div v-bind:style="{ color: activeColor, backgroundImage: 'url(' + uploadedImage + ')' }">あああ</div>
  </div>
</template>

<script>
import mainImageConfirm from "@/components/modules/mainImageConfirm.vue";
import subImage1Confirm from "@/components/modules/subImage1Confirm.vue";
import subImage2Confirm from "@/components/modules/subImage2Confirm.vue";
import subImage3Confirm from "@/components/modules/subImage3Confirm.vue";
import subImage4Confirm from "@/components/modules/subImage4Confirm.vue";
import subImage5Confirm from "@/components/modules/subImage5Confirm.vue";
import mainImageThumbnail from "@/components/modules/mainImageThumbnail.vue";

import { mapState } from "vuex";

import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  name: "confirmScreen",
  data() {
    return {
      swiperOptionTop: {
        spaceBetween: 10,
        loop: false,
        loopedSlides: 5, //looped slides should be the same
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        effect: "fade"
      },
      swiperOptionThumbs: {
        spaceBetween: 10,
        freeMode: true,
        slidesPerView: 10,
        touchRatio: 0.2,
        loop: false,
        loopedSlides: 5, //looped slides should be the same
        slideToClickedSlide: true,
        autoplayDisableOnInteraction: false,
        centeredSlides: true,
        virtualTranslate: true,
      },
      activeColor: "pink",
      msg: "テストだよん",
      delayTime: 100,
      uploadedImageURL: "ふふふ"
    };
  },
  components: {
    mainImageConfirm,
    subImage1Confirm,
    subImage2Confirm,
    subImage3Confirm,
    subImage4Confirm,
    subImage5Confirm,
    mainImageThumbnail,
    swiper,
    swiperSlide
  },
  computed: {
    ...mapState("PropertyStore", [
      "itemName",
      "listPrice",
      "sellPrice",
      "brand",
      "category",
      "color",
      "postage",
      "point",
      "importFlag",
      "stock",
      "detail",
      "seibun"
    ]),
    ...mapState("Image1", ["uploadedImage"])
  },
  mounted() {
    this.$nextTick(() => {
      const swiperTop = this.$refs.swiperTop.swiper;
      const swiperThumbs = this.$refs.swiperThumbs.swiper;
      swiperTop.controller.control = swiperThumbs;
      swiperThumbs.controller.control = swiperTop;
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.comfirmWrap {
  img {
    max-width: 100px;
  }
  .wrap {
    width: 500px;
    .swiper-container {
      width: 100%;
      height: 100%;
      margin-left: auto;
      margin-right: auto;
      .swiper-slide {
        text-align: center;
        font-size: 18px;
        background: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      &.gallery-top {
        .swiper-slide {
          color: blue;
          img {
            max-width: 500px;
          }
        }
      }
      &.gallery-thumbs {
        height: 20%;
        margin: auto;
        box-sizing: border-box;
        .swiper-slide {
          color: blue;
          height: 100px;
          img {
            max-width: 150px;
          }
        }
      }
    }
  }
}
</style>