<template>
    <article class="item">
        <p class="item__text">{{ address.value }}</p>
    </article>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { AddressType } from './AddressSelect.vue';

export default defineComponent({
    setup () {      

        return {}
    },
    name: "AddressSelectItem",
    props: {
        address: {
            type: Object as () => AddressType,
            required: true
        }
    }
})
</script>

<style lang="scss" scoped>
.item {
    display: flex;
    flex-direction: column;
    gap: 10px;

    border-radius: var(--border-radius);

    &__text {
        line-height: normal;
        color: var(--color-white);
    }
}
</style>