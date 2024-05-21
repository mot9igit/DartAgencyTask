<template>
	<button :class="colorTheme">
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

	props: {
		theme: {
			type: String,
			default: "red",
		},
	},
	computed: {
		colorTheme() {
			return {
				button: true,
				"button--red": this.theme === "red",
				"button--black": this.theme === "black",
			};
		},
	},
});
</script>

<style lang="scss" scoped>
@import "../../styles/_mixins.scss";

.button {
	height: 44px;

	border-radius: var(--border-radius);

	transition-duration: var(--transition-duration);
	position: relative;
	overflow: hidden;

	box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.2), 0 3px 1px 0 rgba(0, 0, 0, 0.12),
		0 2px 2px 0 rgba(0, 0, 0, 0.14);

	&--red {
		background-color: var(--color-red);
		color: var(--color-white);

		&:hover {
			background-color: var(--color-dark-light-red);
		}

		.button__circle {
			background-color: var(--color-dark-red);
		}
	}

	&--black {
		background-color: var(--color-black);
		color: var(--color-white);

		&:hover {
			background-color: var(--color-white);
			color: var(--color-black);
		}

		.button__circle {
			background-color: var(--color-light-gray);
		}
	}

	&:active {
		.button__circle {
			animation: circle 1.1s linear;
		}
	}

	&__circle {
		@include absolute-center;

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
