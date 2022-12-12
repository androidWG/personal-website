<template>
  <div class="links h-list">
    <Button
      :small="true"
      text="sam.roliveira@pm.me"
      icon="mail"
      link="mailto:sam.roliveira@pm.me"
    />
    <div class="sub">
      <Button :small="true" icon="github" link="https://github.com/androidWG" />
      <Button
        :small="true"
        icon="dribbble"
        link="https://dribbble.com/androidWG"
      />
      <Button
        :small="true"
        icon="soundcloud"
        link="https://soundcloud.com/androidWG"
      />
      <Button
        :small="true"
        icon="bandcamp"
        link="https://androidwg.bandcamp.com"
      />
      <Button
        :small="true"
        icon="linkedin"
        link="https://linkedin.com/in/sam-rodrigues-o"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Button from "./button/Button.vue";

export default Vue.extend({
  components: {
    Button,
  },
});
</script>

<style scoped lang="scss">
@use "@/assets/css/main.scss";
@use "@/assets/css/breakpoints.scss";

.links {
  flex-wrap: wrap;
  width: fit-content;
  padding: 0 32px;

  @include breakpoints.q-small {
    gap: 8px;
  }
}

.sub {
  display: flex;
  width: fit-content;
  gap: 32px;

  @include breakpoints.q-small {
    gap: 8px;
  }
}
</style>
