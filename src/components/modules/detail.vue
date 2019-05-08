<template>
  <div class="form-group">
      <label>{{title}}</label>
      <input class="input" v-model="detail">
    </div>
</template>

<script>
export default {
  name: 'detail',
  data () {
    return {
      title: '商品詳細',
    }
  },
  computed: {
    detail: {
      get () { return this.$store.state.PropertyStore.detail },
      set (val) { this.$store.commit('PropertyStore/setDetail', val) },
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
