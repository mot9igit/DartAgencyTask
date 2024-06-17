<template>
    <p class="text">
        <slot></slot>
        
    </p>
</template>

<script lang="ts">
export default defineComponent({
    name: "TextWithHint",
})
</script>
<script setup lang="ts">
import { defineComponent, defineProps } from "vue";

const props = defineProps({
    parapgraphes: {
        type: String,
        required: true
    }
})
</script>

<style lang="scss" scoped>
.text {
    font-size: 14px;
    color: var(--color-light-dark-gray);
    text-decoration: underline;

    position: relative;

    cursor: pointer;
}
</style>