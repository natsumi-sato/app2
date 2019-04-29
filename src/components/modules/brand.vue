<template>
  <div class="form-group">
      <label>{{title}}</label>
      <input class="input" v-model="brand">
    </div>
</template>

<script>
export default {
  name: 'brand',
  data () {
    return {
      title: 'ブランド',
    }
  },
  computed: {
    brand: {
      get () { return this.$store.state.PropertyStore.brand },
      set (val) { this.$store.commit('PropertyStore/setBrand', val) },
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
