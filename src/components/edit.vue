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
    <mainImage/>
    <subImage1/>
    <subImage2/>
    <subImage3/>
    <subImage4/>
    <subImage5/>
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
import subImage1 from '@/components/modules/subImage1.vue'
import subImage2 from '@/components/modules/subImage2.vue'
import subImage3 from '@/components/modules/subImage3.vue'
import subImage4 from '@/components/modules/subImage4.vue'
import subImage5 from '@/components/modules/subImage5.vue'
import confirm from '@/components/modules/confirm.vue'

import { mapGetters } from 'vuex'

import PropertyStore from '@/store/PropertyStore.js'

export default {
  name: "editWrap",
  data() {
    return {
      msg: "あああ",
      privateState: {},
      sharedState: PropertyStore
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
    subImage1,
    subImage2,
    subImage3,
    subImage4,
    subImage5,
    confirm,
  },
  methods: {
    validate: function (event) {
      console.log(this.$el)
      var valid = false
      try {
        valid = this.$data.sharedState.validate()
        if (valid) {
          this.$router.push('/confirm')
        }
      } catch (e) {
        alert(e.message)
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
