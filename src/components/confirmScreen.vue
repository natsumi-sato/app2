<template>
  <div class="comfirmWrap">
    <p>{{ msg }}</p>
    <div class="itemName">{{ sharedState.state.property.itemName }}</div>
    <div class="listPrice">{{ sharedState.state.property.listPrice }}</div>
    <div class="sellPrice">{{ sharedState.state.property.sellPrice }}</div>
    <div class="brand">{{ sharedState.state.property.brand }}</div>
    <div class="category">{{ sharedState.state.property.category }}</div>
    <div class="color">{{ sharedState.state.property.color }}</div>
    <div class="postage">{{ sharedState.state.property.postage }}</div>
    <div class="point">{{ sharedState.state.property.point }}</div>
    <div class="importFlag">{{ sharedState.state.property.importFlag }}</div>
    <div class="stock">{{ sharedState.state.property.stock }}</div>
    <div class="detail">{{ sharedState.state.property.detail }}</div>
    <div class="seibun">{{ sharedState.state.property.seibun }}</div>
    <img v-show="uploadedImage" :src="uploadedImage" />
    <img v-show="uploadedImage" :src="uploadedImage" />
  </div>
</template>

<script>
import store from '@/store/index.js'
import PropertyStore from '@/store/PropertyStore.js'
import { mapState } from "vuex"

export default {
  name: "confirmScreen",
  data() {
    return {
      msg: "確認画面テスト",
      privateState: {},
      sharedState: PropertyStore,
    };
  },
  components: {
  },
  computed: {
    ...mapState('Image1', ['uploadedImage']),
    ...mapState('Image2', ['uploadedImage'])
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
.comfirmWrap
  img 
    max-width: 100px
</style>