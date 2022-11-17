<template>
  <div class="play-icon">
    <img v-if="!isPlaying" src="@/assets/icons/play.svg" alt="Play sample" />
    <div v-if="isPlaying" class="stop-btn">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        role="graphic"
      >
        <circle
          :cx="ringSize"
          :cy="ringSize"
          :r="ringSize - ringStrokeSize"
        ></circle>
        <circle
          :cx="ringSize"
          :cy="ringSize"
          :r="ringSize - ringStrokeSize"
          id="pct-ind"
          ref="indicator"
          :style="`
            stroke-dashoffset: ${(1 - progress / 100) * (2 * (22 / 7) * ringSize - ringStrokeSize)};
            stroke-dasharray: ${( 2 * (22 / 7) * ringSize )};
          `"
        ></circle>
      </svg>
      <img
        src="@/assets/icons/stop.svg"
        alt="Stop playing sample"
        style="width: 70%; height: 70%"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      isPlaying: false,
      progress: 0,
    };
  },
  props: {
    ringStrokeSize: {
      type: Number,
      default: 6,
    },
    ringSize: {
      type: Number,
      default: 32,
    },
  },
});
</script>

<style lang="scss">
@use "@/assets/css/main.scss";

.play-icon {
  width: 64px;
  height: 64px;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  svg {
    transform: rotate(270deg);
  }

  circle {
    stroke-width: 6;
    fill: none;
  }
  circle:nth-of-type(1) {
    stroke: main.$gray-medium;
  }
  circle:nth-of-type(2) {
    transition: stroke-dashoffset 0.3s linear;

    stroke: main.$gray-very-light;
    stroke-dashoffset: 0;
  }
}
</style>
