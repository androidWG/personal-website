<template>
    <div class="links h-list">
        <Button
            :small="true"
            text="me@annarodrigues.net"
            icon="mail"
            link="mailto:me@annarodrigues.net"
        />
        <div class="sub">
            <Button
                :small="true"
                icon="github"
                link="https://github.com/androidWG"
            />
            <Button
                :small="true"
                icon="dribbble"
                link="https://dribbble.com/androidWG"
            />
            <Button
                :small="true"
                icon="soundcloud"
                link="https://soundcloud.com/androidWG"
            />
            <Button
                :small="true"
                icon="bandcamp"
                link="https://androidwg.bandcamp.com"
            />
            <Button
                :small="true"
                icon="linkedin"
                link="https://www.linkedin.com/in/anna-roliveira/"
            />
        </div>
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

<style scoped lang="scss">
@use "@/assets/css/main.scss";
@use "@/assets/css/breakpoints.scss";

.links {
    flex-wrap: wrap;
    width: fit-content;
    padding: 0 32px;

    @include breakpoints.q-small {
        gap: 8px;
    }
}

.sub {
    display: flex;
    width: fit-content;
    gap: 32px;

    @include breakpoints.q-small {
        gap: 8px;
    }
}
</style>
