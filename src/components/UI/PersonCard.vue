<template>
	<button class="card">
		<img class="card__img" :src="image" />
		<h4 class="card__title">{{ name }}</h4>
	</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "PersonCard",

	props: {
		card: {
			type: Number,
			required: true,
		},
	},

	computed: {
		name() {
			return this.cardNames[this.card];
		},
		image() {
			return `/src/assets/img/cards/card${this.card}.png`;
		},
	},

	setup() {
		const cardNames: Record<number, string> = {
			1: "Производитель",
			2: "Оптовая компания",
			3: "Магазин",
		};

		return {
			cardNames,
		};
	},
});
</script>

<style lang="scss" scoped>
@import "../../styles/mixins";

.card {
	--card-height: 573px;
	--title-height: 54px;

	// max-width: 483px;
	max-height: 573px;

	height: var(--card-height);

	aspect-ratio: 0.843;

	position: relative;
	// overflow: hidden;

	cursor: pointer;

	filter: grayscale(100%);

	clip-path: polygon(
		0 0,
		100% 0,
		100% 3%,
		calc(100% + 8px) calc(3% + 8px),
		calc(100% + 8px) 53%,
		100%, calc(53% + 8px),
		100% calc(var(--card-height) - var(--title-height)),
		88.81% 100%,
		0 100%
	);

	&::before {
		content: "";

		display: none;

		position: absolute;
		left: 0;
		bottom: 0;
		translate: -100% 0;

		height: 80%;
		width: 8px;
		clip-path: polygon(0 3%, 100% 0, 100% 100%, 0 97%);

		background-color: var(--color-light-red);
		box-shadow: 0 0 11px 0 var(--color-light-red);
	}

	&::after {
		content: "";

		display: none;

		position: absolute;
		right: 0;
		top: 3.85%;
		translate: 100% 0;

		height: 50%;
		width: 8px;
		clip-path: polygon(0 0, 100% 3%, 100% 97%, 0 100%);

		background-color: var(--color-light-red);
		box-shadow: 0 0 11px 0 var(--color-light-red);
	}

	&:hover,
	&:active,
	&:focus {
		scale: 1.165;
		filter: none;

		z-index: 10;

		&::before,
		&::after {
			display: block;
		}

		.card__img {
			border: var(--border);
			border-color: var(--color-light-red);
		}

		.card__title {
			@include red-alt-gradient-background;
			box-shadow: 0 0 11px 0 var(--color-light-red);
		}
	}

	&__img {
		width: 100%;
		height: 100%;
		object-fit: cover;
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

		&::after {
			content: '';

			position: absolute;
			right: 0;
			bottom: 0;
			translate: 50% 0;
			overflow: hidden;

			background-color: var(--color-alt-black);

			height: 100%;
			aspect-ratio: 1;

			transform: skew(-45deg);
		}
	}

	@include desktop-l {
		--card-height: clamp(375px, 48dvh, 573px);
	}

	@include desktop {
	}

	@include desktop-s {
	}

	@include tablet {
	}

	@include mobile {
	}
}
</style>
