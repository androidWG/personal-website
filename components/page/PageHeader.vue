<script lang="ts">
import Vue from 'vue'
import LargeButton from '../button/LargeButton.vue';
import SmallButton from '../button/SmallButton.vue';
import Links from '../Links.vue';
import Separator from '../Separator.vue';
export default Vue.extend({
    name: "PageHeader",
    components: { LargeButton, SmallButton, Separator, Links },
    props: {
      selected: String
    }
})
</script>

<template>
    <div class="header">
        <div class="h-list">
            <img src="~/assets/svg/Logo.svg" style="width: 50px; height: 50px;" alt="Logo">
            <h1>sam rodrigues</h1>
        </div>
        <div class="h-list">
            <LargeButton :selected="selected==='home'" text="Home" link="/" icon="home" ref="home-btn"/>
            <Separator />
            <LargeButton :selected="selected==='music'" text="Music" link="/music" ref="music-btn"/>
            <LargeButton :selected="selected==='coding'" text="Coding" ref="coding-btn"/>
            <LargeButton :selected="selected==='design'" text="Design" ref="design-btn"/>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .header {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 64px 0 32px;
        gap: 16px;
        user-select: none;

        width: 100%;
    }
</style>
