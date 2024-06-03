<template>
	<div class="slider">
		<ArrowButton direction="left" class="slider__arrow slider__arrow--left" @click="prevCard" />

		<div class="slider__card-container card-container">
			<a href="/company-select">
				<PersonCard
					card="1"
					:class="`slider__card slider__card--${getCardStyles('1')}`"
					id="sliderCard1"
				/>
			</a>
			<a href="/company-select">
				<PersonCard
					card="2"
					:class="`slider__card slider__card--${getCardStyles('2')}`"
					id="sliderCard2"
				/>
			</a>
			<a href="/company-select">
				<PersonCard
					card="3"
					:class="`slider__card slider__card--${getCardStyles('3')}`"
					id="sliderCard3"
				/>
			</a>
		</div>

		<ArrowButton direction="right" class="slider__arrow slider__arrow--right" @click="nextCard" />
	</div>
</template>

<script lang="ts">
import { Ref, defineComponent, ref } from "vue";

enum CardSliderState {
	Last,
	Active,
	Next,
}

export default defineComponent({
	setup() {
		const sliderCardsStates: Ref<Record<string, CardSliderState>> = ref({
			"1": CardSliderState.Last,
			"2": CardSliderState.Active,
			"3": CardSliderState.Next,
		});

		const getCardStyles = (number: string): string => {
			const cardState: CardSliderState = sliderCardsStates.value[number];

			return cardState === CardSliderState.Last
				? "last"
				: cardState === CardSliderState.Active
				? "active"
				: cardState === CardSliderState.Next
				? "next"
				: "";
		};

		return {
			sliderCardsStates,
			getCardStyles,
		};
	},
	methods: {
		nextCard() {
			this.sliderCardsStates[1] = this.setNextState(this.sliderCardsStates[1]);
			this.sliderCardsStates[2] = this.setNextState(this.sliderCardsStates[2]);
			this.sliderCardsStates[3] = this.setNextState(this.sliderCardsStates[3]);

			this.$emit("setCompanyNumber", this.getCompanyNumber);
		},
		prevCard() {
			this.sliderCardsStates[1] = this.setPrevState(this.sliderCardsStates[1]);
			this.sliderCardsStates[2] = this.setPrevState(this.sliderCardsStates[2]);
			this.sliderCardsStates[3] = this.setPrevState(this.sliderCardsStates[3]);

			this.$emit("setCompanyNumber", this.getCompanyNumber);
		},
		setNextState(state: CardSliderState) {
			return state === CardSliderState.Active
				? CardSliderState.Last
				: state === CardSliderState.Last
				? CardSliderState.Next
				: CardSliderState.Active;
		},
		setPrevState(state: CardSliderState) {
			return state === CardSliderState.Last
				? CardSliderState.Active
				: state === CardSliderState.Active
				? CardSliderState.Next
				: CardSliderState.Last;
		},
	},
	computed: {
		getCompanyNumber() {
			if (this.sliderCardsStates[1] === CardSliderState.Active) return 1;
			if (this.sliderCardsStates[2] === CardSliderState.Active) return 2;
			if (this.sliderCardsStates[3] === CardSliderState.Active) return 3;
		},
	},
});
</script>

<style lang="scss">
@import "../styles/mixins";
@import "../styles/media";

.slider {
	@include flex-center;

	position: relative;
	width: 100%;
	height: 100%;
	overflow: hidden;

	padding-inline: 40px;

	&__card-container {
		@include flex-center;
		gap: 20px;

		height: 800px;
		width: 100%;
		position: relative;
	}

	&__card {
		position: absolute;
		top: 50%;
		translate: -50% -50%;

		width: 252px;
		height: 463px;

		transition-duration: var(--transition-duration);

		@include tablet {
			width: clamp(189px, #{calc(252 * 100 / 768)}vw, 252px);
			height: clamp(224px, #{calc(463 * 100 / 768)}vw, 463px);
		}

		@include mobile {
			width: 189px;
			height: 224px;
		}

		&--last,
		&--next {
			pointer-events: none;
		}

		&--last {
			left: 20%;

			@include tablet-mobile-average {
				left: 100%;
			}
		}

		&--active {
			left: 50%;

			width: 339px;
			height: 600px;

			z-index: 100;

			@include tablet {
				width: clamp(238px, #{calc(252 * 100 / 768)}vw, 252px);
				height: clamp(379px, #{calc(463 * 100 / 768)}vw, 463px);
			}

			@include mobile {
				width: 238px;
				height: 379px;
			}

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

		&--next {
			left: 80%;

			@include tablet-mobile-average {
				left: 100%;
			}
		}
	}

	&__arrow {
		position: absolute;
		top: 50%;
		translate: 0 -50%;

		z-index: 110 !important;

		&--left {
			left: 40px;
		}

		&--right {
			right: 40px;
		}
	}
}
</style>
