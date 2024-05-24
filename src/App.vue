<template>
	<main class="main">
		<Home v-if="location === '/'" @setCompanyNumber="setCompanyNumber" />
		<Test v-if="location === '/test'" />
		<CompanySelectPage
			v-if="location === '/company-select' && companyNumber !== 0"
			:cardNumber="companyNumber"
		/>
	</main>
</template>

<script lang="ts">
import { Ref, defineComponent, ref } from "vue";

import Home from "./views/Home.vue";
import Test from "./views/Test.vue";
import CompanySelectPage from "./components/CompanySelectPage/CompanySelectPage.vue";

export default defineComponent({
	setup() {
		const location = window.location.pathname;

		const companyNumber: Ref<number> = ref(0);

		return {
			location,
			companyNumber,
		};
	},

	components: {
		Home,
		Test,
		CompanySelectPage,
	},
	methods: {
		setCompanyNumber(value: number) {
			this.companyNumber = value;
		},
	},
});
</script>

<style lang="scss" scoped>
@import "./styles/mixins";

.main {
	@include adaptive-background;
	@include flex-center;
	
	background-color: var(--color-alt-black);

	width: 100vw;
	height: 100dvh;
}
</style>
