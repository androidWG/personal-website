<template>
  <Page>
    <HomeSection/>
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
  }
})
</script>
