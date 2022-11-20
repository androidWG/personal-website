<template>
  <div class="status" :class="status">
    <img :src="require(`@/assets/icons/${icon}.svg`)" alt="Icon">
    <p class="text">
      {{status}}
    </p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    status: String,
  },
  computed: {
    icon() {
      switch (this.status) {
        case "active":
          return "play";
        case "archived":
          return "archive";
        case "paused":
          return "pause";
        case "finished":
          return "checkmark";
        default:
          break;
      }
    },
  },
});
</script>

<style lang="scss" scoped>
@use "@/assets/css/main.scss";

.status {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  padding: 0;
  gap: 5px;

  img {
    width: 20px;
    aspect-ratio: 1 / 1;
  }

  .text {
    height: min-content;
    margin: 0;
    padding: 0;

    font-family: main.$forma;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    text-transform: uppercase;
  }
}

.finished {
  color: main.$finished;
  img {
    filter: brightness(0) saturate(100%) invert(24%) sepia(100%) saturate(7465%) hue-rotate(328deg) brightness(99%) contrast(105%);
  }
}
</style>
