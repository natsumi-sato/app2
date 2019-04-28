<template>
  <div class="form-group">
    <label>{{title}}</label>
    <input type="file" v-on:change="uploadedImage1">
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
      title: 'サブ画像2枚目',
      privateState: {},
    }
  },
  computed: {
    ...mapState('Image3', ['uploadedImage'])
  },
  methods: {
    uploadedImage1(e) {
      console.log(e)
      this.$store.dispatch("Image3/onFileChange", e)
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
