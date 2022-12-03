<template>
  <div class="container">
    <div class="group">
      <h2 class="title">Design Projects</h2>
      <div class="list">
        <DesignItem
          class="design-item"
          v-for="d in data.projects"
          :key="d.name"
          :image="d.image"
          :title="d.name"
          :date="d.date"
        ></DesignItem>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import DesignItem from "~/components/items/DesignItem.vue";

export default Vue.extend({
  components: {DesignItem},
  head() {
    return {
      title: "Sam Rodrigues | Design"
    }
  },
  async asyncData({$content, params}) {
    const data = await $content("design", params.slug).fetch();
    return {
      data,
    };
  },
});
</script>

<style lang="scss">
@use "@/assets/css/breakpoints.scss";

$gap: 24px;
$item: 350px; //size of the music item element
$page-pad: 96px * 2;

$three-items: ($item * 3) + ($gap * 2);
$two-items: ($item * 2) + $gap;

.container {
  @media (max-width: $two-items + $page-pad) {
    width: fit-content;
  }
  @media (min-width: $two-items + $page-pad) {
    width: $two-items;
  }
  @media (min-width: $three-items + $page-pad) {
    width: $three-items;
  }
}

.list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: $gap;

  @media (max-width: $two-items + $page-pad) {
    flex-direction: column;
    flex-wrap: nowrap;
  }
}

.design-item {
  width: $item !important;

  @media (max-width: $two-items + $page-pad) {
    width: 75vw !important;
  }
}
</style>
