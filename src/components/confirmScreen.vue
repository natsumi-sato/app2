<template>
  <div class="comfirmWrap">
    <p>{{ msg }}</p>

    <div class="wrap_img">
      <swiper :options="swiperOptionTop" class="gallery-top" ref="swiperTop">
        <swiper-slide
          v-for="(item, index) in uploadedImage"
          :class="['slide-' + (index+1)]"
          :key="index"
        >
          <img v-if="item" :src="item" />
        </swiper-slide>
        <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
        <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
      </swiper>
      <!-- swiper2 Thumbs -->
      <swiper :options="swiperOptionThumbs" class="gallery-thumbs" ref="swiperThumbs">
        <swiper-slide
          class="slide-1"
          v-for="(item, index) in uploadedImage"
          :class="['slide-' + (index+1)]"
          :key="index"
        >
          <img v-if="item" :src="item" />
        </swiper-slide>
      </swiper>
    </div>

    <div class="wrap_brand_cate_item">
      <dl>
        <dt><a href="" class="belongs-to">too cool for school</a></dt>
        <div>/</div>
        <dd><a href="" class="belongs-to">ハイライター・シェーディング</a></dd>
      </dl>
      <h3>アートクラス バイ ロダン シェーディング 9.5g</h3>
    </div>

    <div class="wrap_status">
      <div class="priceBox">
        <p class="text_price">¥2,052<span>(税込)</span></p>
        <p class="text_research_price"><span>調査価格</span>¥1,908<span>(税込)</span></p>
        <p class="text_stock">残り3個</p>
      </div>
      <div class="statusBox">
        <ul>
          <li>送料0円 </li>
          <li>471pt還元</li>
          <li>正規品</li>
        </ul>
      </div>
    </div>

    <div class="wrap_accordion">
      <div class="box_accordion">
        <h4>商品詳細</h4>
        <p>
          うおおおおおおおお
          <br />商品詳細だよおおおおおおおお
          <br />うおおおおおおおお
        </p>
      </div>
      <div class="box_accordion">
        <h4>成分</h4>
        <p>
          うおおおおおおおお
          <br />成分だよおおおおおお
          <br />うおおおおおおおお
        </p>
      </div>
      <!--<div class="box_accordion">
        <h4>レビュー</h4>
        <p>うおおおおおおおお<br>レビューだよおおおおおお<br>うおおおおおおおお</p>
      </div>-->
    </div>

    <hr />
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
    <br />
    <router-link to="/" tag="button">戻って修正</router-link>
  </div>
</template>

<script>
import { mapState } from "vuex";
import "reset-css/reset.css";
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  name: "confirmScreen",
  data() {
    return {
      swiperOptionTop: {
        loop: false,
        loopedSlides: 5, //looped slides should be the same
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        effect: "slide"
      },
      swiperOptionThumbs: {
        spaceBetween: 10,
        freeMode: true,
        slidesPerView: 6,
        touchRatio: 0.2,
        loop: false,
        loopedSlides: 5, //looped slides should be the same
        slideToClickedSlide: true,
        autoplayDisableOnInteraction: false,
        centeredSlides: true,
        virtualTranslate: true
      },
      activeColor: "pink",
      msg: "テストだよん",
      delayTime: 100,
      uploadedImageURL: "ふふふ"
    };
  },
  components: {
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
    ...mapState("Image", ["uploadedImage"])
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
$fontSize-main: 16px;
$color-main: #111010;
$belongs-t: #43b1fc;
$text_price: #fb2e63;

body {
  font-size: $fontSize-main;
}

.belongs-to {
  color: $belongs-t;
}

.comfirmWrap {
  width: 570px;
  margin: 0 auto;
  img {
    max-width: 100px;
  }
  .wrap_img {
    margin: 15px auto;
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
      .swiper-button-prev,
      .swiper-button-next {
        background-image: none;
        font-size: 11px;
      }
      .swiper-button-prev {
        &::before {
          content: "〈";
          color: #000;
        }
      }
      .swiper-button-next {
        &::before {
          content: "〉";
          color: #000;
        }
      }
      &.gallery-top {
          width: 430px;
        .swiper-slide {
          color: blue;
          img {
            max-width: 300px;
            max-height: 300px
          }
        }
      }
      &.gallery-thumbs {
        height: 20%;
        margin: auto;
        box-sizing: border-box;
        .swiper-slide {
          color: blue;
          width: 100px !important;
          height: 100px !important;
          border: 1px solid rgba(0, 0, 0, 0.25);
          margin: 5px;
          overflow: hidden;
          img {
          }
        }
      }
    }
  }
  .wrap_brand_cate_item {
    dl {
      height: 32px;
      display: flex;
      justify-content: left; 
      div {
        font-size: 12px;
        color: $color-main;
        margin: 0 5px;
        padding-top: 1px;
      }
    }
    h3 {
      font-size: 1.2rem;
      line-height: 1.6rem;
      font-weight: 400;
    }
  }
  .wrap_status {
    .priceBox {
      .text_price {
        color: $text_price;
        font-size: 2rem;
        line-height: 2.8rem;
        span {
          font-size: .6rem;
          margin-left: 3px;
        }
      }
      .text_research_price {
        font-size: 1rem;
        span {
          font-size: .6rem;
          &:first-of-type {
            margin-right: 3px;
          }
          &:last-of-type {
            margin-left: 3px;
          }
        }
      }
      .text_stock {
        line-height: 1.6em;
        font-size: .8em;
      }
    }
    .statusBox {
      ul {
        display: flex;
        justify-content: left;
        align-items: center;
        li {
          background: #111010;
          color: #fff;
          padding: 3px;
          line-height: 1.2em;
          font-size: .8em;
          margin-right: 6px;
        }
      }
    }
  }
}
</style>