<script lang="ts">
import Vue from 'vue'
import LargeButton from '../button/Large.vue';
import SmallButton from '../button/Small.vue';
import Links from '../Links.vue';
import Separator from '../Separator.vue';
export default Vue.extend({
    name: "PageHeader",
    components: { LargeButton, SmallButton, Separator, Links }
})
</script>

<template>
    <div class="page-header">
        <div class="h-list">
            <img src="~/assets/svg/Logo.svg" style="width: 50px; height: 50px;" alt="Logo">
            <h1>sam rodrigues</h1>
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
    .page-header {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 64px 0 32px;
        gap: 16px;
        user-select: none;

        width: 100%;
    }
</style>
