<template>
  <div class="comfirmWrap">
    <p>{{ msg }}</p>

    <div class="wrap">
      <swiper :options="swiperOption">
        <swiper-slide>Slide 1</swiper-slide>
        <swiper-slide>Slide 2</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
        <swiper-slide>Slide 4</swiper-slide>
        <swiper-slide>Slide 5</swiper-slide>
        <swiper-slide>Slide 6</swiper-slide>
        <swiper-slide>Slide 7</swiper-slide>
        <swiper-slide>Slide 8</swiper-slide>
        <swiper-slide>Slide 9</swiper-slide>
        <swiper-slide>Slide 10</swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
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
  </div>
</template>

<script>
import mainImageConfirm from "@/components/modules/mainImageConfirm.vue";
import subImage1Confirm from "@/components/modules/subImage1Confirm.vue";
import subImage2Confirm from "@/components/modules/subImage2Confirm.vue";
import subImage3Confirm from "@/components/modules/subImage3Confirm.vue";
import subImage4Confirm from "@/components/modules/subImage4Confirm.vue";
import subImage5Confirm from "@/components/modules/subImage5Confirm.vue";
import { mapState } from "vuex";

import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  name: "confirmScreen",
  data() {
    return {
      swiperOption: {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      }
    };
  },
  components: {
    mainImageConfirm,
    subImage1Confirm,
    subImage2Confirm,
    subImage3Confirm,
    subImage4Confirm,
    subImage5Confirm,
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
    ])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
.comfirmWrap
  img 
    max-width: 100px
  .swiper-container
      width: 100%
      height: 100%
      margin-left: auto
      margin-right: auto
      .swiper-slide
        text-align: center
        font-size: 18px
        background: #fff
        /* Center slide text vertically */
        display: -webkit-box
        display: -ms-flexbox
        display: -webkit-flex
        display: flex
        -webkit-box-pack: center
        -ms-flex-pack: center
        -webkit-justify-content: center
        justify-content: center
        -webkit-box-align: center
        -ms-flex-align: center
        -webkit-align-items: center
        align-items: center
</style>