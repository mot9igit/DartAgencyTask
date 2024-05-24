<template>
	<h3 class="title">
		{{ text }}&nbsp;<span class="title__span">{{ span }}</span>
		<slot></slot>
	</h3>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	setup() {
		return {};
	},

	name: "CustomTitle",

	props: {
		text: {
			type: String,
			required: true,
		},
		span: {
			type: String,
			required: false,
		},
	},
});
</script>

<style lang="scss" scoped>
.title {
	font: {
		size: 30px;
		weight: 600;
	}
	line-height: 30px;
    letter-spacing: 0.25%;

	display: flex;
	justify-content: center;
	align-items: center;

	color: var(--color-white);

	border: var(--border);
	border-color: var(--color-transparent-35-white);
	background-color: var(--color-transparent-5-white);

	min-width: calc(428px + 24px * 2);
	width: calc(428px + 24px * 2);
	height: 78px;
	padding-inline: 24px;

	clip-path: polygon(0 0, 100% 0, 100% 72.73%, 95.07% 100%, 0 100%);

	position: relative;
	overflow: hidden;

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

	&__span {
		color: var(--color-light-red);
	}
}
</style>
