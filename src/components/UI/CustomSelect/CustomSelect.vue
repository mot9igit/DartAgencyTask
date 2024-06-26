<template>
	<div class="select" :id="id + 'Container'" @click="selectHandleClick">
		<input
			type="text"
			class="select__input"
			:placeholder="placeholder"
			:id="id"
			:disabled="disabled"
			@click.prevent
		/>
		<img
			src="../../../assets/svg/input-arrow.svg"
			:class="`select__arrow ${isClicked && 'rotate'}`"
			:id="id + 'Arrow'"
			@click="arrowHandleClick"
		/>
		<ul :class="`select__items ${!isClicked && 'hidden'}`" :id="id + 'Items'" @click.stop>
			<li class="select__item" v-for="company in companies">
				<CustomSelectItem :company="company" @click="() => itemHandleClick(company)" />
			</li>
		</ul>
	</div>
</template>

<script lang="ts">
import { Ref, defineComponent, ref } from "vue";
import { SelectCompanyType } from "../../../types/SelectCompanyType";
import CustomSelectItem from "./CustomSelectItem.vue";

export default defineComponent({
	name: "CustomSelect",

	components: {
		CustomSelectItem,
	},

	setup() {
		let isClicked: Ref<boolean> = ref(false);

		let selectInput: HTMLInputElement = {} as HTMLInputElement;

		return {
			isClicked,
			selectInput,
		};
	},

	props: {
		id: {
			type: String,
			required: true,
		},
		placeholder: {
			type: String,
			required: false,
		},
		disabled: {
			type: Boolean,
			required: false,
		},
		companies: {
			type: Array as () => SelectCompanyType[],
			required: true,
		},
	},
	methods: {
		selectHandleClick() {
			this.isClicked = !this.isClicked;

			if (this.isClicked) {
				this.selectInput.focus();
			} else {
				this.selectInput.blur();
			}
		},
		arrowHandleClick() {
			if (!this.isClicked) {
				this.selectInput.focus();
			} else {
				this.selectInput.blur();
			}
		},
		itemHandleClick(company: SelectCompanyType) {
			this.isClicked = false;
			this.selectInput.value = company.name || "";
			this.selectInput.blur();

			this.$emit("change", company);
		},
	},

	mounted() {
		this.selectInput = document.getElementById(this.id!) as HTMLInputElement;

		const selectItems = document.getElementById(this.id + "Items") as HTMLUListElement;
		const selectArrow = document.getElementById(this.id + "Arrow") as HTMLImageElement;
		window.addEventListener("click", (e) => {
			if (e.target === this.selectInput || e.target === selectArrow) return;
			else if (e.target === selectItems) e.preventDefault();
			else {
				this.isClicked = false;
				this.selectInput.blur();
			}
		});
	},
});
</script>

<style lang="scss" scoped>
@import "../../../styles/mixins";

.select {
	$height: 47;

	width: 350px;
	position: relative;

	&__input {
		background-color: var(--color-light-black);
		color: var(--color-white);

		border: var(--border);
		border-radius: var(--border-radius);

		height: #{$height}px;
		width: 100%;
		padding-inline: 16px;

		position: relative;
		cursor: pointer;

		&::placeholder {
			color: var(--color-dark-alt-gray);
		}

		&:disabled {
			background-color: var(--color-light-alt-black);
			border-color: var(--color-transparent-10-white);

			cursor: default;

			&::placeholder {
				color: var(--color-dark-alt-gray);
			}

			& + .select__arrow {
				pointer-events: none;
			}
		}
	}

	&__arrow {
		position: absolute;
		top: 50%;
		right: 16px;
		translate: 0 -50%;

		transition-duration: var(--transition-duration);
		cursor: pointer;
	}

	&__items {
		@include scrollbar-alt;

		display: flex;
		flex-direction: column;

		position: absolute;
		left: 0;
		bottom: 0;
		translate: 0 calc(100% + 16px);

		transform-origin: 50% 0;
		transition-duration: var(--transition-duration);

		background-color: var(--color-light-black);
		border: var(--border);
		border-radius: var(--border-radius);

		color: var(--color-white);

		padding-block: 11px;
		width: 100%;
		max-height: 350px;

		z-index: 100;
	}

	&__item {
		cursor: pointer;

		border-radius: var(--border-radius);
		padding: 13px 16px;

		&:hover {
			background-color: var(--color-transparent-5-white);
		}
	}
}

.hidden {
	display: none;
}

.rotate {
	rotate: 180deg;
}
</style>
