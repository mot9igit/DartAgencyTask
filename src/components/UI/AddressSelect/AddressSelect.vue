<template>
	<div class="input__container">
		<input
			:id="id"
			class="input"
			:placeholder="placeholder"
			:disabled="disabled"
			:required="required"
			:value="inputValue"
			ref="input"
			@input="(e: any) => {
				props.onChange(e);
			}"
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
export default defineComponent({
	name: "AddressSelect",
});
</script>

<script lang="ts" setup>
import axios, { AxiosResponse } from "axios";
import { Ref, defineComponent, onMounted, ref, toRef } from "vue";
import AddressSelectItem from "./AddressSelectItem.vue";
import { AddressSelectTypesEnum } from "../../../types/AddressSelectTypes";

export type AddressType = {
	value: string;
	unrestricted_value: string;
};

const props = defineProps({
	id: {
		type: String,
		required: false,
	},
	type: {
		type: Object as () => AddressSelectTypesEnum,
		default: AddressSelectTypesEnum.TEXT,
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
		required: true,
	},
	onChange: {
		type: Object as () => (e) => void,
		default: () => {},
	},
});

const emit = defineEmits(["setCoordinates", "updateStoreData", "refreshStoreData"]);

const inputValue: Ref<string> = toRef(props, "value");

let isShow: Ref<boolean> = ref(false);
let input: Ref<HTMLInputElement> = ref({} as HTMLInputElement);

const addresses: Ref<AddressType[]> = ref([]);

const itemHandleClick = (address: AddressType) => {
	isShow.value = false;
	inputValue.value = address.value;
	input.value.blur();
	emit("refreshStoreData");

	if (props.type === AddressSelectTypesEnum.MAP) {
		emit("setCoordinates");
	}
};

const setAddresses = async () => {
	const response: AxiosResponse = await axios.post(
		"http://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address",
		{
			query: inputValue.value,
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

	addresses.value = response.data.suggestions as AddressType[];
};

onMounted(() => {
	window.addEventListener("click", (e) => {
		if (e.target === input.value) return;
		else if (e.target === input.value) e.stopPropagation();
		else {
			isShow.value = false;
			if (input.value) input.value.blur();
		}
	});

	input.value.addEventListener("input", () => {
		setAddresses();
		isShow.value = true;
		emit("refreshStoreData");
	});

	input.value.addEventListener("focus", () => {
		if (inputValue.value.length === 10 || inputValue.value.length === 12) {
			isShow.value = true;
		}
	});
});
</script>

<style lang="scss" scoped>
@import "../../../styles/mixins";

.input {
	$height: 47;

	background-color: var(--color-light-black);
	color: var(--color-dark-alt-gray);

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
		color: var(--color-white);
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
