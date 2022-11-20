<template>
  <div>
    <PageHeader :selected="selected" />
    <div class="scroll">
      <slot />
      <PageFooter />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import PageHeader from "~/components/page/PageHeader.vue";
import PageFooter from "~/components/page/PageFooter.vue";
export default Vue.extend({
  components: {PageFooter, PageHeader},
  props: {
    selected: String
  }
})
</script>

<style>
  .scroll {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;
    gap: 32px;
  }

  .skinny {
    max-width: 768px;
  }
</style>
