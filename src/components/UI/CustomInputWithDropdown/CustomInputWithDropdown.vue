<template>
	<div class="input__container">
		<input
			:id="id"
			:type="type"
			class="input"
			:placeholder="placeholder"
			:disabled="disabled"
			:required="required"
			:value="value"
			ref="input"
		/>
		<label :for="id" class="input__label"
			>{{ placeholder }} <span class="input__span"> – введите корректное значение</span></label
		>
		<img src="../../../assets/svg/error.svg" class="input__error-icon" />

		<ul :class="`input__items ${!isShow && 'hidden'}`" :id="id + 'Items'" @click.stop>
			<li class="input__item" v-for="company in companies">
				<CompanyItem :company="company" @click="() => itemHandleClick(company)" />
			</li>
		</ul>
	</div>
</template>

<script lang="ts">
import axios, { AxiosResponse } from "axios";
import { Ref, defineComponent, ref } from "vue";
import CompanyItem from "./CompanyItem.vue";
import { useStore } from "vuex";

export type CompanyType = {
	value: string;
	data: {
		kpp: string;
		management: {
			name: string;
		};
		state: {
			status: string;
			code: string;
			actuality_date: number;
			registration_date: number;
			liquidation_date: number;
		};
		opf: {
			type: string;
			code: string;
			full: string;
			short: string;
		};
		name: {
			full_with_opf: string;
			short_with_opf: string;
			latin: string;
			full: string;
			short: string;
		};
		inn: string;
		ogrn: string;
		okpo: string;
		okato: string;
		oktmo: string;
		okogu: string;
		okfs: string;
		okved: string;
		okveds: string;
		authorities: string;
		documents: string;
		licenses: string;
		finance: string;
		address: {
			value: string;
			unrestricted_value: string;
			invalidity: string;
			data: {
				postal_code: string;
				country: string;
				country_iso_code: string;
				federal_district: string;
				region_with_type: string;
				region_type: string;
				region_type_full: string;
				region: string;
				city: string;
				street: string;
				house: string;
				fias_level: string;
				kladr_id: string;
				geoname_id: string;
				capital_marker: string;
				okato: string;
				oktmo: string;
				tax_office: string;
				tax_office_legal: string;
				timezone: string;
				geo_lat: string;
				geo_lon: string;
				beltway_hit: string;
				source: string;
			};
		};
		phones: string[];
		emails: string[];
		ogrn_date: number;
		okved_type: string;
		employee_count: number;
	};
};

export default defineComponent({
	setup() {
		const store = useStore();
		let isShow: Ref<boolean> = ref(false);
		let input: Ref<HTMLInputElement> = ref({} as HTMLInputElement);

		const companies: Ref<CompanyType[]> = ref([]);

		return {
			isShow,
			input,
			companies,
			store,
		};
	},
	name: "CustomInputWithDropdown",
	components: {
		CompanyItem,
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
		itemHandleClick(company: CompanyType) {
			this.isShow = false;
			this.input.value = company.data.inn;
			this.input.blur();

			const newCompanies: CompanyType[] = this.store.state.companiesForInn;
			newCompanies[this.companyId] = company;

			this.store.commit("setCompanyForInn", newCompanies);
			this.$emit("refreshCompanyForInn");
		},
		async setCompanies() {
			const resposne: AxiosResponse = await axios.post(
				"http://suggestions.dadata.ru/suggestions/api/4_1/rs/findById/party",
				{
					query: this.input.value,
				},
				{
					headers: {
						Accept: "application/json",
						"Content-Type": "application/json",
						Authorization: "Token 34e9caeb5d40781585d9b5cb3b156199fbaca4e2",
					},
				}
			);
			if (resposne.status !== 200) return;

			this.companies = resposne.data.suggestions as CompanyType[];
		},
	},
	mounted() {
		window.addEventListener("click", (e) => {
			if (e.target === this.input) return;
			else if (e.target === this.input) e.stopPropagation();
			else {
				this.isShow = false;
				if (this.input) this.input.blur();
			}
		});

		this.input.addEventListener("input", () => {
			const value: string = this.input.value;

			if (value.length === 10 || value.length === 12) {
				this.setCompanies();
				this.isShow = true;
			} else if (value.length === 0) {				
				const newCompanies: CompanyType[] = this.store.state.companiesForInn;
				newCompanies[this.companyId] = {} as CompanyType;

				this.store.commit("setCompanyForInn", newCompanies);
				this.$emit("refreshCompanyForInn");
			}
		});

		this.input.addEventListener("focus", () => {
			const value: string = this.input.value;

			if (value.length === 10 || value.length === 12) {
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
