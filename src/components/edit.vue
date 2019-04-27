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
    <div class="form-group">
      <label>送料</label>
      <input type="text">
    </div>
    <div class="form-group">
      <label>ポイント</label>
      <input type="text">
    </div>
    <div class="form-group">
      <label>並行輸入品フラグ</label>
      <input type="text">
    </div>
    <div class="form-group">
      <label>在庫数</label>
      <input type="text">
    </div>
    <div class="form-group">
      <label>商品詳細</label>
      <input type="text">
    </div>
    <div class="form-group">
      <label>成分</label>
      <input type="text">
    </div>
    <div class="form-group">
      <label>メイン画像</label>
      <input type="file">
    </div>
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

export default {
  name: "Edit",
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

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
