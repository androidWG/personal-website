<template>
  <div class="status" :class="status">
    <img :src="require(`@/assets/icons/black/${icon}.svg`)" alt="Icon">
    <p class="text">
      {{ status }}
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
          return "archived";
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

$height: 16px;

.status {
  height: $height;

  img {
    float: left;
    height: 100%;
    aspect-ratio: 1 / 1;
  }

  .text {
    float: left;
    height: 100%;
    margin: 0 0 0 6px;

    font-weight: 600;
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
