<template>
  <div class="form-group">
      <label>{{title}}</label>
      <input class="input" v-model="listPrice">
    </div>
</template>

<script>
export default {
  name: 'listPrice',
  data () {
    return {
      title: '定価',
    }
  },
  computed: {
    listPrice: {
      get () { return this.$store.state.PropertyStore.listPrice },
      set (val) { this.$store.commit('PropertyStore/setListPrice', val) },
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
