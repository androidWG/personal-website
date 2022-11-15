<template>
    <div>
        <h1 id="hello">Hello!</h1>
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
    }
</style>