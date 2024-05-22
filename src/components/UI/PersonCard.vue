<template>
    <div class="card">
        <img class="card__img" :src="`../../assets/img/cards/card${card}.png`" />
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

        setup() {
            const cardNames = '';

            return {};
        }
    });
</script>

<style lang="scss" scoped>

</style>