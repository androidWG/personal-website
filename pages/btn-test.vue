<template>
  <div>
    <h2>Large Buttons</h2>
    <div style="display: flex">
      <LargeButton :compact="false" text="Test" icon="github"></LargeButton>
      <LargeButton :compact="true" text="Test" icon="github"></LargeButton>
      <LargeButton :compact="false" icon="github"></LargeButton>
      <LargeButton :compact="true" icon="github"></LargeButton>
      <LargeButton :compact="false" text="Test"></LargeButton>
      <LargeButton :compact="true" text="Test"></LargeButton>
    </div>
    <h2>Small Buttons</h2>
    <div style="display: flex; gap: 8px;">
      <SmallButton :rounded="false" text="Test" icon="github"></SmallButton>
      <SmallButton :rounded="true" text="Test" icon="github"></SmallButton>
      <SmallButton :rounded="false" icon="github"></SmallButton>
      <SmallButton :rounded="true" icon="github"></SmallButton>
      <SmallButton :rounded="false" text="Test"></SmallButton>
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
