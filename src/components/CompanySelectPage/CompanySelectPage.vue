<template>
	<section class="section">
		<div class="section__img-container">
			<img :src="company.image" alt="company image" class="section__img" />
		</div>
		<div class="section__content content">
			<h4 class="content__title">{{ company.title }}</h4>
			<div class="content__opportunities">
				<OpportunityCard
					v-for="opportunity in company.opportunities"
					:key="opportunity.id"
					:opportunity="opportunity"
				/>
			</div>
			<a href="/edo" class="hidden-mobile-tablet">
				<CustomButton class="content__button">Выбрать</CustomButton>
			</a>
		</div>

		<a href="/edo" class="visible-mobile-tablet">
			<CustomButton class="content__button content__button--mobile">Выбрать</CustomButton>
		</a>

		<ArrowButton
			direction="left"
			class="section__arrow section__arrow--left"
			@click="decreaseCompanyNumber"
		/>
		<ArrowButton
			direction="right"
			class="section__arrow section__arrow--right"
			@click="increaseCompanyNumber"
		/>
	</section>
</template>

<script lang="ts">
import { Ref, defineComponent, ref } from "vue";
import { CompanyType } from "../../types/SelectCompanyPageTypes";
import { companies } from "../../data/Companies";
import OpportunityCard from "./OpportunityCard.vue";
import CustomButton from "../UI/CustomButton.vue";
import ArrowButton from "../UI/ArrowButton.vue";

export default defineComponent({
	setup() {
		const company: Ref<CompanyType> = ref({
			id: 0,
			title: "",
			image: "",
			opportunities: [],
		});

		return {
			company,
		};
	},
	props: {
		cardNumber: {
			type: Number,
			required: true,
		},
	},
	methods: {
		getCompany(): CompanyType {
			const company: CompanyType | undefined = companies.find(
				(company) => company.id === this.cardNumber
			);
			return company ? company : { id: 0, title: "", image: "", opportunities: [] };
		},
		increaseCompanyNumber(): void {
			this.$emit(
				"setCompanyNumber",
				this.cardNumber + 1 > 3 ? this.cardNumber : this.cardNumber + 1
			);
		},
		decreaseCompanyNumber(): void {
			this.$emit(
				"setCompanyNumber",
				this.cardNumber - 1 < 1 ? this.cardNumber : this.cardNumber - 1
			);
		},
	},
	components: {
		OpportunityCard,
		CustomButton,
	},
	mounted() {
		this.company = this.getCompany();
	},
});
</script>

<style lang="scss" scoped>
@import "../../styles/mixins";

