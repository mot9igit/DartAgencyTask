<template>
    <div class="container">
        <img src="/img/fog/fog1.png" alt="" class="container__img">
        <img src="/img/fog/fog2.png" alt="" class="container__img">
        <img src="/img/fog/fog3.png" alt="" class="container__img">
        <img src="/img/fog/fog5.png" alt="" class="container__img">
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "Fog",
})
</script>

<style scoped lang="scss">
@import "../../styles/mixins";

.container {
    position: relative;
    pointer-events: none;

    height: 100dvh;
    width: 100vw;

    z-index: 1000;

    &__img {
        position: absolute;
        bottom: 0;
        left: 50%;
        translate: -50% 0;

        object-fit: cover;
        min-width: 100%;

        animation-name: fog-effect;
        animation-iteration-count: infinite;
        animation-timing-function: ease-in;

        &:nth-child(1n) {
            animation-duration: 2s;
        }

        &:nth-child(2n) {
            animation-duration: 4s;
        }

        &:nth-child(3n) {
            animation-duration: 6s;
        }

        &:nth-child(4n) {
            animation-duration: 12s;
        }
    }
}

@keyframes fog-effect {
    0% {
        opacity: 0;
        scale: 1;
    }
    25% {
        opacity: 0.3;
    }
    75% {
        opacity: 0.3;
    }
    100% {
        scale: 3;
        opacity: 0;
    }
}
</style>