<template>
  <div id="comfirmWrap">
    <p>{{ msg }}</p>
    <div class="nickname">{{ sharedState.state.property.nickname }}</div>
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
    <div class="mainImage">{{ sharedState.state.property.mainImage }}</div>
    <div class="confirm">{{ sharedState.state.property.confirm }}</div>
  </div>
</template>

<script>
import store from '@/store/index.js'
import PropertyStore from '@/store/PropertyStore.js'

export default {
  name: "confirmScreen",
  data() {
    return {
      msg: "確認画面テスト",
      privateState: {},
      sharedState: PropertyStore
    };
  },
  components: {
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
