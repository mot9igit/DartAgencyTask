<template>
	<main class="main">
		<RouterView></RouterView>
	</main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { RouterView } from "vue-router";

export default defineComponent({
	setup() {
		return {};
	},
	methods: {},
});
</script>

<style lang="scss" scoped>
@import "./styles/mixins";

.main {
	@include adaptive-background;
	@include flex-center;
	@include scrollbar;

	background-color: var(--color-alt-black);

	width: 100vw;
	min-height: 100dvh;

	overflow-x: hidden;
	scroll-behavior: smooth;
}
</style>
