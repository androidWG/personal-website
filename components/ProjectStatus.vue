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
@use "@/assets/css/_filters.scss" as filters;

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

.active {
  color: main.$active;
  img {
    filter: filters.$active;
  }
}
.archived {
  color: main.$archived;
  img {
    filter: filters.$archived;
  }
}
.finished {
  color: main.$finished;
  img {
    filter: filters.$finished;
  }
}
.paused {
  color: main.$secondary;
  img {
    filter: filters.$paused;
  }
}
</style>
