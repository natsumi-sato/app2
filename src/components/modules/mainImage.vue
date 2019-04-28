<template>
  <div class="form-group">
      <label>{{title}}</label>
      <input class="file" type="file" @change="fileSelected">
      <img :src="image">
    </div>
</template>

<script>
import PropertyStore from '@/store/PropertyStore.js'

export default {
  name: 'mainImage',
  data () {
    return {
      title: 'メイン画像',
      privateState: {},
      sharedState: PropertyStore,
      image: ''
    }
  },
  methods: {
    fileSelected(evt) {
      var file = evt.target.files.item(0); // 挺特別的
      var fileReader = new FileReader();
      fileReader.addEventListener('load', (event) => {
        this.image = event.target.result;
      });
      fileReader.readAsDataURL(file);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
.form-group 
  img 
    max-width: 100px
</style>
