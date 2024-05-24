<template>
	<section class="section">
		<img :src="companyImage" alt="company image" class="section__img" />
		<div class="section__content content">
			<h4 class="content__title">{{ company.title }}</h4>
			<div class="content__opportunities">
				<OpportunityCard
					v-for="opportunity in company.opportunities"
					:key="opportunity.id"
					:opportunity="opportunity"
				/>
			</div>
			<CustomButton class="content__button">Выбрать</CustomButton>
		</div>

		<ArrowButton direction="left" class="section__arrow section__arrow--left" />
		<ArrowButton direction="right" class="section__arrow section__arrow--right" />
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
	},
    computed: {
        companyImage() {
            return `/img/cards/${this.company.image}`;
        }
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

	padding: 80px 195px 0;

	overflow: hidden;

	&__img {
		height: 944px;
		width: 600px;
		object-fit: contain;
	}

	.content {
		display: flex;
		align-items: flex-start;
        flex-direction: column;

		&__title {
			font: {
				size: 100px;
				weight: 700;
			}
			line-height: 100px;

			color: var(--color-white);

			margin-bottom: 80px;
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
		}

		&--right {
			left: calc(100% - 195px);
		}
	}
}
</style>
