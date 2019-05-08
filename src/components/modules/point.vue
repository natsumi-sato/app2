<template>
  <div class="form-group">
      <label>{{title}}</label>
      <span class="validation" v-if="pointValidation">{{pointValidation}}</span>
      <input class="input" v-model="point">
    </div>
</template>

<script>
import { mapState } from "vuex"

export default {
  name: 'point',
  data () {
    return {
      title: 'ポイント',
    }
  },
  computed: {
    point: {
      get () { return this.$store.state.PropertyStore.point },
      set (val) { this.$store.commit('PropertyStore/setPoint', val) },
    },
    ...mapState('PropertyStore', ['pointValidation'])
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
$redColor: #E63562

.validation
  color: $redColor

</style>