<template>
  <div class="form-group">
      <label>{{title}}</label>
      <input class="input" v-model="sharedState.state.property.detail">
    </div>
</template>

<script>
import PropertyStore from '@/store/PropertyStore.js'

export default {
  name: 'detail',
  data () {
    return {
      title: '商品詳細',
      privateState: {},
      sharedState: PropertyStore
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
