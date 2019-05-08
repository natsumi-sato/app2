<template>
  <div class="form-group">
      <label>{{title}}</label>
      <input class="input" v-model="seibun">
    </div>
</template>

<script>
export default {
  name: 'seibun',
  data () {
    return {
      title: '成分',
    }
  },
  computed: {
    seibun: {
      get () { return this.$store.state.PropertyStore.seibun },
      set (val) { this.$store.commit('PropertyStore/setSeibun', val) },
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
