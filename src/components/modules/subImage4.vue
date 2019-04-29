<template>
  <div class="form-group">
    <label>{{title}}</label>
    <input type="file" v-on:change="uploadedImage1">
    <img v-show="uploadedImage" :src="uploadedImage" />
  </div>
  
</template>

<script>
import { mapState } from "vuex"

export default {
  name: 'mainImage',
  data () {
    return {
      title: 'サブ画像4枚目',
    }
  },
  computed: {
    ...mapState('Image5', ['uploadedImage'])
  },
  methods: {
    uploadedImage1(e) {
      console.log(e)
      this.$store.dispatch("Image5/onFileChange", e)
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
