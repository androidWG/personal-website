<template>
  <div class="skinny group">
    <h2>Coding Projects</h2>
    <div>
      <CodingItem
        class="item"
        v-for="c in data.projects"
        :title="c.name"
        :status="c.status"
        :image="c.image"
        :date-start="c.dates.start"
        :date-end="c.dates.finish"
        :using="c.using"
        :platforms="c.for"
        :key="c.name"
        :link="c.link"
      >
        {{ c.description }}
      </CodingItem>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import CodingItem from "~/components/items/CodingItem.vue";

export default Vue.extend({
  components: { CodingItem },
  head() {
    return {
      title: "Sam Rodrigues | Coding",
    };
  },
  async asyncData({ $content, params }) {
    const data = await $content("coding", params.slug).fetch();
    return {
      data,
    };
  },
});
</script>

<style scoped>
.item {
  margin-bottom: 32px;
}
</style>
