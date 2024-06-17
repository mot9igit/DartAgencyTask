<template>
	<div class="select">
		<button
			v-for="(selection, index) in selections"
			class="select__button"
			@click="() => setSelection(index + 1)"
		>
			<CustomTextBlock class="select__text-block">{{ selection }}</CustomTextBlock>
		</button>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	setup() {
		return {};
	},
	props: {
		selections: {
			type: Array as () => string[],
			required: true,
		},
	},
	methods: {
		setSelection(value: number) {
			this.$emit("setSelection", value);
		},
	},
});
</script>

<style lang="scss" scoped>
@import "../../styles/mixins";

.select {
	@include flex-center;
	align-items: flex-start;
	flex-direction: column;

	border-left: var(--border);
	border-color: var(--color-white);

	&__button {
		background-color: transparent;
		text-align: left;

		&:focus,
		&:active {
			& + .label div {
				@include red-gradient-background;

				border: var(--border);
				border-color: var(--color-transparent-35-white);

				&::after {
					visibility: visible;
				}
			}
		}
	}
}
</style>
