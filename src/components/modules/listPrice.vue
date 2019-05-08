<template>
  <div class="form-group">
      <label>{{title}}</label>
      <span class="validation" v-if="listPriceValidation">{{listPriceValidation}}</span>
      <input class="input" v-model="listPrice">
    </div>
</template>

<script>
import { mapState } from "vuex"

export default {
  name: 'listPrice',
  data () {
    return {
      title: '定価',
    }
  },
  computed: {
    listPrice: {
      get () { return this.$store.state.PropertyStore.listPrice },
      set (val) { this.$store.commit('PropertyStore/setListPrice', val) },
    },
    ...mapState('PropertyStore', ['listPriceValidation'])
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
$redColor: #E63562

.validation
  color: $redColor

</style>