<template>
	<div class="text-block">
		<slot></slot>
	</div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
	name: "CustomTextBlock",
});
</script>

<style lang="scss" scoped>
@import "../../styles/mixins";

.text-block {
	font: {
		size: 20px;
		weight: 600;
	}
	line-height: 22px;
	letter-spacing: 0.5px;

	display: flex;
	align-items: center;

	color: var(--color-white);

	width: 290px;
	height: 54px;
	padding-inline: 16px;

    clip-path: polygon(0 0, 100% 0, 100% 60%, 92% 100%, 0 100%);

	position: relative;
    overflow: hidden;

	cursor: pointer;

	&::after {
		content: "";

		position: absolute;
		right: -11px;
		bottom: 0;

        background-color: var(--color-transparent-35-white);
        width: 22px;
        height: 22px;

		transform: skew(-46.965deg);
        visibility: hidden;
	}

    &:active,
	&:hover {
        border: var(--border);
        border-color: var(--color-transparent-35-white);
        background-color: var(--color-transparent-5-white);

        &::after {
            visibility: visible;
        }
    }

	&:active {
        @include red-gradient-background;
	}
}
</style>
