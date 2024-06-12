<template>
	<h4 class="title">
		<slot></slot>
	</h4>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "CardTitle",

	setup() {
		return {};
	},
});
</script>

<style lang="scss" scoped>
@import "../../styles/mixins";

.title {
	@include gray-gradient-background;

	--height: 54px;

	font: {
		size: 20px;
		weight: 700;
	}

	line-height: 22px;
	letter-spacing: 0.5px;
	color: var(--color-white);

	user-select: none;

	display: flex;
	justify-content: center;
	align-items: center;

	position: absolute;
	bottom: 0;

	width: 100%;
	height: var(--height);

	clip-path: polygon(0% 0%, 100% 0, calc(100% - var(--height)) 100%, 0% 100%);

	@include desktop-l {
		--height: clamp(35px, #{calc(54 * 100 / 1980)}vw, 54px);
	}
}
</style>
