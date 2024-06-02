<template>
	<section class="section">
		<img :src="company.image" alt="company image" class="section__img" />
		<div class="section__content content">
			<h4 class="content__title">{{ company.title }}</h4>
			<div class="content__opportunities">
				<OpportunityCard
					v-for="opportunity in company.opportunities"
					:key="opportunity.id"
					:opportunity="opportunity"
				/>
			</div>
			<a href="/edo">	
				<CustomButton class="content__button">Выбрать</CustomButton>
			</a>
		</div>

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
	gap: 24px;

	padding: 40px 195px 0;

	overflow: hidden;

	@include desktop {
		padding: 0 40px;
	}

	&__img {
		height: 944px;
		width: 600px;
		object-fit: contain;

		@include desktop {
			height: 606px;
		}
	}

	.content {
		display: flex;
		align-items: flex-start;
		flex-direction: column;

		@include desktop {
			padding-bottom: 40px;
        }

		&__title {
			font: {
				size: 100px;
				weight: 700;
			}
			line-height: 100px;

			color: var(--color-white);

			margin-bottom: 80px;


			@include desktop {
				font-size: 80px;
				margin-bottom: 40px;
			}
		}

		&__opportunities {
			display: grid;
			grid-template: auto / repeat(2, 1fr);
			gap: 24px;
		}

		&__button {
			font: {
				size: 18px;
			}

			margin-top: 40px;
			height: 50px;
			width: 241px;
		}
	}

	&__arrow {
		@include absolute-center;

		&--left {
			left: 195px;

			@include desktop {
                left: 40px;
            }
		}

		&--right {
			left: calc(100% - 195px);

			@include desktop {
				left: calc(100% - 40px);
			}
		}
	}
}
</style>
