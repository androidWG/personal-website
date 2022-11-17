<template>
  <div class="page-footer">
    <p id="footer-text">
      © Sam Rodrigues 2022<br />Using Material Icons <br />Made with Figma,
      Vue.js and Nuxt
    </p>
    <links />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Links from "./Links.vue";
export default Vue.extend({
  components: { Links },});
</script>

<style lang="scss">
@use "@/assets/css/main.scss";

.page-footer {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px 0px;
  gap: 16px;

  background: main.$gray-dark;

  #footer-text {
    font-family: main.$mono;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    text-align: center;

    color: main.$gray-medium;
  }
}
</style>
