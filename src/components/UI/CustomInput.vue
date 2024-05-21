<template>
	<div class="input__container">
		<input
			:id="id"
			:type="type"
			class="input"
			:placeholder="placeholder"
			:disabled="disable"
			:required="required"
		/>
		<label :for="id" class="input__label"
			>{{ placeholder }} <span class="input__span"> – введите корректное значение</span></label
		>
	</div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
	name: "CustomInput",

	props: {
		id: {
			type: String,
			required: true,
		},
		type: {
			type: String,
			default: "text",
		},
		placeholder: {
			type: String,
			default: "",
		},
		disable: {
			type: Boolean,
			default: false,
		},
		required: {
			type: Boolean,
			default: false,
		},
	},
});
</script>

<style lang="scss" scoped>
@import "../../styles/mixins";

.input {
	background-color: var(--color-ver-dark-gray);
	color: var(--color-white);

	border: var(--border);
	border-radius: var(--border-radius);

	height: 47px;
	padding-inline: 16px;

	position: relative;

	&::placeholder {
		color: var(--color-dark-alt-gray);
	}

	&:focus {
		border-color: var(--color-white);
	}

	&:not(:focus) {
		& + .input__label {
			visibility: hidden;
		}
	}

	&:disabled {
		background-color: var(--color-light-black);
		border-color: var(--color-transparent-10-white);
	}

	&:user-invalid {
		border-color: var(--color-alt-red);

		& + .input__label {
			visibility: visible;
		}
	}

	&:not(:user-invalid) {
		& + .input__label > .input__span {
			display: none;
		}
	}

	&__container {
		display: flex;
		flex-direction: column-reverse;
		gap: 4px;
	}

	&__label {
		font: {
			size: 12px;
			weight: 400;
		}
		color: var(--color-light-dark-alt-gray);
		letter-spacing: 0.25px;
	}

	&__span {
		font: {
			size: 12px;
			weight: 400;
		}
		color: var(--color-alt-red);
		line-height: 0.25px;

		position: relative;

		&::after {
			content: url("../../assets/svg/error.svg");

			position: absolute;
			top: 32px;
			right: 8px;

			width: 20px;
			height: 20px;
		}
	}
}
</style>
