<template>
  <nuxt-content :document="data"></nuxt-content>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  async asyncData({$content, params}) {
    const data = await $content("blog", params.slug).fetch()
    return {data}
  }
})
</script>

<style lang="scss">
@use "@/assets/css/main.scss";
@use "sass:color";

.nuxt-content {
  a {
    transition: color 0.15s;
    color: main.$primary;
    text-decoration: none;

    &:hover {
      color: scale-color(main.$primary, $lightness: +25%);
      text-decoration: underline;
    }
  }

  code {
    font-size: small;
    font-family: main.$mono;
    color: main.$gray-very-light;
    text-shadow: none;
  }

  .language-text {
    border-radius: 16px;
    background: main.$gray-dark;
  }
}
</style>
