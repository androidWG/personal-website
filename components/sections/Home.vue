<template>
    <div class="skinny">
        <h1 id="hello">Hello!</h1>
        <p class="body">
            I’m Sam Rodrigues, also know online as androidWG. I make many things but mostly music, apps, websites and UI/UX designs. You can find almost all of my recent work on this website.
            <br>
            Brazilian born but living in Montréal, Canada since Feburary 2022, I’ve been programming since 2013, designing since 2018 and making music since 2020. I love using my projects to learn new technologies, techniques, platforms, and of course ideas, and my overall work extends to many more projects that didn’t pass the trial phase.
        </p>

        <div class="highlights">
            <div class="highlight-section">
                <h2>Latest Music</h2>
            </div>
            <div class="highlight-section" style="flex-grow: 1">
                <h2>My Apps</h2>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    
})
</script>

<style lang="scss">
    @use '@/assets/css/main.scss';

    #hello {
        font-family: main.$obviously;
        font-style: normal;
        font-weight: 670;
        font-size: 64px;
        line-height: 100px;
        text-transform: uppercase;

        letter-spacing: normal;
        text-align: center;
    }

    .body {
        font-size: 20px;
        line-height: 24px;
        white-space: pre-line;
        color: main.$gray-light;
    }

    .highlights {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        padding: 0px;
        gap: 32px;
    }

    .highlight-section {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 0px;
        gap: 10px;
    }
</style>