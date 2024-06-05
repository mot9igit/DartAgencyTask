<template>
	<button class="button">
		<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path class="button__cross"
				d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"
				fill="#C8C8C8"
			/>
		</svg>
		<slot></slot>
	</button>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
	name: "CloseButton",
});
</script>

<style lang="scss" scoped>
.button {
    background-color: transparent;
    
    width: 14px;
    aspect-ratio: 1;

    cursor: pointer;

    &:hover {
        .button__cross {
            fill: var(--color-red);
        }
    }

    &:focus,
    &:active {
        .button__cross {
            fill: var(--color-dark-light-red);
        }
    }

    &__cross {
        transition-duration: var(--transition-duration);
    }
}
</style>
