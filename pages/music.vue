<template>
  <div class="container">
    <div class="group">
      <h2>Albums and EPs</h2>
      <div class="list">
        <MusicItem
          class="music-item"
          v-for="a in data.albums"
          :key="a.title"
          :title="a.title"
          :filename="a.filename"
          :date="a.date"
          :links="a.links"
        />
      </div>
    </div>
    <div class="group">
      <h2>Singles</h2>
      <div class="list">
        <MusicItem
          class="music-item"
          v-for="s in data.singles"
          :key="s.title"
          :title="s.title"
          :filename="s.filename"
          :date="s.date"
          :links="s.links"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import MusicItem from "~/components/items/MusicItem.vue";

export default Vue.extend({
  components: { MusicItem },
  head() {
    return {
      title: "Anna Rodrigues | Music",
    };
  },
  async asyncData({ $content, params }) {
    const data = await $content("music", params.slug).fetch();
    return {
      data,
    };
  },
});
</script>

<style scoped lang="scss">
$gap: 24px;
$item: 300px; //size of the music item element
$page-pad: 96px * 2;

$three-items: ($item * 3) + ($gap * 2);
$two-items: ($item * 2) + $gap;

.container {
  width: fit-content;
}

.list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  padding: 0;
  gap: $gap;
  @media (max-width: $two-items + $page-pad) {
    flex-direction: column;
    width: fit-content;

    .music-item {
      width: 100%;
    }
  }
  @media (min-width: $two-items + $page-pad) {
    width: $two-items;
  }
  @media (min-width: $three-items + $page-pad) {
    width: $three-items;
  }
}

.music-item {
  width: $item;
}
</style>
