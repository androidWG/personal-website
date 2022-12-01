<template>
  <div style="overflow: clip">
    <Header :selected="$route.name"/>
    <div class="scroll" :class="{ skinny: skinny }">
      <div class="section">
        <Nuxt/>
      </div>
      <Footer/>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Header from "~/components/page/Header.vue";
import Footer from "~/components/page/Footer.vue";

export default Vue.extend({
  components: {Header, Footer},
  data() {
    return {
      skinny: false,
    };
  },
});
</script>

<style scoped lang="scss">
@use "@/assets/css/breakpoints.scss";

.scroll {
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  gap: 32px;
}

.section {
  width: fit-content;
  margin: 0 96px;

  @media(max-width: breakpoints.$medium) {
    margin: 0 64px;
  }

  @media(max-width: breakpoints.$small) {
    margin: 0 48px;
  }
}
</style>
