<template>
  <div class="form-group">
      <label>{{title}}</label>
      <input type="text" v-model="listPrice">
    </div>
</template>

<script>
export default {
  name: 'listPrice',
  data () {
    return {
      title: '定価'
    }
  },
  computed: {
    listPrice: {
      get() {
        return this.$store.state.listPrice;
      },
      set(value) {
        this.$store.commit("updateListPrice", value);
      }
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
