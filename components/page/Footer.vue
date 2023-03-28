<template>
  <div class="footer">
    <p id="footer-text">
      © Anna Rodrigues 2023<br />Using Material Icons <br />Made with Figma,
      Vue.js and Nuxt
    </p>
    <Links />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Links from "../Links.vue";

export default Vue.extend({
  components: { Links },
});
</script>

<style scoped lang="scss">
@use "@/assets/css/main.scss";
@use "@/assets/css/breakpoints.scss";

.footer {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px 0;
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
