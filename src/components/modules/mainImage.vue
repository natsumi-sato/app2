<template>
  <div class="form-group">
      <label>{{title}}</label>
      <input type="file">
    </div>
</template>

<script>
export default {
  name: 'mainImage',
  data () {
    return {
      title: 'メイン画像'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
