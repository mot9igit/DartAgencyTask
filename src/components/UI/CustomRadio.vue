<template>
	<div class="radio__wrapper">
		<input :id="id" type="radio" :name="name" class="radio" :checked="checked" @change="$emit('onChange')" />
		<label :for="id" class="radio__change"></label>
		<label :for="id" class="radio__label">{{ label }}</label>
	</div>
</template>

<script>
import { defineComponent } from "vue";
import CustomCheckbox from "./CustomCheckbox.vue";

export default defineComponent({
	name: "CustomRadio",

	props: {
		id: {
			type: String,
			required: true,
		},
		name: {
			type: String,
			required: true,
		},
		label: {
			type: String,
			required: false,
		},
		checked: {
			type: Boolean,
			default: false,
		},
	},
});
</script>

<style lang="scss" scoped>
@import "../../styles/mixins";

.radio {
	@include visually-hidden;

	&:hover {
		& + .radio__change {
			border-color: var(--color-red);
		}
	}

	&:focus,
	&:active,
	&:checked {
		& + .radio__change {
			border-color: var(--color-dark-light-red);
		}
	}

	&__wrapper {
		display: flex;
		gap: 8px;

		position: relative;
	}

	&__change {
		display: block;

		border: 1px solid var(--color-light-dark-gray);
		border-radius: var(--border-radius-circle);

		width: 18px;
		height: 18px;

		flex-shrink: 0;

		transition-duration: var(--transition-duration);
		cursor: pointer;
	}

	&__label {
		color: var(--color-white);
	}
}
</style>
