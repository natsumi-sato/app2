<template>
  <div class="form-group">
      <label>{{title}}</label>
      <input class="input" v-model="sharedState.state.property.point">
    </div>
</template>

<script>
import PropertyStore from '@/store/PropertyStore.js'

export default {
  name: 'point',
  data () {
    return {
      title: 'ポイント',
      privateState: {},
      sharedState: PropertyStore
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
