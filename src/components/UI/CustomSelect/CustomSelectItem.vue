<template>
	<article class="item">
		<div class="item__content">
			<p class="item__title">«{{ company.name }}» ({{ company.address }})</p>
			<p class="item__text">ИНН {{ company.inn }}</p>
		</div>
		<img :src="company.image" class="item__img" />
	</article>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { SelectCompanyType } from "../../../types/SelectCompanyType.ts";

export default defineComponent({
	name: "CustomSelectItem",

	setup() {
		return {};
	},

	props: {
		company: {
			type: Object as () => SelectCompanyType,
			required: true,
		},
	},
});
</script>

<style lang="scss" scoped>
.item {
	display: flex;
	justify-content: space-between;
	gap: 16px;

    border-radius: var(--border-radius);

	&__content {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	&__title {
		color: var(--color-white);
	}

	&__text {
	}

	&__img {
		width: 91px;
		height: 41px;
		object-fit: contain;
	}
}
</style>
