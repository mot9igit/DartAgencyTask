<template>
    <div class="home">
        <PersonCard card=1 />
        <PersonCard card=2 />
        <PersonCard card=3 />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PersonCard from './UI/PersonCard.vue';

export default defineComponent({
    name: 'Home',
});
</script>

<style lang="scss" scoped>
@import "../styles/mixins";
@import "../styles/media";

.home {
    @include adaptive-background;

    background-color: var(--color-alt-black);

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;

    height: 100dvh;
    width: 100vw;

    // padding-inline: 195px;
    padding-inline: clamp(40px, 10vw, 195px);

    @include desktop-l {
        gap: clamp(20px, #{calc(40 * 100 / 1920)}px, 40px);
    }

    @include desktop-s {
        gap: 20px;
    }
}
</style>