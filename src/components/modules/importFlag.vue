<template>
  <div class="form-group">
      <label>{{title}}</label>
      <input class="input" v-model="importFlag">
    </div>
</template>

<script>
export default {
  name: 'importFlag',
  data () {
    return {
      title: '並行輸入品フラグ',
    }
  },
  computed: {
    importFlag: {
      get () { return this.$store.state.PropertyStore.importFlag },
      set (val) { this.$store.commit('PropertyStore/setImportFlag', val) },
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
