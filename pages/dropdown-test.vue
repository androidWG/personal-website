<template>
  <div class="container">
    <h2>Dropdown test</h2>
    <DropdownButton
      style="width: fit-content"
      text="More"
      icon="add"
      :small="true"
      :dropdown-list="[
        { link: 'https://androidwg.bandcamp.com/track/my-trip-to-canda', text: 'Bandcamp', icon: 'bandcamp' },
        { link: 'https://soundcloud.com/androidwg/tracks', text: 'SoundCloud', icon: 'soundcloud' },
      ]"
    >
    </DropdownButton>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import DropdownButton from "~/components/button/DropdownButton.vue";

export default Vue.extend({
  components: {DropdownButton},
});
</script>

<style scoped lang="scss">
.container {
  display: flex;
  gap: 8px;
  width: fit-content;
  flex-direction: column;
}
</style>
