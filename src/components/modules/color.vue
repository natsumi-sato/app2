<template>
  <div class="form-group">
      <label>{{title}}</label>
      <input class="input" v-model="sharedState.state.property.color">
    </div>
</template>

<script>
import PropertyStore from '@/store/PropertyStore.js'

export default {
  name: 'color',
  data () {
    return {
      title: 'カラー',
      privateState: {},
      sharedState: PropertyStore
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
