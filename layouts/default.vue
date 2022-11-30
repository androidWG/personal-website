<template>
  <div>
    <Header/>
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
      selected: Boolean
    }
  }
})
</script>
