<template>
  <div class="header">
    <div class="h-list">
      <img
        src="~/assets/svg/Logo.svg"
        style="width: 50px; height: 50px"
        alt="Logo"
      />
      <h1>sam rodrigues</h1>
    </div>
    <div class="h-list">
      <Button
        :new-tab="false"
        :selected="selected === 'index'"
        text="Home"
        link="/"
        icon="home"
        ref="home-btn"
      />
      <Separator/>
      <Button
        :new-tab="false"
        :selected="selected === 'music'"
        text="Music"
        link="/music"
        ref="music-btn"
      />
      <Button
        :new-tab="false"
        :selected="selected === 'coding'"
        text="Coding"
        link="/coding"
        ref="coding-btn"
      />
      <Button
        :new-tab="false"
        :selected="selected === 'design'"
        text="Design"
        ref="design-btn"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Button from "../button/Button.vue";
import Links from "../Links.vue";
import Separator from "../Separator.vue";

export default Vue.extend({
  name: "PageHeader",
  components: {Button, Separator, Links},
  props: {
    selected: String,
  },
});
</script>

<style scoped lang="scss">
.header {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 64px 0 32px;
  gap: 16px;
  user-select: none;

  width: 100%;
}
</style>
