<template>
  <div class="form-group">
      <label>{{title}}</label>
      <input class="file" type="file">
    </div>
</template>

<script>
import PropertyStore from '@/store/PropertyStore.js'

export default {
  name: 'mainImage',
  data () {
    return {
      title: 'メイン画像',
      privateState: {},
      sharedState: PropertyStore
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
