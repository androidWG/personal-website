<template>
  <div>
    <h2>Large Buttons</h2>
    <h3>not rounded</h3>
    <div class="container">
      <Button text="Test" icon="github"></Button>
      <Button icon="github"></Button>
      <Button text="Test"></Button>
    </div>
    <div class="container">
      <Button :selected="true" text="Test" icon="github"></Button>
      <Button :selected="true" icon="github"></Button>
      <Button :selected="true" text="Test"></Button>
    </div>
    <h3>rounded</h3>
    <div class="container">
      <Button :rounded="true" text="Test" icon="github"></Button>
      <Button :rounded="true" icon="github"></Button>
      <Button :rounded="true" text="Test"></Button>
    </div>
    <div class="container">
      <Button :rounded="true" :selected="true" text="Test" icon="github"></Button>
      <Button :rounded="true" :selected="true" icon="github"></Button>
      <Button :rounded="true" :selected="true" text="Test"></Button>
    </div>
    <h2>Small Buttons</h2>
    <h3>not rounded</h3>
    <div class="container">
      <Button :small="true" :rounded="false" icon="github"></Button>
      <Button :small="true" :rounded="false" text="Test" icon="github"></Button>
      <Button :small="true" :rounded="false" text="Test"></Button>
    </div>
    <div class="container">
      <Button :small="true" :selected="true" :rounded="false" icon="github"></Button>
      <Button :small="true" :selected="true" :rounded="false" text="Test" icon="github"></Button>
      <Button :small="true" :selected="true" :rounded="false" text="Test"></Button>
    </div>
    <h3>rounded</h3>
    <div class="container">
      <Button :small="true" :rounded="true" icon="github"></Button>
      <Button :small="true" :rounded="true" text="Test" icon="github"></Button>
      <Button :small="true" :rounded="true" text="Test"></Button>
    </div>
    <div class="container">
      <Button :small="true" :selected="true" :rounded="true" icon="github"></Button>
      <Button :small="true" :selected="true" :rounded="true" text="Test" icon="github"></Button>
      <Button :small="true" :selected="true" :rounded="true" text="Test"></Button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Button from "~/components/button/Button.vue";

export default Vue.extend({
  name: "ButtonTest",
  components: {
    Button,
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
