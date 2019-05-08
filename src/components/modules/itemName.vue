<template>
  <div class="form-group">
    <label>{{title}}</label>
    <span class="validation" v-if="itemNameValidation">{{itemNameValidation}}</span>
    <input class="input" v-model="itemName">
  </div>
</template>

<script>
import { mapState } from "vuex"

export default {
  name: "itemName",
  data() {
    return {
      title: "商品名",
    };
  },
  computed: {
    itemName: {
      get () { return this.$store.state.PropertyStore.itemName },
      set (val) { this.$store.commit('PropertyStore/setItemName', val) },
    },
    ...mapState('PropertyStore', ['itemNameValidation'])
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
$redColor: #E63562

.validation
  color: $redColor

</style>