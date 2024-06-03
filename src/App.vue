<template>
	<main class="main">
		<Home v-if="location === '/'" @setCompanyNumber="setCompanyNumber" />
		<Test v-if="location === '/test'" />
		<CompanySelectPage
			v-if="location === '/company-select' && companyNumber !== 0"
			:cardNumber="companyNumber"
			@setCompanyNumber="setCompanyNumber"
		/>
		<Edo v-if="location === '/edo'" :cardNumber="companyNumber" />	
		<AnswerNo v-if="location === '/edo/no'" />
		<AnswerWantPut v-if="location === '/edo/want-put'" />
		<PageWithForm v-if="location === '/form'" />

		<!-- <component :is="currentView" @setCompanyNumber="setCompanyNumber" :cardNumber="companyNumber" /> -->
	</main>
</template>

<script lang="ts">
import { Ref, defineComponent, ref } from "vue";

import Home from "./views/Home.vue";
import Test from "./views/Test.vue";
import CompanySelectPage from "./components/CompanySelectPage/CompanySelectPage.vue";
import Edo from "./views/Edo.vue";
import AnswerNo from "./components/Edo/Answers/AnswerNo.vue";
import AnswerWantPut from "./components/Edo/Answers/AnswerWantPut.vue";
import PageWithForm from "./views/PageWithForm.vue";

export default defineComponent({
	setup() {
		// const routes: Record<string, Component> = {
		// 	"/": Home,
		// 	"/test": Test,
		// 	"/company-select": CompanySelectPage,
		// };

		// const currentPath: Ref<string> = ref(window.location.hash);

		const location = window.location.pathname;

		const companyNumber: Ref<number> = ref(1);

		return {
			// routes,
			// currentPath,
			location,
			companyNumber,
		};
	},

	components: {
		Home,
		Test,
		CompanySelectPage,
		Edo,
		AnswerNo,
		AnswerWantPut,
		PageWithForm,
	},
	methods: {
		setCompanyNumber(value: number) {
			this.companyNumber = 0;
			setTimeout(() => {
				this.companyNumber = value;
			}, 10);
		},
	},
	computed: {
		// currentView() {
		// 	return this.routes[this.currentPath.slice(1) || "/"];
		// },
	},
	mounted() {
		// window.addEventListener("hashchange", () => {
		// 	this.currentPath = window.location.hash;
		// });
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

	overflow-x: hidden;
}
</style>
