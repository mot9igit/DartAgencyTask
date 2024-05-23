<template>
	<Home v-if="location === '/'" />
	<Test v-if="location === '/test'" />
</template>

<script lang="ts">
import { defineComponent } from "vue";

import Home from "./views/Home.vue";
import Test from "./views/Test.vue";	

export default defineComponent({
	setup() {
		const location = window.location.pathname;

		return {
			location,
		};
	},

	components: {
        Home,
        Test,
    },
});
</script>

<style lang="scss" scoped></style>
