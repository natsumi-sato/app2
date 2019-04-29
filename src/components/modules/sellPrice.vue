<template>
  <div class="form-group">
      <label>{{title}}</label>
      <input class="input" v-model="sellPrice">
    </div>
</template>

<script>
export default {
  name: 'sellPrice',
  data () {
    return {
      title: '販売価格',
    }
  },
  computed: {
    sellPrice: {
      get () { return this.$store.state.PropertyStore.sellPrice },
      set (val) { this.$store.commit('PropertyStore/setSellPrice', val) },
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
