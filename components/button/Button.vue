<template>
  <a
    class="button"
    :class="{ rounded: rounded, selected: selected, small: small }"
    :href="link"
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
    link: String,
    text: String,
    icon: String,
    small: Boolean,
    selected: Boolean,
    rounded: Boolean,
  },
});
</script>

<style scoped lang="scss">
@use "@/assets/css/main";
@use "@/assets/css/icon";
@use "@/assets/css/_shadows" as shadows;

$total-pad-large: 24px;
$total-pad-small: 16px;

$icon: 23px;
$font-large: 24px;
$font-small: 21px;
$h-large: 63px;
$h-small: 52px;

.button {
  transition-property: box-shadow, background, color;
  transition-duration: 0.15s;
  transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);

  height: $h-large;
  min-width: $h-large;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 2px;

  border-radius: 16px;
  background: #00000000;
  color: main.$gray-light;
  cursor: pointer;
  text-decoration: none;

  font-family: main.$mono;
  font-size: $font-large;

  &:hover {
    color: main.$gray-very-light;
    background: main.$gray-light-dark;
    box-shadow: shadows.$hovered;
  }

  &:active {
    color: main.$gray-very-light;
    background: main.$gray-medium;
    box-shadow: shadows.$highlighted;
  }
}

.selected {
  color: main.$gray-very-light;
  background: main.$primary;
  box-shadow: shadows.$selected;
  font-weight: bold;
}

.icon {
  height: $icon;
  aspect-ratio: 1 / 1;

  &:first-of-type {
    margin-left: $total-pad-large - icon.$pad;
  }

  &:only-child {
    margin: 0;
  }
}

.text {
  margin-right: $total-pad-large;

  &:only-child {
    margin: $total-pad-large;
  }
}

// Effectors
.small {
  font-size: $font-small;
  height: $h-small;
  min-width: $h-small;

  .icon {
    height: $icon;
    aspect-ratio: 1 / 1;

    &:first-of-type {
      margin-left: $total-pad-small - icon.$pad;
    }

    &:only-child {
      margin: 0;
    }
  }

  .text {
    margin-right: $total-pad-small;

    &:only-child {
      margin: $total-pad-small;
    }
  }
}

.rounded {
  border-radius: 128px;
}
</style>
