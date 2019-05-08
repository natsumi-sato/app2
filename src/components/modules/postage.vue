<template>
  <div class="form-group">
      <label>{{title}}</label>
      <input class="input" v-model="postage">
    </div>
</template>

<script>
export default {
  name: 'postage',
  data () {
    return {
      title: '送料',
    }
  },
  computed: {
    postage: {
      get () { return this.$store.state.PropertyStore.postage },
      set (val) { this.$store.commit('PropertyStore/setPostage', val) },
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
