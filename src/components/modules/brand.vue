<template>
  <div class="form-group">
    <label>{{title}}</label>
    <span class="validation" v-if="brandValidation">{{brandValidation}}</span>
    <input class="input" v-model="brand">
    <hr>
    <input type="text" v-model="keyword">
    <table>
      <tr v-for="user in filteredUsers">
        <td v-text="user.name" @click="setText"></td>
      </tr>
    </table>
    <hr>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "brand",
  data() {
    return {
      title: "ブランド",
      keyword: "",
      users: [
        {
          id: 1,
          name: "キャンメイク"
        },
        {
          id: 2,
          name: "セザンヌ"
        },
        {
          id: 3,
          name: "Dior"
        },
        {
          id: 4,
          name: "RMK"
        },
        {
          id: 5,
          name: "ジルスチュアート"
        }
      ]
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
    ...mapState("PropertyStore", ["brandValidation"]),
    filteredUsers: function() {
      var users = [];

      for (var i in this.users) {
        var user = this.users[i];

        if (user.name.indexOf(this.keyword) !== -1) {
          users.push(user);
        }

        if(this.keyword == 0) {
          var users = [];
        }
        
      }

      return users;
    }
  },
  methods: {
    setText: function (event) {
      console.log(event)
      this.keyword = event.srcElement.innerText
    }
  },
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