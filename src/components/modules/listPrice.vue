<template>
  <div class="form-group">
      <label>{{title}}</label>
      <input type="text">
    </div>
</template>

<script>
export default {
  name: 'listPrice',
  data () {
    return {
      title: '定価'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
