<template>
	<article class="item">
		<h6 class="item__title">{{ company.value }}</h6>
		<p class="item__text">ИНН: {{ company.data.inn }}</p>
		<p class="item__text">КПП: {{ company.data.kpp }}</p>
		<p class="item__text">ОГРН: {{ company.data.ogrn }}</p>
	</article>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { CompanyType } from "./CustomInputWithDropdown.vue";

export default defineComponent({
	setup() {
		return {};
	},
    props: {
        company: {
            type: Object as () => CompanyType,
            required: true,
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
