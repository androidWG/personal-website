<template>
  <div>
    <page-header />
    <div class="scroll">
      <slot />
      <page-footer></page-footer>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({

})
</script>

<style>
  .scroll {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;
    gap: 32px;
  }

  .skinny {
    max-width: 768px;
  }

  .wide {
    max-width: 1200px;
  }
</style>