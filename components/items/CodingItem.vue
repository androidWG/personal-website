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
      <div v-if="!compact" class="technologies compact">
        using
        <div class="technologies-icons">
          <img
            class="technology"
            v-for="t in using"
            :src="require(`@/assets/icons/white/${t}.svg`)"
            :alt="t + ' logo'"
          />
        </div>
        for
        <div class="technologies-icons">
          <img
            class="technology"
            v-for="t in platforms"
            :src="require(`@/assets/icons/white/${t}.svg`)"
            :alt="t + ' logo'"
          />
        </div>
      </div>
      <slot class="desc" />
      <div class="more-info">
        <div class="more-info-list dates">
          {{ dateStart }}
          <div class="more-info-list" v-if="dateEnd !== undefined">
            <img
              src="@/assets/icons/white/arrow-right.svg"
              alt="Arrow pointing right"
              style="height: 16px"
            />
            {{ dateEnd }}
          </div>
        </div>
        <div class="more-info-list">
          <ProjectStatus :status="status" />
        </div>
      </div>
    </div>
    <div v-if="!compact" class="technologies full">
      using
      <div class="technologies-icons">
        <img
          class="technology"
          v-for="t in using"
          :src="require(`@/assets/icons/white/${t}.svg`)"
          :alt="t + ' logo'"
        />
      </div>
      for
      <div class="technologies-icons">
        <img
          class="technology"
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
  text-decoration: none;
  color: main.$gray-very-light;

  user-select: none;
  cursor: pointer;

  @include m.title-effects;
}

.info {
  width: 100%;

  display: flex;
  flex-direction: column;
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

  @include breakpoints.q-small {
    display: none;
  }
}

.dates {
  color: main.$gray-medium;

  img {
    filter: brightness(0) saturate(100%) invert(48%) sepia(7%) saturate(401%)
      hue-rotate(245deg) brightness(80%) contrast(84%);
  }
}

$icon-size: 16px;

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
    flex-direction: column;
  }
}

.technologies-icons {
  $gap: 4px;
  max-width: $icon-size * 2 + $gap;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  height: fit-content;
  gap: $gap;

  @include breakpoints.q-small {
    max-width: fit-content;
  }
}

.technology {
  width: $icon-size;
  aspect-ratio: 1/1;
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
