<template>
  <div class="form-group">
      <label>{{title}}</label>
      <input class="input" v-model="sharedState.state.property.category">
    </div>
</template>

<script>
import PropertyStore from '@/store/PropertyStore.js'

export default {
  name: 'category',
  data () {
    return {
      title: 'カテゴリ',
      privateState: {},
      sharedState: PropertyStore
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
