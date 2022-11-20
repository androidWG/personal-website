<template>
  <div class="h-list">
    <SmallButton
      text="sam.roliveira@pm.me"
      icon="mail"
      link="mailto:sam.roliveira@pm.me"
    />
    <Separator />
    <SmallButton
      :rounded="true"
      icon="github"
      link="https://github.com/androidWG"
    />
    <SmallButton
      :rounded="true"
      icon="dribbble"
      link="https://dribbble.com/androidWG"
    />
    <SmallButton
      :rounded="true"
      icon="soundcloud"
      link="https://soundcloud.com/androidWG"
    />
    <SmallButton
      :rounded="true"
      icon="bandcamp"
      link="https://androidwg.bandcamp.com"
    />
    <SmallButton
      :rounded="true"
      icon="linkedin"
      link="https://linkedin.com/in/sam-rodrigues-o"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import SmallButton from "./button/SmallButton.vue";
import LargeButton from "./button/LargeButton.vue";
export default Vue.extend({
  components: {
    LargeButton,
    SmallButton,
  },
});
</script>
