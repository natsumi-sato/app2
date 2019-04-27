<template>
  <div class="form-group">
      <label>{{title}}</label>
      <input type="text">
    </div>
</template>

<script>
export default {
  name: 'stock',
  data () {
    return {
      title: '在庫数'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
