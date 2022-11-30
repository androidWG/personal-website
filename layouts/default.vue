<template>
  <div>
    <Header :selected="$route.name"/>
    <div class="scroll">
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
      selected: "home"
    }
  },
})
</script>

<style scoped>
.scroll {
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  gap: 32px;
}

.skinny {
  max-width: 768px;
}

.section {
  width: fit-content;
  margin: 0 96px;
}
</style>
