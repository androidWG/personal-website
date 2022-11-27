<template>
  <div class="h-list">
    <Button
      :small="true"
      text="sam.roliveira@pm.me"
      icon="mail"
      link="mailto:sam.roliveira@pm.me"
    />
    <Separator/>
    <Button
      :small="true"
      :rounded="true"
      icon="github"
      link="https://github.com/androidWG"
    />
    <Button
      :small="true"
      :rounded="true"
      icon="dribbble"
      link="https://dribbble.com/androidWG"
    />
    <Button
      :small="true"
      :rounded="true"
      icon="soundcloud"
      link="https://soundcloud.com/androidWG"
    />
    <Button
      :small="true"
      :rounded="true"
      icon="bandcamp"
      link="https://androidwg.bandcamp.com"
    />
    <Button
      :small="true"
      :rounded="true"
      icon="linkedin"
      link="https://linkedin.com/in/sam-rodrigues-o"
    />
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
