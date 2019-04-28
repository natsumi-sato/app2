<template>
  <div class="form-group">
      <label>{{title}}</label>
      <!--<input type="text" v-model="listPrice">-->
      <input class="input" v-model="sharedState.state.property.listPrice">
    </div>
</template>

<script>

import PropertyStore from '@/store/PropertyStore.js'
export default {
  name: 'listPrice',
  data () {
    return {
      title: '定価',
      privateState: {},
      sharedState: PropertyStore
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
