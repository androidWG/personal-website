<template>
  <div class="skinny">
    <h1 id="hello">Hello!</h1>
    <p style="white-space: pre-line">
      {{ data.body }}
    </p>

    <div class="highlights">
      <div class="highlight-section">
        <h2>Latest Music</h2>
        <MusicItem
          id="music-item"
          :filename="data.latestMusic.filename"
          :title="data.latestMusic.title"
          :date="data.latestMusic.date"
          :links="data.latestMusic.links"
        />
      </div>
      <div class="highlight-section">
        <h2>My Apps</h2>
        <CodingItem
          class="coding-item"
          v-for="item in data.software"
          :key="item.name"
          :compact="true"
          :link="item.link"
          :title="item.name"
          :dateStart="item.dates.start"
          :dateEnd="item.dates.finish"
          :status="item.status"
        >
          {{ item.description }}
        </CodingItem>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import MusicItem from "~/components/items/MusicItem.vue";
import CodingItem from "~/components/items/CodingItem.vue";

export default Vue.extend({
  transition: 'home',
  components: {
    MusicItem,
    CodingItem,
  },
  async asyncData({ $content, params }) {
    let data = await $content("home", params.slug).fetch();
    return {
      data,
    };
  },
});
</script>

<style lang="scss">
@use "@/assets/css/main.scss";
@use "@/assets/css/breakpoints.scss";

.home-enter-active, .home-leave-active { transition: opacity .5s; }
.home-enter, .home-leave-active { opacity: 0; }

#hello {
  font-family: main.$obviously;
  font-style: normal;
  font-weight: 670;
  font-size: 48px;
  text-transform: uppercase;

  letter-spacing: normal;
  text-align: center;
}

.highlights {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: start;
  padding: 0;
  gap: 32px;

  @include breakpoints.q-medium {
    flex-direction: column;
    justify-content: start;
    align-items: center;

    #music-item {
      width: 60vw;
    }
  }
}

@include breakpoints.q-tiny {
  #music-item {
    width: 80vw;
  }
}

.highlight-section {
  display: flex;
  flex-direction: column;
  padding: 0;
  gap: 10px;
}
</style>
