<template>
  <div class="form-group">
      <label>{{title}}</label>
      <input class="input" v-model="stock">
    </div>
</template>

<script>
export default {
  name: 'stock',
  data () {
    return {
      title: '在庫数',
    }
  },
  computed: {
    stock: {
      get () { return this.$store.state.PropertyStore.stock },
      set (val) { this.$store.commit('PropertyStore/setStock', val) },
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
