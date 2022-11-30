<template>
  <a :href="link" class="container">
    <img
      v-if="!compact && image !== undefined"
      class="icon"
      :src="`/projects/${image}`"
      alt="Project icon"
    />
    <div class="info">
      <h3 class="list-title">
        {{ title }}
      </h3>
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
    <div class="icons"></div>
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
    for: Array,
    dateStart: [String, Number],
    dateEnd: [String, Number],
    status: String
  },
});
</script>

<style lang="scss" scoped>
@use "@/assets/css/main.scss";
@use "@/assets/css/_mixins.scss" as m;
@use "@/assets/css/_shadows.scss" as shadows;

.container {
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 0;
  gap: 32px;

  user-select: none;
  cursor: pointer;

  @include m.title-effects;
}

.info {
  width: 100%;
}

.list-title {
  @include m.title;
}

.icon {
  height: 128px;
  aspect-ratio: 1 / 1;
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
