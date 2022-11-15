<script lang="ts">
import Vue from 'vue'
import LargeButton from './button/Large.vue';
import SmallButton from './button/Small.vue';
import Separator from './Separator.vue';
export default Vue.extend({
    name: "PageHeader",
    components: { LargeButton, SmallButton, Separator }
})
</script>

<template>
    <div class="page-header">
        <div class="h-list">
            <img src="@/assets/svg/Logo.svg" style="width: 50px; height: 50px;" alt="Logo">
            <h1>sam rodrigues</h1>
        </div>
        <div class="h-list">
            <SmallButton text="sam.roliveira@pm.me" icon="mail" link="mailto:sam.roliveira@pm.me" />
            <Separator />
            <SmallButton :rounded="true" icon="github" link="https://github.com/androidWG"/>
            <SmallButton :rounded="true" icon="dribbble" link="https://dribbble.com/androidWG"/>
            <SmallButton :rounded="true" icon="soundcloud" link="https://soundcloud.com/androidWG"/>
            <SmallButton :rounded="true" icon="bandcamp" link="https://androidwg.bandcamp.com"/>
            <SmallButton :rounded="true" icon="linkedin" link="https://linkedin.com/in/sam-rodrigues-o"/>
        </div>
        <div class="h-list">
            <LargeButton text="Home" icon="home"/>
            <Separator />
            <LargeButton text="Music"/>
            <LargeButton text="Coding"/>
            <LargeButton text="Design"/>
        </div>
    </div>
</template>

<style lang="scss">
    .h-list {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 0px;
        gap: 32px;
    }

    .page-header {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 64px 0px 32px;
        gap: 16px;
        user-select: none;

        width: 100%;
    }
</style>