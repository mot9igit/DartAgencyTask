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

.home {
    @include adaptive-background;

    background-color: var(--color-alt-black);

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;

    height: 100dvh;
    width: 100vw;

    padding-inline: 195px;
}
</style>