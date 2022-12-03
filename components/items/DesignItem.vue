<template>
  <div>
    <img :src="`/design/${image}`" alt="Project image">
    <h3>{{ title }}</h3>
    <p class="date">{{ date }}</p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    title: String,
    image: String,
    date: [Date, String]
  }
})
</script>

<style scoped lang="scss">

</style>
