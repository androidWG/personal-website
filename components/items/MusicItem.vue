<template>
  <div class="music-item">
    <div class="clean cover" :class="{ playing: isPlaying }" @click="toggle">
      <img class="cover-img" :src="`/covers/${filename}.jpg`" alt="Album Cover"/>
      <div class="cover-btn">
        <PlayPauseButton style="margin: 0 auto" ref="button"/>
        <p id="play-text">
          {{ isPlaying || isPlaying ? "stop playing" : "play sample" }}
        </p>
      </div>
    </div>
    <div class="info">
      <a :href="link" class="main-info">
        <h3 class="list-title">{{ title }}</h3>
        <p class="date">{{ date }}</p>
      </a>
      <div class="links">
        <SmallButton
          v-for="(l, index) in links"
          :icon="l.platform"
          :link="l.link"
          :key="index"
          rounded="true"
        />
      </div>
    </div>
  </div>
</template>

<script>
let timerID = null;

import Vue from "vue";
import {Howl, Howler} from "howler";
import SmallButton from "../button/SmallButton.vue";
import PlayPauseButton from "../button/PlayPause.vue";
import scale from "../scaler.js";

export default Vue.extend({
  props: {
    filename: String,
    title: String,
    date: String,
    link: String,
    links: Array,
  },
  setup(props) {
    Howler.preload = false;
    const sample = new Howl({
      src: [`/samples/${props.filename}.mp3`],
      pool: 1,
    });

    return {
      sample,
    };
  },
  data() {
    return {
      isPlaying: false,
    };
  },
  components: {SmallButton, PlayPauseButton},
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
        this.$refs.button.progress = scale(startTime, finishTime, 0, 100, Date.now());
      }
    },
  },
});
</script>

<style scoped lang="scss">
@use "@/assets/css/main.scss";
@use "@/assets/css/_mixins" as m;
@use "@/assets/css/_shadows.scss" as shadows;

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
      filter: brightness(50%);
    }
  }
}

.playing {
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
  width: 100%;
  border-radius: 16px;
  transition-property: filter;
  transition-duration: inherit;
}

.main-info {
  @include m.title;
  @include m.title-effects;
}

.info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;

  z-index: 2;
}

.links {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 4px;

  height: fit-content;
}
</style>
