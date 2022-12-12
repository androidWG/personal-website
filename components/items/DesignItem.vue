<template>
  <a class="item" :href="link" target="_blank" rel="noopener noreferrer">
    <img class="thumbnail" :src="`/design/${image}`" alt="Project image"/>
    <div class="info">
      <h3 class="list-title">{{ title }}</h3>
      <p class="date">{{ dateFormatted }}</p>
    </div>
  </a>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    title: String,
    image: String,
    date: [Date, String],
    link: String
  },
  computed: {
    dateFormatted() {
      if (this.date === "TBD") {
        return this.date;
      } else {
        let parsedDate = new Date(this.date);
        return parsedDate.toLocaleDateString("en-US", {
          month: "long",
          year: "numeric",
        });
      }
    },
  },
});
</script>

<style scoped lang="scss">
@use "@/assets/css/_shadows.scss" as shadows;
@use "@/assets/css/_mixins.scss" as m;

.item {
  width: 50vw;
  max-width: 400px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  text-decoration: none;

  user-select: none;
  cursor: pointer;
  @include m.title-effects;

  &:hover {
    .thumbnail {
      box-shadow: shadows.$highlighted;
    }
  }

  &:active {
    .thumbnail {
      box-shadow: shadows.$hovered;
      filter: brightness(75%);
    }
  }
}

.thumbnail {
  width: 100%;
  aspect-ratio: 3200 / 2400;
  border-radius: 16px;

  transition-property: box-shadow, filter;
  transition-duration: 0.15s;

  box-shadow: shadows.$cover-default;
}

.list-title {
  @include m.title;
}
</style>
