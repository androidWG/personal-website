<template>
  <Page selected="home">
    <HomeSection :latest-music="latestMusic" :my-software="mySoftware" />
  </Page>
</template>

<script lang="ts">
import Vue from 'vue'
import HomeSection from '~/components/sections/HomeSection.vue';
import Page from '~/components/page/Page.vue';

export default Vue.extend({
  name: 'IndexPage',
  components: {
    HomeSection,
    Page
  },
  async asyncData({$content, params}) {
    let latestMusic = await $content("home/latest_music", params.slug).fetch();
    let mySoftware = await $content("home/my_software", params.slug).fetch();
    return {
      latestMusic,
      mySoftware
    }
  }
})
</script>
