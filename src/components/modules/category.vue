<template>
  <div class="form-group">
      <label>{{title}}</label>
      <span class="validation" v-if="categoryValidation">{{categoryValidation}}</span>
      <input type="text" v-model="category">
    <table>
      <tr v-for="suggestCategory in filteredCategorys">
        <td v-text="suggestCategory.name" @click="setText"></td>
      </tr>
    </table>
    <p>下記のブランドを登録してあります。<br>また、サジェストをクリックするとそのブランドがinputに入ります。</p>
    <ul>
      <li>口紅</li>
      <li>ファンデ</li>
      <li>アイシャドウ</li>
      <li>チーク</li>
      <li>シャンプー/コンディショナー</li>
    </ul>
  </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
import axios from 'axios';

export default {
  name: 'category',
  data () {
    return {
      title: 'カテゴリ',
    }
  },
  computed: {
    category: {
      get () { return this.$store.state.PropertyStore.category },
      set (val) { this.$store.commit('PropertyStore/setCategory', val) },
    },
    ...mapState("PropertyStore", ["categoryValidation", "categorysJSON"]),
    filteredCategorys: function() {
      var categorys = [];

      for (var i in this.categorysJSON) {
        var oneCotegory = this.categorysJSON[i];

        if (oneCotegory.name.indexOf(this.category) !== -1) {
          categorys.push(oneCotegory);
        }

        if (this.category == 0) {
          var categorys = [];
        }
      }

      return categorys;
    },
  },
  methods: {
    setText: function(event) {
      this.category = event.srcElement.innerText;
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
$redColor: #E63562

.form-group
  .validation
    color: $redColor
  table
    td
      cursor: pointer
      background-color: skyblue
      &:hover
        background-color: blue

</style>