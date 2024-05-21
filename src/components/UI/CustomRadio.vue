<template>
    <input :id="id" type="radio" :name="name" class="radio" />
    <label :for="id" class="radio__label"></label>
</template>

<script>
    import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'CustomRadio',

        props: {
            id: {
                type: String,
                required: true,
            },
            name: {
                type: String,
                required: true,
            }
        }
    });
</script>

<style lang="scss" scoped>
@import '../../styles/mixins';

.radio {
    @include visually-hidden;

    &:hover {
        & + .radio__label {
            border-color: var(--color-red);
        }
    }

    &:focus,
    &:active,
    &:checked {
        & + .radio__label {
            border-color: var(--color-dark-light-red);
        }
    }

    &__label {
        display: block;

        border: 1px solid var(--color-light-dark-gray);
        border-radius: var(--border-radius-circle);

        width: 18px;
        aspect-ratio: 1;

        transition-duration: var(--transition-duration);
    }
}
</style>