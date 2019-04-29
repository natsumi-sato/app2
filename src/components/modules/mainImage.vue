<template>
  <div class="form-group">
    <label>{{title}}</label>
    <input type="file" v-on:change="uploadedImage1">
    <img v-if="uploadedImage" :src="uploadedImage" />
  </div>
  
</template>

<script>
import { mapState } from "vuex"

export default {
  name: 'mainImage',
  data () {
    return {
      title: 'メイン画像',
    }
  },
  computed: {
    ...mapState('Image1', ['uploadedImage'])
  },
  methods: {
    uploadedImage1(payload) {
      console.log(payload)
      this.$store.dispatch("Image1/onFileChange", payload)
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
