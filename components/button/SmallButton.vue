<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    link: String,
    text: String,
    icon: String,
    rounded: Boolean
  }
})
</script>

<template>
  <a class="small button" :class="{rounded: rounded}" :href="link">
    <img v-if="icon !== undefined" class="icon" :src="require(`@/assets/icons/${icon}.svg`)" alt="">
    <p v-if="text !== undefined" class="text">{{ text }}</p>
  </a>
</template>

<style scoped lang="scss" src="./button.scss"></style>
