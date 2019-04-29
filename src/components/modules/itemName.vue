<template>
  <div class="form-group">
    <label>{{title}}</label>
    <!--<input type="text" v-model="title">-->
    <input class="input" v-model="itemName">
  </div>
</template>

<script>
import Vue from "vue";
//import store from '@/store/index.js'
//import PropertyStore from '@/store/PropertyStore.js'
import { mapState } from "vuex"

export default {
  name: "itemName",
  data() {
    return {
      title: "商品名",
      //sharedState: PropertyStore
    };
  },
  computed: {
    itemName: {
      get () { return this.$store.state.PropertyStore.itemName },
      set (val) { this.$store.commit('PropertyStore/setItemName', val) },
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
