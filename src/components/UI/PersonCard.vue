<template>
	<div class="card-wrapper">
		<button class="card">
			<img class="card__img" :src="image" />
			<h4 class="card__title">{{ name }}</h4>
		</button>
		<div class="card__section-wrapper card__section-wrapper--left">
			<div class="card__section"></div>
		</div>
		<div class="card__section-wrapper card__section-wrapper--right">
			<div class="card__section"></div>
		</div>
	</div>
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

.card-wrapper {
	--card-height: 573px;
	--title-height: 54px;

	// max-width: 483px;
	max-height: 573px;

	height: var(--card-height);

	aspect-ratio: 0.843;

	position: relative;

	&:hover,
	&:active,
	&:focus {
		scale: 1.165;

		z-index: 10;

		.card {
			filter: none;

			.card__img {
				border: var(--border);
				border-color: var(--color-light-red);
			}

			.card__title {
				@include red-alt-gradient-background;
				box-shadow: 0 0 11px 0 var(--color-light-red);
			}
		}

		.card__section-wrapper {
			display: block;
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

.card {
	position: relative;

	height: 100%;
	width: 100%;

	cursor: pointer;
	filter: grayscale(100%);

	clip-path: polygon(
		0 0,
		100% 0,
		100% calc(100% - var(--title-height)),
		calc(100% - var(--title-height)) 100%,
		0 100%
	);

	&__section-wrapper {
		filter: drop-shadow(0 0 11px var(--color-light-red));

		display: none;
		position: absolute;

		&--left {
			left: 0;
			bottom: 0;
			translate: -95% 0;

			height: 80%;

			.card__section {
				clip-path: polygon(0 3%, 100% 0, 100% 100%, 0 97%);
			}
		}

		&--right {
			right: 0;
			top: 3.85%;
			translate: 95% 0;

			height: 50%;

			.card__section {
				clip-path: polygon(0 0, 100% 3%, 100% 97%, 0 100%);
			}
		}

		.card__section {
			content: "";

			width: 8px;
			height: 100%;
			background-color: var(--color-light-red);
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
	}
}
</style>
