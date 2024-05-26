<template>
	<div class="checkbox__container">
		<input :id="id" type="checkbox" class="checkbox" />
		<label :for="id" class="checkbox__change">
			<svg
				class="checkbox__icon"
				width="18"
				height="18"
				viewBox="0 0 18 18"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M7 14L2 9L3.41 7.58L7 11.17L14.59 3.58L16 5M16 0H2C0.89 0 0 0.89 0 2V16C0 16.5304 0.210714 17.0391 0.585786 17.4142C0.960859 17.7893 1.46957 18 2 18H16C16.5304 18 17.0391 17.7893 17.4142 17.4142C17.7893 17.0391 18 16.5304 18 16V2C18 0.89 17.1 0 16 0Z"
					fill="#FF0000"
				/>
			</svg>
		</label>
		<label v-if="label" :for="id" class="checkbox__label">{{ label }}</label>
	</div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
	name: "CustomCheckbox",

	props: {
		id: {
			type: String,
			required: true,
		},
		label: {
			type: String,
			required: false
		}
	},
});
</script>

<style lang="scss" scoped>
@import "../../styles/mixins";

.checkbox {
	@include visually-hidden;

	&:active,
	&:focus,
	&:hover,
	&:checked {
		& + .checkbox__change {
			border-color: var(--color-red);
		}
	}

	&:checked {
		& + .checkbox__change {
			border: none;
		}

		& + .checkbox__change .checkbox__icon {
			display: block;
		}
	}

	&__container {
		display: flex;
		gap: 8px;

		position: relative;
	}

	&__change {
		display: flex;
		justify-content: center;
		align-items: center;

		border: 1px solid var(--color-light-dark-gray);
		border-radius: var(--border-radius-small);

		width: 18px;
		height: 18px;

		flex-shrink: 0;

		overflow: hidden;
	}

	&__icon {
		display: none;

		width: 100%;
		aspect-ratio: 1;
	}

	&__label {}
}
</style>
