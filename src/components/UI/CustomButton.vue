<template>
	<button :class="colorTheme" ref="button">
		<div class="button__circle" ref="circle"></div>
		<div class="button__content">
			<slot></slot>
		</div>
	</button>
</template>

<script lang="ts">
import { Ref, defineComponent, ref } from "vue";

export default defineComponent({
	setup() {
		const button: Ref<HTMLButtonElement> = ref({} as HTMLButtonElement);
		const circle: Ref<HTMLDivElement> = ref({} as HTMLDivElement);

		return {
			button,
			circle
		}
	},
	name: "CustomButton",
	props: {
		id: {
			type: String,
			required: true,
		},
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
	mounted() {
		this.button.addEventListener('mousedown', (e: any) => {
			const rect: DOMRect = e.target.getBoundingClientRect();
			this.circle.style.top = `${e.clientY - rect.top}px`;
			this.circle.style.left = `${e.clientX - rect.left}px`;
		})
	}
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
	
	cursor: pointer;

	box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.2), 0 3px 1px 0 rgba(0, 0, 0, 0.12),
		0 2px 2px 0 rgba(0, 0, 0, 0.14);

	&--red {
		background-color: var(--color-red);
		color: var(--color-white);

		&:focus,
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

		&:focus,
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
			animation: circle 2s linear;
		}
	}

	&:disabled {
		filter: brightness(0.6);
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
			width: 200%;
		}
		90% {
			opacity: 1;
		}
		100% {
			width: 200%;
			opacity: 0;
		}
	}
}
</style>
