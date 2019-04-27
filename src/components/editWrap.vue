<template>
  <div id="editWrap">
    <itemName/>
    <listPrice/>
    <sellPrice/>
    <brand/>
    <category/>
    <color/>
    <capacity/>
    <postage/>
    <point/>
    <importFlag/>
    <stock/>
    <detail/>
    <seibun/>
    <mainImage/>
    <confirm/>
    
  </div>
</template>

<script>
import itemName from '@/components/modules/itemName.vue'
import listPrice from '@/components/modules/listPrice.vue'
import sellPrice from '@/components/modules/sellPrice.vue'
import brand from '@/components/modules/brand.vue'
import category from '@/components/modules/category.vue'
import color from '@/components/modules/color.vue'
import capacity from '@/components/modules/capacity.vue'
import postage from '@/components/modules/postage.vue'
import point from '@/components/modules/point.vue'
import importFlag from '@/components/modules/importFlag.vue'
import stock from '@/components/modules/stock.vue'
import detail from '@/components/modules/detail.vue'
import seibun from '@/components/modules/seibun.vue'
import mainImage from '@/components/modules/mainImage.vue'
import confirm from '@/components/modules/confirm.vue'

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
    mainImage,
    confirm,
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
