<template>
  <div class="form-group">
      <label>{{title}}</label>
      <input class="input" v-model="sharedState.state.property.sellPrice">
    </div>
</template>

<script>
import PropertyStore from '@/store/PropertyStore.js'

export default {
  name: 'sellPrice',
  data () {
    return {
      title: '販売価格',
      privateState: {},
      sharedState: PropertyStore
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
