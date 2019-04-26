<template>
  <div class="form-group">
      <label>{{title}}</label>
      <input type="text">
    </div>
</template>

<script>
export default {
  name: 'itemName',
  data () {
    return {
      title: '商品名'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
