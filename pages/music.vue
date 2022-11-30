<template>
  <div class="container">
    <div class="group">
      <h2>Albums and EPs</h2>
      <div class="list">
        <MusicItem v-for="a in data.albums"
                   :key="a.title"
                   :title="a.title"
                   :filename="a.filename"
                   :date="a.date"
                   :links="a.links"/>
      </div>
    </div>
    <div class="group">
      <h2>Singles</h2>
      <div class="list">
        <MusicItem v-for="s in data.singles"
                   :key="s.title"
                   :title="s.title"
                   :filename="s.filename"
                   :date="s.date"
                   :links="s.links"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import MusicItem from '~/components/items/MusicItem.vue';

export default Vue.extend({
  components: {MusicItem},
  head() {
    return {
      title: "Sam Rodrigues | Music"
    }
  },
  async asyncData({$content, params}) {
    const data = await $content("music", params.slug).fetch();
    return {
      data
    }
  }
})
</script>

<style scoped lang="scss">
$gap: 24px;
$item: 347px; //size of the music item element
$page-pad: 96px * 2;

$three-items: ($item * 3) + ($gap * 2);
$two-items: ($item * 2) + $gap;

.container {
  @media (min-width: $item + $page-pad) {
    width: $item;
  }
  @media (min-width: $two-items + $page-pad) {
    width: $two-items;
  }
  @media (min-width: $three-items + $page-pad) {
    width: $three-items;
  }
}

.list {
  width: fit-content;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  padding: 0;
  gap: $gap;
}
</style>
