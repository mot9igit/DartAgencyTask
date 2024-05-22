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
	overflow: hidden;

	cursor: pointer;

	filter: grayscale(100%);

	clip-path: polygon(
		0 0,
		100% 0,
		100% calc(var(--card-height) - var(--title-height)),
		88.81% 100%,
		0 100%
	);

	&:hover,
	&:active,
	&:focus {
		scale: 1.165;
		filter: none;
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