.section {
	@include flex-center;
	align-items: flex-end;
	gap: 24px;

	padding-top: 40px;
	padding-inline: 195px;

	height: 100dvh;
	width: 100vw;

	overflow: hidden;

	@include desktop-l {
		padding-top: clamp(0px, #{calc(40 * 100 / 1980)}vw, 40px);
		padding-inline: clamp(40px, #{calc(195 * 100 / 1980)}vw, 195px);
	}

	@include desktop {
		padding: 0 40px;
	}

	@include desktop-s {
		align-items: center;
	}

	@include tablet {
		padding-inline: clamp(20px, #{(40 * 100 / 768)}vw, 40px);
	}

	@include mobile-tablet {
        align-items: flex-end;
    }

	@include mobile {
		padding-inline: 20px;
	}

	&__img-container {
		position: relative;
		width: 100%;

		@include mobile-tablet {
			height: 310px;
			overflow: hidden;
		}
	}

	&__img {
		height: 944px;
		// width: 600px;
		object-fit: contain;

		@include desktop-l {
			height: clamp(606px, #{calc(606 * 100 / 1980)}vw, 944px);
		}

		@include desktop {
			height: 606px;
		}

		@include desktop-s {
			position: absolute;
			bottom: -120px;
			right: 0;
			// height: clamp(844px, #{calc(876 * 100 / 1024)}vw, 876px);
		}

		@include tablet {
			height: clamp(400px, #{calc(606 * 100 / 768)}vw, 606px);
			width: 372px;
			z-index: 10;
		}

		@include mobile {
			height: 400px;
			width: 100%;
		}
	}

	&__content,
	.content {
		display: flex;
		align-items: flex-start;
		flex-direction: column;

		width: 100%;

		@include desktop-l {
			padding-bottom: clamp(40px, #{calc(40 * 100 / 1980)}vw, 0px);
		}

		@include desktop {
			padding-bottom: 40px;
		}

		@include desktop-s {
			@include absolute-center;
			top: clamp(70px, #{calc(272 * 100 / 1024)}vw, 272px);
			translate: -50% 0;

			padding-inline: clamp(40px, #{calc(121 * 100 / 1024)}vw, 121px);
		}

		@include tablet {
			top: clamp(30px, #{calc(70 * 100 / 768)}vw, 70px);
			padding-inline: clamp(20px, #{calc(40 * 100 / 768)}vw, 40px);
		}

		@include mobile {
			top: 30px;
			padding-inline: 20px;
		}

		&__title {
			font: {
				size: 100px;
				weight: 700;
			}
			line-height: 100px;

			color: var(--color-white);

			margin-bottom: 80px;

			@include desktop-l {
				font-size: clamp(80px, #{calc(100 * 100 / 1980)}vw, 100px);
				margin-bottom: clamp(40px, #{calc(80 * 100 / 1980)}vw, 80px);
			}

			@include desktop {
				font-size: 80px;
				margin-bottom: 40px;
			}

			@include desktop-s {
				line-height: clamp(80px, #{calc(100 * 100 / 1980)}vw, 100px);
			}

			@include tablet {
				line-height: clamp(30px, #{calc(80 * 100 / 768)}vw, 80px);
				font-size: clamp(30px, #{calc(80 * 100 / 768)}vw, 80px);
				margin-bottom: clamp(16px, #{calc(80 * 100 / 768)}vw, 80px);
			}

			@include mobile {
				font-size: 30px;
				line-height: 30px;
				margin-bottom: 16px;
			}
		}

		&__opportunities {
			display: grid;
			grid-template: auto / repeat(2, 1fr);
			gap: 24px;

			@include desktop-s-tablet-average {
				grid-template: repeat(3, 1fr) / 1fr;
			}

			@include tablet {
				gap: clamp(8px, #{24 * 100 / 768}vw, 24px);
			}

			@include tablet-mobile-average {
				grid-template: 1fr / repeat(3, 1fr);
				max-width: 100%;
				overflow-x: scroll;
			}

			@include mobile {
				gap: 8px;
			}
		}
	}

	.content__button {
		font: {
			size: 18px;
		}

		margin-top: 40px;
		height: 50px;
		width: 241px;

		&--mobile {
			position: absolute;
			left: 50%;
			bottom: 20px;
			translate: -50% 0;
			width: calc(100% - 20px * 2);

			z-index: 10;
		}
	}

	&__arrow {
		position: absolute;
		top: 50%;
		translate: 0 -50%;

		&--left {
			left: 195px;

			@include desktop-l {
				left: clamp(40px, #{calc(195 * 100 / 1980)}vw, 195px);
			}

			@include desktop {
				left: 40px;
			}

			@include tablet {
				left: clamp(20px, #{calc(40 * 100 / 768)}vw, 40px);
			}

			@include mobile {
				left: 20px;
			}
		}

		&--right {
			right: 195px;

			@include desktop-l {
				right: clamp(40px, #{calc(195 * 100 / 1980)}vw, 195px);
			}

			@include desktop {
				right: 40px;
			}

			@include tablet {
				right: clamp(20px, #{calc(40 * 100 / 768)}vw, 40px);
			}

			@include mobile {
				right: 20px;
			}
		}
	}
}
</style>
