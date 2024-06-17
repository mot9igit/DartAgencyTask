<template>
    <p class="text">
        <slot></slot>
        
        <div class="text__hint">
            <p v-for="paragraph in props.paragraphes" class="text__hint-text">
                <span class="text__hint-text text__hint-text--white">{{ paragraph.title }}</span>
                {{ paragraph.text }}
            </p>
        </div>
    </p>
</template>

<script lang="ts">
export default defineComponent({
    name: "TextWithHint",
})
</script>
<script setup lang="ts">
import { defineComponent, defineProps } from "vue";
import { HintTextType } from "../../types/HintText";

const props = defineProps({
    paragraphes: {
        type: Object as () => HintTextType[],
        required: true
    }
})
</script>

<style lang="scss" scoped>
@import "../../styles/mixins";

.text {
    font-size: 14px;
    color: var(--color-light-dark-gray);
    text-decoration: underline;

    position: relative;

    cursor: pointer;

    &:not(:hover) {
        .text__hint {
            @include visually-hidden;
        }
    }

    &__hint {
        display: flex;
        flex-direction: column;
        gap: 4px;

        position: absolute;
        left: 0;
        bottom: -8px;
        translate: 0 100%;

        background-color: var(--color-black);
        border-radius: var(--border-radius-very-small);
        padding: 24px;

        width: 300px;

        cursor: default;
    }

    &__hint-text {
        font-size: 14px;
        color: var(--color-middle-gray);
        line-height: 18px;

        &--white {
            color: var(--color-white);
        }
    }
}
</style>