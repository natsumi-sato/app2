<template>
  <div class="form-group">
    <label>{{title}}</label>
    <span class="validation" v-if="brandValidation">{{brandValidation}}</span>
    <input type="text" v-model="brand">
    <table>
      <tr v-for="user in filteredUsers">
        <td v-text="user.name" @click="setText"></td>
      </tr>
    </table>
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
    ...mapState("PropertyStore", ["brandValidation", "brands", "brandValidation"]),
    filteredUsers: function() {
      var brands = [];

      for (var i in this.brands) {
        var onebrand = this.brands[i];

        if (onebrand.name.indexOf(this.brand) !== -1) {
          brands.push(onebrand);
        }

        if (this.brand == 0) {
          var brands = [];
        }
      }

      return brands;
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
      &:hover
        background-color: skyblue

</style>