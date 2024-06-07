<template>
	<div class="input__container">
		<input
			:id="id"
			:type="type"
			class="input"
			:placeholder="placeholder"
			:disabled="disabled"
			:required="required"
			v-model="inputValue"
			ref="input"
		/>
		<label :for="id" class="input__label"
			>{{ placeholder }} <span class="input__span"> – введите корректное значение</span></label
		>
		<img src="../../../assets/svg/error.svg" class="input__error-icon" />

		<ul :class="`input__items ${!isShow && 'hidden'}`" :id="id + 'Items'" @click.stop>
			<li class="input__item" v-for="address in addresses">
				<AddressSelectItem :address="address" @click="() => itemHandleClick(address)" />
			</li>
		</ul>
	</div>
</template>

<script lang="ts">
import axios, { AxiosResponse } from "axios";
import { Ref, defineComponent, ref } from "vue";
import { useStore } from "vuex";
import AddressSelectItem from "./AddressSelectItem.vue";

export type AddressType = {
	value: string;
	unrestricted_value: string;
};

export default defineComponent({
	setup() {
		const store = useStore();
		let isShow: Ref<boolean> = ref(false);
		let input: Ref<HTMLInputElement> = ref({} as HTMLInputElement);
		let inputValue: Ref<string> = ref("");

		const addresses: Ref<AddressType[]> = ref([]);

		return {
			isShow,
			input,
			addresses,
			store,
			inputValue,
		};
	},
	name: "AddressSelect",
	components: {
		AddressSelectItem,
	},
	props: {
		id: {
			type: String,
			required: false,
		},
		type: {
			type: String,
			default: "text",
		},
		placeholder: {
			type: String,
			default: "",
		},
		disabled: {
			type: Boolean,
			default: false,
		},
		required: {
			type: Boolean,
			default: false,
		},
		value: {
			type: String,
			default: "",
		},
		companyId: {
			type: Number,
			default: 0,
		},
	},
	methods: {
		itemHandleClick(address: AddressType) {
			this.isShow = false;
			this.inputValue = address.value;
			this.input.blur();

			const newAddresses: string[] = this.store.state.addresses;
			newAddresses[this.companyId] = address.value;

			this.store.commit("setAddresses", newAddresses);
			this.$emit("refreshAddress");
            this.$emit("setCoordinates");
		},
		async setAddresses() {
			const response: AxiosResponse = await axios.post(
				"http://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address",
				{
					query: this.inputValue,
				},
				{
					headers: {
						Accept: "application/json",
						"Content-Type": "application/json",
						Authorization: "Token 34e9caeb5d40781585d9b5cb3b156199fbaca4e2",
					},
				}
			);
			if (response.status !== 200) return;
			this.addresses = response.data.suggestions as AddressType[];
		},
	},
	mounted() {
		window.addEventListener("click", (e) => {
			if (e.target === this.input) return;
			else if (e.target === this.input) e.stopPropagation();
			else {
				this.isShow = false;
				this.input.blur();
			}
		});

		this.input.addEventListener("input", () => {
			this.setAddresses();
			this.isShow = true;

			if (this.inputValue.length === 0) {
				const newAddresses: string[] = this.store.state.addresses;
				newAddresses[this.companyId] = "";

				this.store.commit("setAddresses", newAddresses);
				this.$emit("refreshAddress");
			}
		});

		this.input.addEventListener("focus", () => {
			if (this.inputValue.length === 10 || this.inputValue.length === 12) {
				this.isShow = true;
			}
		});
	},
});
</script>

<style lang="scss" scoped>
@import "../../../styles/mixins";

.input {
	$height: 47;

	background-color: var(--color-light-black);
	color: var(--color-white);

	border: var(--border);
	border-radius: var(--border-radius);

	height: #{$height}px;
	padding-inline: 16px;

	// min-width: 280px;

	@include mobile-tablet {
		min-width: 100%;
	}

	&::placeholder {
		color: var(--color-dark-alt-gray);
	}

	&:focus {
		border-color: var(--color-white);
	}

	&:not(:focus) {
		& + .input__label {
			display: none;
		}
	}

	&:disabled {
		background-color: var(--color-light-alt-black);
		border-color: var(--color-transparent-10-white);

		&::placeholder {
			color: var(--color-dark-alt-gray);
		}
	}

	&:user-invalid {
		border-color: var(--color-alt-red);

		& + .input__label {
			display: block;
		}
	}

	// &:user-valid {
	// 	& + .input__label > .input__span,
	// 	& + .input__label + .input__error-icon {
	// 		display: none;
	// 	}
	// }

	&:not(:user-invalid) {
		& + .input__label > .input__span,
		& + .input__label + .input__error-icon {
			display: none;
		}
	}

	&__container {
		display: flex;
		flex-direction: column-reverse;
		gap: 4px;

		position: relative;
	}

	&__label {
		font: {
			size: 12px;
			weight: 400;
		}
		color: var(--color-light-dark-alt-gray);
		letter-spacing: 0.25px;

		position: absolute;
		top: -4px;
		left: 0;
		translate: 0 -100%;
	}

	&__span {
		font: {
			size: 12px;
			weight: 400;
		}
		color: var(--color-alt-red);
		line-height: 0.25px;

		position: relative;
	}

	&__error-icon {
		position: absolute;
		bottom: #{calc($height / 2)}px;
		right: 6px;
		translate: 0 50%;

		width: 20px;
		height: 20px;
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
		overflow-y: auto;

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
</style>
