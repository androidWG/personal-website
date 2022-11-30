<template>
  <a :href="link" class="container">
    <img
      v-if="!compact && image !== undefined"
      class="image"
      :src="`/projects/${image}`"
      alt="Project icon"
    />
    <div class="info">
      <h3 class="list-title">
        {{ title }}
      </h3>
      <div class="technologies compact">
        using
        <img
          v-for="t in using"
          :src="require(`@/assets/icons/white/${t}.svg`)"
          :alt="t + ' logo'"
        />
        for
        <img
          v-for="t in platforms"
          :src="require(`@/assets/icons/white/${t}.svg`)"
          :alt="t + ' logo'"
        />
      </div>
      <slot class="desc"/>
      <div class="more-info">
        <div class="more-info-list dates">
          {{ dateStart }}
          <div class="more-info-list" v-if="dateEnd !== undefined">
            <img
              src="@/assets/icons/white/arrow-right.svg"
              alt="Arrow pointing right"
            />
            {{ dateEnd }}
          </div>
        </div>
        <div class="more-info-list">
          <ProjectStatus :status="status"/>
        </div>
      </div>
    </div>
    <div class="technologies full" style="flex-direction: column">
      using
      <div class="technologies-icons">
        <img
          v-for="t in using"
          :src="require(`@/assets/icons/white/${t}.svg`)"
          :alt="t + ' logo'"
        />
      </div>
      for
      <div class="technologies-icons">
        <img
          v-for="t in platforms"
          :src="require(`@/assets/icons/white/${t}.svg`)"
          :alt="t + ' logo'"
        />
      </div>
    </div>
  </a>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    compact: Boolean,
    link: String,
    title: String,
    image: String,
    using: Array,
    platforms: Array,
    dateStart: [String, Number],
    dateEnd: [String, Number],
    status: String,
  },
});
</script>

<style lang="scss" scoped>
@use "@/assets/css/main.scss";
@use "@/assets/css/breakpoints.scss";
@use "@/assets/css/_mixins.scss" as m;
@use "@/assets/css/_shadows.scss" as shadows;

.container {
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0;
  gap: 1rem;

  user-select: none;
  cursor: pointer;

  @include m.title-effects;
}

.info {
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0;
  gap: 8px;
}

.list-title {
  @include m.title;
}

.image {
  height: 10vw;
  max-height: 128px;
  aspect-ratio: 1 / 1;
  flex-shrink: 0;

  @media(max-width: breakpoints.$mobile) {
    display: none;
  }
}

.info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  gap: 4px;
}

.dates {
  color: main.$gray-medium;

  img {
    filter: brightness(0) saturate(100%) invert(48%) sepia(7%) saturate(401%) hue-rotate(245deg) brightness(80%) contrast(84%);
  }
}

.technologies {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-direction: row;
  flex-shrink: 0;

  opacity: 70%;

  &.full {
    width: 64px;
  }
}

.technologies-icons {
  max-width: 46px;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: fit-content;
  gap: 6px;
}

.more-info {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  gap: 10px;
}

.more-info-list {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
</style>
