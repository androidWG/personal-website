<template>
  <div>
    <PageHeader :selected="selected"/>
    <div class="scroll">
      <div class="section">
        <slot/>
      </div>
      <PageFooter/>
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
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  gap: 32px;
}

.skinny {
  max-width: 768px;
}

.section {
  width: fit-content;
  margin: 0 96px;
}
</style>
