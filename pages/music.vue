index.vue<template>
  <Page selected="music">
    <MusicSection/>
  </Page>
</template>

<script lang="ts">
import Vue from 'vue'
import MusicSection from '~/components/sections/MusicSection.vue';
import Page from '~/components/page/Page.vue';

export default Vue.extend({
  name: 'MusicPage',
  components: {
    MusicSection,
    Page
  }
})
</script>
