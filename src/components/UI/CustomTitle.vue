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
@import "../../styles/media";

.title {
	--height: 78px;

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
	width: 428px;
	height: 78px;
	padding-inline: 24px;

	clip-path: polygon(0 0, 100% 0, 100% 72.73%, 95.07% 100%, 0 100%);

	position: relative;
	overflow: hidden;

	@include desktop-s {
	}

	@include tablet {
		height: clamp(50px, #{calc(78 * 100 / 768)}vw, 78px);
		width: clamp(250px, #{calc(428 * 100 / 768)}vw, 428px);
		font-size: clamp(18px, #{calc(30 * 100 / 768)}vw, 30px);
	}

	@include tablet-mobile-average {
		height: 50px;
		width: 250px;
		font-size: 18px;
		min-width: auto;
	}

	&::after {
		content: "";

		position: absolute;
		right: -11.5px;
		bottom: 0;

		border: var(--border);
		// border-color: var(--color-transparent-35-white);
		background-color: var(--color-transparent-35-white);

		width: 4.4%;
		height: 27%;

		transform: skew(-45deg);

		@include tablet-mobile-average {
			right: -11.9px;
			width: 6.1%;
			height: 24%;
			transform: skew(-45deg);
		}
	}

	&__span {
		color: var(--color-light-red);
	}
}
</style>
