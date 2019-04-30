<template>
  <div class="form-group">
    <label>{{title}}</label>
    <span class="validation" v-if="brandValidation">{{brandValidation}}</span>
    <input type="text" v-model="brand">
    <table>
      <tr v-for="suggestBrand in filteredBrands">
        <td v-text="suggestBrand.name" @click="setText"></td>
      </tr>
    </table>
    <p>下記のブランドを登録してあります。<br>また、サジェストをクリックするとそのブランドがinputに入ります。</p>
    <ul>
      <li>キャンメイク</li>
      <li>セザンヌ</li>
      <li>Dior</li>
      <li>RMK</li>
      <li>ジルスチュアート</li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "brand",
  data() {
    return {
      title: "ブランド",
    };
  },
  computed: {
    brand: {
      get() {
        return this.$store.state.PropertyStore.brand;
      },
      set(val) {
        this.$store.commit("PropertyStore/setBrand", val);
      }
    },
    ...mapState("PropertyStore", ["brandValidation", "brandList"]),
    filteredBrands: function() {
      var brandList = [];

      for (var i in this.brandList) {
        var oneBrand = this.brandList[i];

        if (oneBrand.indexOf(this.brand) !== -1) {
          brandList.push(oneBrand);
        }

        if (this.brand == 0) {
           brandList = [];
        }
      }

      return brandList;
    }
  },
  methods: {
    setText: function(event) {
      console.log(event);
      this.brand = event.srcElement.innerText;
    }
  },
  beforeCreate: function() {
    /* axios.get("@/json/brandList.json").then(function(response) {
        this.users = response.data;
      })
      .catch(function(error) {
        console.log(error);
      }); */
  }
};
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