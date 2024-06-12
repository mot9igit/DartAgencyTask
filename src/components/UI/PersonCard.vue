<template>
	<div class="card-wrapper" unselectable="on">
		<button class="card" type="button" @click="setCompanyNumber">
			<img class="card__img" :src="image" />
			<CardTitle class="card__title">{{ name }}</CardTitle>
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
	props: {
		card: {
			type: Number,
			required: true,
		},
	},
	methods: {
		setCompanyNumber() {
			this.$emit("setCompanyNumber", this.card);
		},
	},
	computed: {
		name() {
			return this.cardNames[this.card];
		},
		image() {
			return `/img/cards/card${this.card}.png`;
		},
	},
});
</script>

<style lang="scss">
@import "../../styles/mixins";

.card-wrapper {
	--can-scale: true;

	--card-height: 573px;
	--title-height: 54px;

	// max-width: 483px;
	max-height: 573px;
	height: var(--card-height);

	aspect-ratio: 0.843;

	position: relative;
	transition-duration: var(--transition-duration);

	@include desktop-l {
		--card-height: clamp(375px, #{calc((375 + 573) / 2 * 100 / 1980)}vw, 573px);
		--title-height: clamp(35px, #{calc(54 * 100 / 1980)}vw, 54px);
	}

	@include desktop {
		--card-height: 375px;
		--title-height: 35px;
	}

	@include tablet {
		--title-height: clamp(25px, #{calc(35 * 100 / 1280)}vw, 35px);
	}

	@include mobile {
		--title-height: 25px;
	}

	&:hover,
	&:active,
	&:focus {
		@if(var(--can-scale) == true) {
			scale: 1.165;
		}

		z-index: 100;

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
			left: -8px;
			bottom: 0;
			translate: 10% 0;

			height: 80%;

			.card__section {
				clip-path: polygon(0 3%, 100% 0, 100% 100%, 0 97%);
			}
		}

		&--right {
			right: -8px;
			top: 3.85%;
			translate: -10% 0;

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

		-moz-user-select: none;
		-webkit-user-select: none;
		user-select: none;
		pointer-events: none;
	}

	&__title {
		@include tablet {
			font-size: clamp(19px, #{calc(22 * 100 / 768)}vw, 22px) !important;
		}

		@include mobile {
			font-size: 19px !important;
		}
	}
}
</style>
