<template>
  <div>
    <h2>Large Buttons</h2>
    <div class="container">
      <LargeButton text="Test" icon="github"></LargeButton>
      <LargeButton icon="github"></LargeButton>
      <LargeButton text="Test"></LargeButton>
    </div>
    <h2>Small Buttons</h2>
    <h3>not rounded</h3>
    <div class="container">
      <SmallButton :rounded="false" icon="github"></SmallButton>
      <SmallButton :rounded="false" text="Test" icon="github"></SmallButton>
      <SmallButton :rounded="false" text="Test"></SmallButton>
    </div>
    <h3>rounded</h3>
    <div class="container">
      <SmallButton :rounded="true" icon="github"></SmallButton>
      <SmallButton :rounded="true" text="Test" icon="github"></SmallButton>
      <SmallButton :rounded="true" text="Test"></SmallButton>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import SmallButton from "~/components/button/SmallButton.vue";
import LargeButton from "~/components/button/LargeButton.vue";

export default Vue.extend({
  name: "ButtonTest",
  components: {
    LargeButton,
    SmallButton,
  },
});
</script>

<style scoped lang="scss">
.container {
  background-color: #2E282A;

  margin: 16px 0;
  display: flex;
  gap: 16px;
}
</style>
