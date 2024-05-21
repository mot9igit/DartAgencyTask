<template>
	<button class="button">
        <div class="button__circle"></div>
		<div class="button__content">
            <slot></slot>
        </div>
	</button>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
	name: "CustomButton",
});
</script>

<style lang="scss" scoped>
@import "../../styles/_mixins.scss";

.button {
	height: 44px;

	background-color: var(--color-red);
	border-radius: var(--border-radius);
	color: var(--color-white);

	transition-duration: var(--transition-duration);
    position: relative;
	overflow: hidden;

	&:hover {
		background-color: var(--color-dark-light-red);
	}

	&:active {
		.button__circle {
			animation: circle 1.1s linear;
		}
	}

	&__circle {
        @include absolute-center;

		background-color: var(--color-dark-red);
		border-radius: var(--border-radius-circle);

		width: 0;
		aspect-ratio: 1;

        z-index: 1;
	}

    &__content {
        position: relative;
        z-index: 10;
    }

	@keyframes circle {
		0% {
			width: 0;
            opacity: 1;
		}
		75% {
			width: 100%;
		}
        90% {
            opacity: 1;
        }
        100% {
            width: 100%;
            opacity: 0;
        }
	}
}
</style>
