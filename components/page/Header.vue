<template>
  <div class="header">
    <div class="title">
      <img src="~/assets/svg/Logo.svg" alt="Logo" />
      <h1>anna rodrigues</h1>
    </div>
    <div class="menu">
      <div class="overlay">
        <div ref="edgeLeft" class="edge" id="left" style="opacity: 0"></div>
        <div ref="edgeRight" class="edge" id="right" style="opacity: 0"></div>
      </div>
      <nav class="content" ref="scroll" v-on:scroll="updateOverlay">
        <Button
          :new-tab="false"
          :selected="selected === 'index'"
          text="Home"
          link="/"
          icon="home"
          ref="home-btn"
        />
        <Separator />
        <Button
          :new-tab="false"
          :selected="selected === 'design'"
          text="Design"
          link="/design"
          ref="design-btn"
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
          :selected="selected === 'music'"
          text="Music"
          link="/music"
          ref="music-btn"
        />
      </nav>
    </div>
  </div>
</template>

<script lang="ts">
import { map } from "../math";
import Vue from "vue";
import Button from "../button/Button.vue";
import Links from "../Links.vue";
import Separator from "../Separator.vue";

export default Vue.extend({
  name: "PageHeader",
  components: { Button, Separator, Links },
  props: {
    selected: String,
  },
  mounted() {
    this.scrollToSelected();
  },
  methods: {
    updateOverlay() {
      let scroll = this.$refs.scroll as Element;
      let right = this.$refs.edgeRight as HTMLElement;
      let left = this.$refs.edgeLeft as HTMLElement;

      console.log(typeof right);

      let maxGap = 64; //in px
      let maxScrollLeft = scroll.scrollWidth - scroll.clientWidth;

      left.style.opacity = map(0, maxGap, 0, 1, scroll.scrollLeft);
      right.style.opacity = map(
        maxScrollLeft,
        maxScrollLeft - maxGap,
        0,
        1,
        scroll.scrollLeft
      );
    },
    scrollToSelected() {
      let scroll = this.$refs.scroll as Element;
      let children = Array.from(scroll.children);
      children.forEach((e: Element) => {
        if (e.classList.contains("selected")) {
          e.scrollIntoView({ inline: "center", block: "nearest" });
          console.log("Scrolled to selected");
          return;
        }
      });
    },
  },
});
</script>

<style scoped lang="scss">
@use "@/assets/css/breakpoints.scss";

.header {
  padding: 64px 0 32px;
  user-select: none;

  max-width: 100%;

  @include breakpoints.q-small {
    padding: 32px 0 16px;
  }
}

.title {
  width: fit-content;
  margin: 0 auto 16px;
  display: flex;
  gap: 3vw;
  white-space: nowrap;

  z-index: 3;

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
    transform: translate(0, max(-1.5vw, -8px));
  }
}

.menu {
  position: relative;

  .overlay {
    pointer-events: none;
    position: absolute;
    width: 100vw;
    height: 100%;

    display: flex;
    justify-content: space-between;

    z-index: 2;

    .edge {
      width: 64px;
      height: 100%;
    }

    #left {
      background: linear-gradient(90deg, black, #00000000);
    }

    #right {
      background: linear-gradient(-90deg, black, #00000000);
    }
  }

  .content {
    $margin: 32px;
    margin: -$margin auto;
    padding: $margin 32px;

    display: flex;
    gap: 32px;
    max-width: fit-content;
    overflow-x: scroll;
    scrollbar-width: none;

    z-index: 1;

    Button {
      display: inline-block !important;
    }

    // Hide the scrollbar on Chrome and Safari
    &::-webkit-scrollbar {
      display: none;
    }

    @include breakpoints.q-small {
      gap: 16px;
    }
  }
}
</style>
