<template>
  <div class="music-item">
    <div class="cover" v-on:click="toggle">
      <img class="cover-img" :src="cover" alt="Album Cover" />
      <div class="cover-btn">
        <PlayPauseButton ref="button" />
        <p id="play-text">
          {{!isPlaying?"play sample":"stop playing"}}
        </p>
      </div>
    </div>
    <div class="music-item-info">
      <div>
        <h3>{{ title }}</h3>
        <p class="date">{{ date }}</p>
      </div>
      <div>
        <SmallButton
          v-for="(l, index) in links"
          :icon="l.icon"
          :link="l.link"
          :key="index"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import SmallButton from "../button/Small.vue";
import PlayPauseButton from "../button/PlayPause.vue";
export default Vue.extend({
  props: {
    cover: String,
    title: String,
    date: String,
    links: Array,
  },
  data() {
    return {
      isPlaying: false
    }
  },
  components: { SmallButton, PlayPauseButton },
  methods: {
    toggle() {
      this.isPlaying != this.isPlaying;
      this.$refs.button.isPlaying = this.isPlaying;
    },
  },
});
</script>

<style lang="scss">
@use "@/assets/css/main.scss";
@use "@/assets/css/shadows.scss";

.music-item {
  width: 347px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 25px;
}

.cover {
  aspect-ratio: 1 / 1;
  width: 100%;
  height: auto;
  position: relative;
  display: inline-block;

  transition-property: box-shadow, filter;
  transition-duration: 0.15s;
  border-radius: 16px;

  box-shadow: shadows.$cover-default;

  .cover-btn {
    visibility: hidden;
  }

  &:hover {
    box-shadow: shadows.$hovered;
    .cover-img {
      filter: brightness(50%);
    }

    .cover-btn {
      visibility: visible;
    }
  }

  &:active {
    box-shadow: shadows.$highlighted;

    .cover-btn {
      fill: main.$gray-medium;
      color: main.$gray-medium;
    }
  }
}

.cover-btn {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  text-align: center;

  p {
    font-family: main.$mono;
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    margin: 0;
  }
}

.cover-img {
  display: block;
  width: inherit;
}

.music-item-info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;

  z-index: 2;
}
</style>
