<template>
  <div class="form-group">
      <label>{{title}}</label>
      <input class="input" v-model="color">
    </div>
</template>

<script>
export default {
  name: 'color',
  data () {
    return {
      title: 'カラー',
    }
  },
  computed: {
    color: {
      get () { return this.$store.state.PropertyStore.color },
      set (val) { this.$store.commit('PropertyStore/setColor', val) },
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
