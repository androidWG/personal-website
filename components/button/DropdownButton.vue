<template>
  <div class="dropdown">
    <a
      class="button"
      :class="{
        rounded: rounded,
        selected: selected,
        small: small,
        open: menuOpen,
      }"
      v-on:click="menuOpen = !menuOpen"
    >
      <img
        class="icon"
        :src="require(`@/assets/icons/white/${arrow}.svg`)"
        alt="Arrow icon for dropdown"
      />
      <p class="text">{{ text }}</p>
    </a>
    <div v-show="menuOpen" class="content" ref="content">
      <a class="dropdown-link button" v-for="a in dropdownList" :href="a.link">
        <img
          class="icon"
          :src="require(`@/assets/icons/white/${a.icon}.svg`)"
          :alt="`${a.text} icon`"
        />
        <p class="text">{{ a.text }}</p></a
      >
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    text: String,
    small: Boolean,
    selected: Boolean,
    rounded: Boolean,
    dropdownList: Array,
  },
  data() {
    return {
      menuOpen: false,
    };
  },
  computed: {
    arrow() {
      if (this.$data.menuOpen) {
        return "arrow-up";
      } else {
        return "arrow-down";
      }
    },
  },
});
</script>

<style scoped lang="scss" src="./button.scss"></style>
<style scoped lang="scss">
@use "@/assets/css/main";
@use "./button.scss" as btn;

.button {
  min-width: 170px;
}

.open {
  border-radius: btn.$radius btn.$radius 0 0;
}

.dropdown {
  position: relative;
  display: flex;
  flex-direction: column;
}

.content {
  min-width: fit-content;
  z-index: 1;

  a {
    padding: 12px 16px;
    text-decoration: none;
    display: flex;
    justify-content: start;
  }
}

.dropdown-link {
  background-color: main.$gray-dark;
  border-radius: 0;
  padding: 0 !important;
  font-size: 18px;

  height: fit-content;

  p {
    margin: 12px 16px 12px 0;
  }

  .icon {
    height: 18px;
    margin-left: 8px;
  }

  &:last-child {
    border-radius: 0 0 btn.$radius btn.$radius;
  }
}
</style>
