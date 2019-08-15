<template>
  <div class="js-accordion" v-cloak>
    <button
      class="js-accordion--trigger"
      type="button"
      :class="{ '_state-open': isOpened }"
      @click="accordionToggle()"
    >
      <slot name="title"></slot>
    </button>
    <transition
      name="js-accordion"
      @before-enter="beforeEnter"
      @enter="enter"
      @before-leave="beforeLeave"
      @leave="leave"
    >
      <div class="js-accordion--target" :class="{ '_state-open': isOpened }" v-if="isOpened">
        <slot name="body"></slot>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpened: false
    };
  },
  props: {},
  methods: {
    accordionToggle: function() {
      this.isOpened = !this.isOpened;
    },
    beforeEnter: function(el) {
      el.style.height = "0";
    },
    enter: function(el) {
      el.style.height = el.scrollHeight + "px";
    },
    beforeLeave: function(el) {
      el.style.height = el.scrollHeight + "px";
    },
    leave: function(el) {
      el.style.height = "0";
    }
  }
};
</script>

<style scoped lang="scss">
/*jsアコーディオン*/
.js-accordion {
  &--trigger {
    font-size: 1rem;
    position: relative;
    display: block;
    width: 100%;
    padding: 10px 0;
    transition: all 0.2s ease-in;
    text-align: left;
    outline: none;
    border: none;
    cursor: pointer;
  }
  &--target {
    padding-bottom: 10px;
    overflow: hidden;
    transition: height 0.4s ease-in-out;
  }
  &--body {
    padding: 0;
  }
}

</style>