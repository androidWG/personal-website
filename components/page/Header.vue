<template>
  <div class="header">
    <div class="title">
      <img
        src="~/assets/svg/Logo.svg"
        alt="Logo"
      />
      <h1>sam rodrigues</h1>
    </div>
    <div class="menu">
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
@use "@/assets/css/breakpoints.scss";

.header {
  padding: 64px 0 32px;
  user-select: none;

  max-width: 100%;
}

.title {
  width: fit-content;
  margin: 0 auto 8px;
  display: flex;
  gap: 3vw;
  white-space: nowrap;

  img {
    max-width: 50px;
    width: 6vw;
    aspect-ratio: 1 / 1;

    @include breakpoints.q-small {
      display: none;
    }
  }

  h1 {
    height: fit-content;
    transform: translate(0, min(-1.5vw, -8px));
  }
}

.menu {
  margin: 8px auto;
  padding: 0 32px;

  display: flex;
  gap: 32px;
  max-width: fit-content;
  overflow-x: auto;
  overflow-y: visible;
  scrollbar-width: none;

  Button {
    display: inline-block !important;
  }

  &::-webkit-scrollbar {
    display: none;
  }
}
</style>
