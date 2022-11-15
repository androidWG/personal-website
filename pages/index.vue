<template>
  <page>
    <HomeSection/>
  </page>
</template>

<script lang="ts">
import Vue from 'vue'
import HomeSection from '~/components/sections/Home.vue';

export default Vue.extend({
  name: 'IndexPage',
  components: {
    HomeSection
  }
})
</script>
