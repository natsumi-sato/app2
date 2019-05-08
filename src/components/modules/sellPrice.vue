<template>
  <div class="form-group">
      <label>{{title}}</label>
      <span class="validation" v-if="sellPriceValidation">{{sellPriceValidation}}</span>
      <input class="input" v-model="sellPrice">
    </div>
</template>

<script>
import { mapState } from "vuex"

export default {
  name: 'sellPrice',
  data () {
    return {
      title: '販売価格',
    }
  },
  computed: {
    sellPrice: {
      get () { return this.$store.state.PropertyStore.sellPrice },
      set (val) { this.$store.commit('PropertyStore/setSellPrice', val) },
    },
    ...mapState('PropertyStore', ['sellPriceValidation'])
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
$redColor: #E63562

.validation
  color: $redColor

</style>
