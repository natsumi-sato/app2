<template>
  <div class="form-group">
    <button v-on:click="buttonAction">{{button}}</button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: "confirm",
  data() {
    return {
      button: "確認"
    };
  },
  methods: mapActions('PropertyStore', {
    'buttonAction': 'buttonAction'
  }),
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
