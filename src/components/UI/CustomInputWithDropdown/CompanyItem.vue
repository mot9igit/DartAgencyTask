<template>
	<article class="item">
		<h6 class="item__title">{{ company.value }}</h6>
		<div v-if="type === innEnum" class="item__content">
			<p class="item__text">ИНН: {{ company.data?.inn }}</p>
			<p class="item__text">КПП: {{ company.data?.kpp }}</p>
			<p class="item__text">ОГРН: {{ company.data?.ogrn }}</p>
		</div>
		<div v-if="type === bicEnum" class="item__content">
			<p class="item__text">БИК: {{ company.data?.bic }}</p>
			<p class="item__text">К/с: {{ company.data?.correspondent_account }}</p>
		</div>
	</article>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { CompanyType, SearchCompanyEnum } from "./CustomInputWithDropdown.vue";

export default defineComponent({
	setup() {
		const innEnum: SearchCompanyEnum = SearchCompanyEnum.INN;
		const bicEnum: SearchCompanyEnum = SearchCompanyEnum.BIC;

		return {
			innEnum,
			bicEnum
		};
	},
    props: {
        company: {
            type: Object as () => CompanyType,
            required: true,
        },
		type: {
			type: Object as () => SearchCompanyEnum,
			required: true
		}
    }
});
</script>

<style lang="scss" scoped>
.item {
    display: flex;
		flex-direction: column;
		gap: 5px;

	border-radius: var(--border-radius);

	&__title {
		font-size: 16px;
        margin-bottom: 10px;
	}

	&__text {
	}
}
</style>
