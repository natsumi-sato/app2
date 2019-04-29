<template>
  <div class="comfirmWrap">
    <p>{{ msg }}</p>
    <div class="itemName">{{ itemName }}</div>
    <div class="listPrice">{{ listPrice }}</div>
    <div class="sellPrice">{{ sellPrice }}</div>
    <div class="brand">{{ brand }}</div>
    <div class="category">{{ category }}</div>
    <div class="color">{{ color }}</div>
    <div class="postage">{{ sharedState.state.property.postage }}</div>
    <div class="point">{{ sharedState.state.property.point }}</div>
    <div class="importFlag">{{ sharedState.state.property.importFlag }}</div>
    <div class="stock">{{ sharedState.state.property.stock }}</div>
    <div class="detail">{{ sharedState.state.property.detail }}</div>
    <div class="seibun">{{ sharedState.state.property.seibun }}</div>
    <mainImageConfirm/>
    <subImage1Confirm/>
    <subImage2Confirm/>
    <subImage3Confirm/>
    <subImage4Confirm/>
    <subImage5Confirm/>
  </div>
</template>

<script>
import mainImageConfirm from '@/components/modules/mainImageConfirm.vue'
import subImage1Confirm from '@/components/modules/subImage1Confirm.vue'
import subImage2Confirm from '@/components/modules/subImage2Confirm.vue'
import subImage3Confirm from '@/components/modules/subImage3Confirm.vue'
import subImage4Confirm from '@/components/modules/subImage4Confirm.vue'
import subImage5Confirm from '@/components/modules/subImage5Confirm.vue'
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
    mainImageConfirm,
    subImage1Confirm,
    subImage2Confirm,
    subImage3Confirm,
    subImage4Confirm,
    subImage5Confirm,
  },
  computed: {
    ...mapState(
      'PropertyStore', ['itemName', 'listPrice', 'sellPrice', 'brand', 'category', 'color', 'postage', 'point', 'importFlag', 'stock', 'detail', 'seibun'],
    )
  },  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
.comfirmWrap
  img 
    max-width: 100px
</style>