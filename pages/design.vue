<template>
  <div class="group">
    <h2 class="title">Design Projects</h2>
    <DesignItem
      v-for="d in data.projects"
      :key="d.name"
      :image="d.image"
      :title="d.name"
      :date="d.date"
    ></DesignItem>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import DesignItem from "~/components/items/DesignItem.vue";

export default Vue.extend({
  components: {DesignItem},

  async asyncData({$content, params}) {
    const data = await $content("design", params.slug).fetch();
    return {
      data,
    };
  },
});
</script>

<style lang="scss"></style>
