<template>
  <div class="form-group">
    <router-link to="/confirm" tag="button">{{ button }}</router-link>
    <!--<button v-on:click="buttonAction">{{button}}</button>-->
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
  methods: mapActions('Edit', {
    'buttonAction': 'buttonAction'
  }),
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
