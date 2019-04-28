<template>
    <img v-show="uploadedImage" :src="uploadedImage" />
</template>

<script>
import PropertyStore from '@/store/PropertyStore.js'
import { mapState } from "vuex"

export default {
  name: 'mainImage',
  data () {
    return {
      title: 'サブ画像1枚目',
      privateState: {},
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
