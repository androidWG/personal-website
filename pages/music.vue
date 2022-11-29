<template>
  <Page selected="music">
    <MusicSection :albums="data.albums" :singles="data.singles"/>
  </Page>
</template>

<script lang="ts">
import Vue from 'vue'
import MusicSection from '~/components/sections/MusicSection.vue';
import Page from '~/components/page/Page.vue';

export default Vue.extend({
  name: 'MusicPage',
  head() {
    return {
      title: "Sam Rodrigues | Music"
    }
  },
  components: {
    MusicSection,
    Page
  },
  async asyncData({$content, params}) {
    const data = await $content("music", params.slug).fetch();
    return {
      data
    }
  }
})
</script>
