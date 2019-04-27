<template>
  <div class="form-group">
      <label>{{title}}</label>
      <input type="text">
    </div>
</template>

<script>
export default {
  name: 'importFlag',
  data () {
    return {
      title: '並行輸入品フラグ'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
