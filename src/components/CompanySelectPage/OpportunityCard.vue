<template>
	<article class="card">
		<h5 class="card__title">{{ opportunity.title }}</h5>
		<p class="card__text">{{ opportunity.text }}</p>
	</article>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { OpportunityCardType } from "../../types/SelectCompanyPageTypes";

export default defineComponent({
	setup() {
		return {};
	},
	props: {
		opportunity: {
			type: Object as () => OpportunityCardType,
			required: true,
		},
	},
});
</script>

<style lang="scss" scoped>
.card {
	display: flex;
	flex-direction: column;
	gap: 16px;

	border: var(--border);
	border-color: var(--color-transparent-35-white);
	background-color: var(--color-transparent-5-white);

	padding: 32px;

	width: 364px;
	height: 166px;
	clip-path: polygon(0 0, 100% 0, 100% 72.73%, 95.07% 100%, 0 100%);

	&::after {
		content: "";

		position: absolute;
		right: -11.5px;
		bottom: 0;

		border: var(--border);
		border-color: var(--color-transparent-35-white);
		background-color: var(--color-transparent-35-white);

		width: 21.1px;
		height: 18.8px;

		transform: skew(-47.8deg);
	}

	&__title {
		font: {
			size: 22px;
			weight: 500;
		}
		line-height: 22px;
		letter-spacing: 0.5px;

		color: var(--color-light-red);

		margin-left: 28px;
		position: relative;

		&::before {
			@include absolute-center;

			content: "";

			left: -16px;

			width: 12px;
			aspect-ratio: 1;

			box-shadow: 0 0 10px 0 var(--color-light-red);
			rotate: 45deg;
		}
	}

	&__text {
		font: {
			size: 16px;
			weight: 400;
		}
		line-height: 22px;
		letter-spacing: 0.5px;
	}
}
</style>
