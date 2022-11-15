<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    props: {
        link: String,
        text: String,
        icon: String
    }
})
</script>

<template>
<a class="large button" :href="link">
    <img v-if="icon !== undefined" class="icon" :src="require(`@/assets/icons/${icon}.svg`)" alt="">
    <p v-if="text !== undefined" class="text">{{text}}</p>
</a>
</template>

<style lang="scss" src="./button.scss"></style>