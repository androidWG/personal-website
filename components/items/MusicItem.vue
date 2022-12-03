<template>
  <div class="item">
    <div class="clean cover" :class="{ playing: isPlaying }" @click="togglePlay">
      <img
        class="cover-img"
        :src="`/covers/${filename}.jpg`"
        alt="Album Cover"
      />
      <div class="cover-btn">
        <PlayPauseButton style="margin: 0 auto" ref="button"/>
        <p id="play-text">
          {{ isPlaying || isPlaying ? "stop playing" : "play sample" }}
        </p>
      </div>
    </div>
    <div class="info">
      <a :href="onClick" class="main-info">
        <h3 class="list-title">{{ title }}</h3>
        <p class="date">{{ dateFormatted }}</p>
      </a>
      <div class="links">
        <Button
          v-for="(l, index) in linksTruncated.primary"
          :small="true"
          :icon="l.platform"
          :link="l.link"
          :key="index"
          :rounded="true"
        />
        <DropdownButton
          v-if="linksTruncated.extra.length !== 0"
          style="width: 100%"
          :small="true"
          icon="add"
          text="More"
          :dropdown-list="linksTruncated.extra"
        >
        </DropdownButton>
      </div>
    </div>
  </div>
</template>

<script>
import DropdownButton from "~/components/button/DropdownButton";
import Vue from "vue";
import {Howl, Howler} from "howler";
import Button from "../button/Button.vue";
import PlayPauseButton from "../button/PlayPause.vue";
import {map} from "../math.js";

const smallIconsAmount = 3;
let timerID = null;

export default Vue.extend({
  props: {
    filename: String,
    title: String,
    date: String,
    onClick: String,
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
  computed: {
    dateFormatted() {
      if (this.date === "TBD") {
        return this.date;
      } else {
        let parsedDate = new Date(this.date);
        return parsedDate.toLocaleDateString("en-US", {
          month: "long",
          year: "numeric",
        });
      }
    },
    linksTruncated() {
      let primary = [];
      let extra = [];
      if (this.links !== undefined) {
        primary = this.links.slice(0, smallIconsAmount);
        extra = this.links.slice(smallIconsAmount + 1, this.links.length);

        if (extra.length > 0) {
          for (let i = 0; i < extra.length; i++) {
            let l = extra[i];
            let text = l.platform.charAt(0).toUpperCase() + l.platform.slice(1);
            if (l.name !== undefined) {
              text = l.name;
            }
            extra[i] = {icon: l.platform, text: text, link: l.link};
          }
        }
      }

      return {primary: primary, extra: extra};
    },
  },
  components: {DropdownButton, Button, PlayPauseButton},
  methods: {
    togglePlay() {
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
        this.$refs.button.progress = map(
          startTime,
          finishTime,
          0,
          100,
          Date.now()
        );
      }
    },
  },
});
</script>

<style scoped lang="scss">
@use "@/assets/css/main.scss";
@use "@/assets/css/_mixins" as m;
@use "@/assets/css/_shadows.scss" as shadows;

.item {
  width: 33vw;
  max-width: 400px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
}

.cover {
  width: 100%;
  aspect-ratio: 1 / 1;
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

  min-height: 56px;
  height: fit-content;
}
</style>
