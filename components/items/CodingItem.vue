<template>
  <a :href="link" class="item">
    <img
      v-if="!compact"
      class="icon"
      src="/project-icons/discord-fm.png"
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
          <img
            src="@/assets/icons/arrow-right.svg"
            alt="Arrow pointing right"
          />
          {{ dateEnd }}
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
    title: String,
    dateStart: String,
    dateEnd: String,
    link: String,
    status: String
  },
});
</script>

<style lang="scss" scoped>
@use "@/assets/css/main.scss";
@use "@/assets/css/_mixins.scss" as m;
@use "@/assets/css/_shadows.scss" as shadows;

.item {
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
