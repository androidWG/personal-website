<template>
  <div>
    <div class="music-group">
      <h2>Albums and EPs</h2>
      <div>
        <MusicItem v-for="a in albums"
                   :key="a.title"
                   :title="a.title"
                   :filename="a.filename"
                   :date="a.date"
                   :links="a.links"/>
      </div>
    </div>
    <div class="music-group">
      <h2>Singles</h2>
      <MusicItem v-for="s in singles"
                 :key="s.title"
                 :title="s.title"
                 :filename="s.filename"
                 :date="s.date"
                 :links="s.links"/>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import MusicItem from '~/components/items/MusicItem.vue';

export default Vue.extend({
  components: {MusicItem},

  props: {
    albums: Array,
    singles: Array
  }
})
</script>

<style lang="scss">
.music-group {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  gap: 16px;

  align-self: stretch;
}
</style>
