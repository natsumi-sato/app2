<template>
  <div class="form-group">
    <label>{{title}}</label>
    <!--<input type="text" v-model="title">-->
    <input class="input" v-model="sharedState.state.property.itemName">
  </div>
</template>

<script>
import Vue from "vue";
//import store from '@/store/index.js'
import PropertyStore from '@/store/PropertyStore.js'

export default {
  name: "itemName",
  data() {
    return {
      title: "商品名",
      privateState: {},
      sharedState: PropertyStore
    };
  },
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
