<template>
  <div class="play-icon">
    <img v-if="!isPlaying" src="@/assets/icons/play.svg" alt="Play sample" />
    <img v-if="isPlaying" src="@/assets/icons/stop.svg" alt="Stop playing sample" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    data() {
        return {
            isPlaying: false
        }
    }
})
</script>

<style>
.play-icon {
    width: 64px;
    height: 64px;
    position: relative;
}
</style>