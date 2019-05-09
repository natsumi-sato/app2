<template>
    <div class="swiper-slide" style="background-image:url(http://black-flag.net/devel/jQueryResponsiveFlickSlider/img/photo1.jpg)"><img v-show="uploadedImage" :src="uploadedImage" /></div>
    
</template>

<script>
import { mapState } from "vuex"

export default {
  name: 'mainImage',
  data () {
    return {
      title: 'サブ画像1枚目',
    }
  },
  computed: {
    ...mapState('Image1', ['uploadedImage'])
  },
  methods: {
    uploadedImage1(e) {
      console.log(e)
      this.$store.dispatch("Image1/onFileChange", e)
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
