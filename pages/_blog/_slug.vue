<template>
  <div class="skinny">
    <div class="post-header">
      <Button icon="arrow-left" :small="true"></Button>
      <div class="title">
        <h2>{{ data.title }}</h2>
        <p class="date">{{ dateFormatted }}</p>
      </div>
      <div class="post-links">
        <div v-for="l in data.links">
          <Button
              class="full"
              :small="true"
              :icon="l.platform"
              :link="l.link"
              :text="l.name"
          ></Button>
          <Button
              class="compact"
              :small="true"
              :icon="l.platform"
              :link="l.link"
          ></Button>
        </div>
      </div>
    </div>
    <nuxt-content :document="data"></nuxt-content>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Button from "@/components/button/Button.vue";

export default Vue.extend({
  components: {Button},
  computed: {
    dateFormatted() {
      if (this.$data.data.date === "TBD") {
        return this.$data.data.date;
      } else {
        let parsedDate = new Date(this.$data.data.date);
        return parsedDate.toLocaleDateString("en-US", {
          month: "long",
          year: "numeric",
        });
      }
    }
  },
  async asyncData({$content, params}) {
    const data = await $content("blog", params.slug).fetch();
    return {data};
  },
  head() {
    return {
      title: `Sam Rodrigues | ${this.$data.data.title}`,
    };
  },
});
</script>

<style lang="scss">
@use "@/assets/css/main.scss";
@use "sass:color";

.post-header {
  width: auto;
  display: flex;
  flex-direction: row;
  gap: 16px;
  align-items: center;
}

.post-links {
  margin-left: auto;
}

.nuxt-content {
  width: 100%;

  a {
    transition: color 0.15s;
    color: main.$primary;
    text-decoration: none;

    &:hover {
      color: scale-color(main.$primary, $lightness: +25%);
      text-decoration: underline;
    }
  }

  code {
    font-size: small;
    font-family: main.$mono;
    color: main.$gray-very-light;
    text-shadow: none;
  }

  .language-text {
    border-radius: 16px;
    background: main.$gray-dark;
  }
}
</style>
