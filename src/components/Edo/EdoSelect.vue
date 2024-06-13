<template>
	<div class="select">
		<button class="select__button" @click="() => setSelection(1)">
			<CustomTextBlock class="select__text-block">Да</CustomTextBlock>
		</button>
		<button class="select__button" @click="() => setSelection(2)">
			<CustomTextBlock class="select__text-block">Нет</CustomTextBlock>
		</button>
		<button class="select__button" @click="() => setSelection(3)">
			<CustomTextBlock class="select__text-block">Нет, но я хочу оставить</CustomTextBlock>
		</button>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	setup() {
		return {};
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
