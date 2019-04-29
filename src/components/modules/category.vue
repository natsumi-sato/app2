<template>
  <div class="form-group">
      <label>{{title}}</label>
      <input class="input" v-model="category">
    </div>
</template>

<script>
export default {
  name: 'category',
  data () {
    return {
      title: 'カテゴリ',
    }
  },
  computed: {
    category: {
      get () { return this.$store.state.PropertyStore.category },
      set (val) { this.$store.commit('PropertyStore/setCategory', val) },
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
