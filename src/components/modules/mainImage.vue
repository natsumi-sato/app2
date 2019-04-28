<template>
  <div class="form-group">
      <label>{{title}}</label>
      <input type="file" v-on:change="testtt">
      <img v-show="uploadedImage" :src="uploadedImage" />
    </div>
</template>

<script>
import PropertyStore from '@/store/PropertyStore.js'
import { mapState } from "vuex"

export default {
  name: 'mainImage',
  data () {
    return {
      title: 'メイン画像',
      privateState: {},
      sharedState: PropertyStore,
      
    }
  },
  computed: {
    ...mapState(['uploadedImage'])
  },
  methods: {
    testtt(e) {
      console.log(e)
      this.$store.dispatch("onFileChange", e)
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
.form-group 
  img 
    max-width: 100px
</style>
