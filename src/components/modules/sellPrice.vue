<template>
  <div class="form-group">
      <label>{{title}}</label>
      <input type="text">
    </div>
</template>

<script>
export default {
  name: 'sellPrice',
  data () {
    return {
      title: '販売価格'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
