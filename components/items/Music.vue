<template>
  <div class="music-item">
    <button
      class="clean cover"
      :class="{ 'cover-hover': isPlaying || hovered }"
      @click="toggle"
      @mouseenter="toggleHover"
      @mouseleave="toggleHover"
    >
      <img class="cover-img" :src="cover" alt="Album Cover" />
      <div class="cover-btn">
        <PlayPauseButton ref="button" />
        <p id="play-text">
          {{ isPlaying ? "stop playing" : "play sample" }}
        </p>
      </div>
    </button>
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
let timerID = null;

import Vue from "vue";
import { Howl } from "howler";
import SmallButton from "../button/Small.vue";
import PlayPauseButton from "../button/PlayPause.vue";
import scale from "../scaler.js";
export default Vue.extend({
  props: {
    cover: String,
    title: String,
    date: String,
    links: Array,
  },
  setup() {
    const sample = new Howl({
      src: ["/samples/test.mp3"],
    });

    return {
      sample,
    };
  },
  data() {
    return {
      isPlaying: false,
      hovered: false,
    };
  },
  components: { SmallButton, PlayPauseButton },
  methods: {
    toggle() {
      if (!this.isPlaying) {
        this.sample.play();
        this.sample.on("end", () => {
          console.log("finished playing");
          this.isPlaying = !this.isPlaying;
          this.$refs.button.isPlaying = this.isPlaying;
        });

        let startTime = Date.now();
        let finishTime = startTime + this.sample.duration() * 1000;
        timerID = setInterval(this.updateProgress, 300, startTime, finishTime);

        this.$refs.button.progress = 0;
      } else {
        this.sample.stop();
        clearInterval(timerID);
        timerID = null;
      }

      this.isPlaying = !this.isPlaying;
      this.$refs.button.isPlaying = this.isPlaying;
    },
    updateProgress(startTime, finishTime) {
      if (this.sample.playing && this.$refs.button !== undefined) {
        let progress = scale(startTime, finishTime, 0, 100, Date.now());
        this.$refs.button.progress = progress;
      }
    },
    toggleHover() {
      this.hovered = !this.hovered;
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

  transition-property: box-shadow;
  transition-duration: 0.15s;
  border-radius: 16px;
  color: main.$gray-very-light;
  box-shadow: shadows.$cover-default;
  cursor: pointer;

  .cover-btn {
    visibility: hidden;
  }

  &:active {
    box-shadow: shadows.$highlighted;

    .cover-btn {
      filter: brightness(50%);
    }
  }
}

.cover-hover {
  box-shadow: shadows.$hovered;
  .cover-img {
    filter: brightness(50%);
  }

  .cover-btn {
    visibility: visible;
  }
}

.cover-btn {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  text-align: center;
  user-select: none;

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
  border-radius: 16px;
  transition-property: filter;
  transition-duration: inherit;
}

.play-icon {
  margin: 0 auto;
}

.music-item-info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;

  z-index: 2;
}
</style>
