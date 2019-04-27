<template>
  <div class="form-group">
    <label>{{title}}</label>
    <input type="text" v-model="itemName">
  </div>
</template>

<script>
import Vue from "vue";
//import store from '@/store/index.js'
import { mapGetters } from "vuex";

export default {
  name: "itemName",
  data() {
    return {
      title: "商品名"
    };
  },
  computed: {
    itemName: {
      get() {
        return this.$store.state.itemName;
      },
      set(value) {
        this.$store.commit("updateItemName", value);
      }
    },
    ...mapGetters("Textarea", {
      error: "getError"
    })
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
