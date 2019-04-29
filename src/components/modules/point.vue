<template>
  <div class="form-group">
      <label>{{title}}</label>
      <input class="input" v-model="point">
    </div>
</template>

<script>
export default {
  name: 'point',
  data () {
    return {
      title: 'ポイント',
    }
  },
  computed: {
    point: {
      get () { return this.$store.state.PropertyStore.point },
      set (val) { this.$store.commit('PropertyStore/setPoint', val) },
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
