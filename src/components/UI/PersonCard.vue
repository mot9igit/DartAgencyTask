<template>
    <div class="card">
        <img class="card__img" :src="image" />
        <h4 class="card__title">{{ name }}</h4>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'PersonCard',

        props: {
            card: {
                type: Number,
                required: true
            },
        },

        computed: {
            name() {
                return this.cardNames[this.card];
            },
            image() {
                return `/src/assets/img/cards/card${this.card}.png`;
            }
        },

        setup() {
            const cardNames: Record<number, string> = {
                1: 'Производитель',
                2: 'Оптовая компания',
                3: 'Магазин'
            };

            return {
                cardNames
            };
        },
    });
</script>

<style lang="scss" scoped>
@import "../../styles/mixins";

.card {
    max-width: 483px;
    max-height: 573px;
    
    filter: grayscale(100%);

    position: relative;
    overflow: hidden;

    &::after {
        content: '';

        background: url('../../assets/img/background/bg_1920.png') no-repeat center center / cover;

        position: absolute;
        bottom: 0;
        right: -27px;

        width: 54px;
        aspect-ratio: 1;

        transform: skew(-45deg);
    }

    &__title {
        @include gray-gradient-background;

        font: {
            weight: 700;
        }
        color: var(--color-white);

        display: flex;
        justify-content: center;
        align-items: center;

        position: absolute;
        bottom: 0;

        width: 100%;
        height: 54px;
    }
}
</style>