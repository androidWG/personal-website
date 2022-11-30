<template>
  <a
    :class="{ rounded: rounded, selected: selected, small: small }"
    :href="link"
    :rel="'noreferrer noopener'? newTab : ''"
    :target="'_blank' ? newTab : ''"
    class="button"
  >
    <img
      v-if="icon !== undefined"
      class="icon"
      :src="require(`@/assets/icons/white/${icon}.svg`)"
      :alt="`${icon} icon`"
    />
    <p v-if="text !== undefined" class="text">{{ text }}</p>
  </a>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    link: {
      type: String,
      default: "#"
    },
    text: String,
    icon: String,
    small: Boolean,
    selected: Boolean,
    rounded: Boolean,
    newTab: {
      type: Boolean,
      default: true
    }
  },
});
</script>

<style scoped lang="scss" src="./button.scss"></style>
