<template>
	<section>
		<div class="form__line-wrapper">
			<hr class="form__line" />
		</div>

		<details class="accordion" open>
			<summary class="accordion__header">
				<h4 class="form__subtitle">Компания №{{ index + 1 }}</h4>
				<span class="accordion__indicator">
					<img src="../assets/svg/input-arrow.svg" alt="" class="accordion__icon" />
				</span>
			</summary>

			<section class="store-data form__store-data form__container">
				<div class="container__info">
					<h6 class="container__title">Данные магазина</h6>
					<p class="form__text">
						Эта информация необходима для того, чтобы знать, к кому обращаться в случае вопросов по
						заказам в вашем магазине
					</p>
				</div>
				<div class="container__data">
					<div class="container__input-container store-data__input-container">
						<CustomInput
							placeholder="Название магазина"
							:value="storeFormData?.name"
							:required="true"
							class="form__input"
							:onChange="(e: any) => updateStoreData('name', e.target.value)"
						/>
						<AddressSelect
							placeholder="Адрес магазина"
							class="form__input"
							:value="storeFormData?.address"
							:companyId="index"
							:type="addressSelectTypeForMap"
							:required="true"
							:onChange="(e: any) => updateStoreData('address', e.target.value)"
							@setCoordinates="setCoordinates"
							@updateStoreData="updateStoreData"
							@refreshStoreData="refreshStoreFormData"
						/>
					</div>
					<div class="map form__map">
						<!-- <img src="/img/map.png" alt="map" class="map__img" /> -->
						<div :class="`map__overlay ${isShowMap && 'hidden'}`"></div>
						<Map
							ref="mapRef"
							class="map__img"
							:companyIndex="index"
							:coordinates="coordinates"
							@updateStoreData="updateStoreData"
							@refreshStoreData="refreshStoreFormData"
						/>
						<CustomButton
							theme="black"
							:class="`form__button map__button ${isShowMap && 'hidden'}`"
							@click="isShowMap = true"
							>Выбрать на карте</CustomButton
						>
					</div>
					<CustomCheckbox
						:id="'storeMode' + index"
						label="Работа в режиме магазина*"
						class="form__checkbox store-data__checkbox"
						@onChange="(e: any) => {
							setCopyIndex(e);
							updateStoreData('isStoreMode', e.target.checked);
						}"
					/>
					<span class="form__span store-data__span"
						>* На вашем складе розничный покупатель может получить продукцию</span
					>
				</div>
			</section>

			<!-- <div class="form__container form__line-wrapper">
				<div class="container__info form__line-empty hidden-desktop-s"></div>
				<div class="container__data">
					<hr class="form__line" />
				</div>
			</div> -->

			<!-- <section class="order form__order form__container">
				<div class="container__info">
					<h6 class="container__title">Организационно-правовая форма</h6>
					<CustomCheckbox
						id="orderCopy"
						label="Копировать данные организационно-правовой формы
                для остальных магазинов"
						class="form__checkbox"
					/>
				</div>
				<div class="container__data">
					<div class="container__input-container order__input-container">
						<CustomRadio id="ip" label="Индивидуальный предприниматель" name="orderSelect" />
						<CustomRadio id="ur" label="Юридическое лицо" name="orderSelect" />
					</div>
				</div>
			</section> -->

			<div class="form__container form__line-wrapper">
				<div class="container__info form__line-empty hidden-desktop-s"></div>
				<div class="container__data">
					<hr class="form__line" />
				</div>
			</div>

			<section class="ur-store-data form_ur-store-data form__container">
				<div class="container__info">
					<div class="container__info-block">
						<h6 class="form__title">Юридические данные магазина</h6>
						<CustomCheckbox
							v-if="copyIndex === -1 || copyIndex === index"
							:id="'storeDataCopy' + index"
							label="Копировать юридические данные для остальных
                    магазинов"
							class="form__checkbox"
							@change="setCopyIndex"
						/>
					</div>
					<div class="ur-store-data__check">
						<p class="form__text form__text--white">
							Пожалуйста, проверьте автоматически заполненные поля
						</p>
						<img src="../assets/svg/not-error.svg" class="ur-store-data__check-icon" />
					</div>
				</div>
				<div class="container__data">
					<div class="container__input-container container__input-container--border">
						<div class="container__border hidden-desktop-s"></div>

						<CustomInputWithDropdown
							ref="innInput"
							:id="'innSelect' + index"
							placeholder="ИНН"
							:required="true"
							:value="legalFormData?.inn"
							class="form__input"
							:companyId="index"
							@refreshLegalData="refreshLegalFormData"
							:onChange="(e: any) => updateLegalData('inn', e.target.value)"
						/>
						<CustomInput
							ref="kppInput"
							placeholder="КПП"
							:value="legalFormData?.kpp"
							class="form__input"
							:onChange="(e: any) => updateLegalData('kpp', e.target.value)"
						/>
						<CustomInput
							ref="ogrnInput"
							placeholder="ОГРН"
							:value="legalFormData?.ogrn"
							class="form__input"
							:onChange="(e: any) => updateLegalData('ogrn', e.target.value)"
						/>
						<CustomInput
							ref="legalEntityNameInput"
							placeholder="Название юридического лица"
							:value="legalFormData?.legal_entity_name"
							class="form__input"
							:onChange="(e: any) => updateLegalData('legal_entity_name', e.target.value)"
						/>
						<TextSelect
							ref="taxSystemSelect"
							:id="'taxSelect' + index"
							placeholder="Система налогообложения"
							:value="legalFormData?.tax_system"
							:data="dataForTaxSystem"
							class="form__input"
							:onChange="(e: any) => updateLegalData('tax_system', e.name)"
						/>
						<AddressSelect
							ref="legalAddressInput"
							placeholder="Юридический Адрес"
							:value="legalFormData?.legal_address"
							:required="false"
							class="form__input"
							:onChange="(e: any) => updateLegalData('legal_address', e.target.value)"
						/>
						<AddressSelect
							ref="actualAddressInput"
							placeholder="Фактический адрес"
							:value="legalFormData?.actual_address"
							:required="false"
							class="form__input"
							:onChange="(e: any) => updateLegalData('actual_address', e.target.value)"
						/>
						<TextSelect
							ref="ndsSelect"
							id="ndsSelect"
							placeholder="НДС"
							:value="legalFormData?.nds"
							:required="true"
							:data="dataForInn"
							class="form__input"
							:onChange="(e: any) => updateLegalData('nds', e.name)"
						/>
						<CustomInputWithDropdown
							ref="bicInput"
							:id="'innSelect' + index"
							placeholder="БИК"
							:required="true"
							:value="legalFormData?.bic"
							:type="enumForTaxSystem"
							class="form__input"
							:companyId="index"
							@refreshLegalData="refreshLegalFormData"
							:onChange="(e: any) => updateLegalData('bic', e.target.value)"
						/>
						<CustomInput
							ref="bankInput"
							placeholder="Банк"
							:value="legalFormData?.bank"
							class="form__input"
							:onChange="(e: any) => updateLegalData('bank', e.target.value)"
						/>
						<CustomInput
							ref="correspondentAccountInput"
							placeholder="К/с"
							:value="legalFormData?.correspondent_account"
							class="form__input"
							:onChange="(e: any) => updateLegalData('correspondent_account', e.target.value)"
						/>
						<CustomInput
							ref="paymentAccountInput"
							placeholder="Р/с"
							:value="legalFormData?.payment_account"
							:required="true"
							class="form__input"
							:onChange="(e: any) => updateLegalData('payment_account', e.target.value)"
						/>
					</div>
					<div class="container__input-container ur-store-data__input-container">
						<CustomInput
							ref="telephoneInput"
							:id="`telephoneInput${index}`"
							placeholder="Телефон/факс"
							type="tel"
							:value="legalFormData?.telephone"
							:required="true"
							class="form__input"
							:onChange="(e: any) => updateLegalData('telephone', e.target.value)"
						/>
						<CustomInput
							ref="emailInput"
							placeholder="Email"
							:value="legalFormData?.email"
							:required="true"
							class="form__input"
							:onChange="(e: any) => updateLegalData('email', e.target.value)"
						/>
						<CustomInput
							ref="fioInput"
							placeholder="ФИО подписанта"
							:value="legalFormData?.fio"
							:required="true"
							class="form__input"
							:onChange="(e: any) => updateLegalData('fio', e.target.value)"
						/>
						<CustomInput
							ref="postInput"
							placeholder="Должность подписанта"
							:value="legalFormData?.post"
							:required="true"
							class="form__input"
							:onChange="(e: any) => updateLegalData('post', e.target.value)"
						/>
						<CustomInput
							ref="actionBasisInput"
							placeholder="Основание действий подписанта"
							:value="legalFormData?.action_basis"
							:required="true"
							class="form__input"
							:onChange="(e: any) => updateLegalData('action_basis', e.target.value)"
						/>
					</div>
				</div>
			</section>

			<div class="form__container form__line-wrapper">
				<div class="container__info form__line-empty hidden-desktop-s"></div>
				<div class="container__data">
					<hr class="form__line" />
				</div>
			</div>

			<section class="form__container">
				<div class="container__info container__info--column">
					<h6 class="form__title">Данные лица ответственного<br />за подключение (ЛПР)</h6>
					<p class="form__text">
						На старте и в последующем, нам необходимо знать, к кому обращаться при подключении.
					</p>
					<CustomCheckbox
						v-if="personCopyIndex === -1 || personCopyIndex === index"
						@change="setPersonCopyIndex"
						:id="'lprDataCopy' + index"
						label="Копировать данные лица ответственного за подключение для остальных магазинов"
						class="form__checkbox"
					/>
				</div>
				<div class="container__data">
					<div class="container__input-container">
						<CustomInput
							ref="personPostInput"
							placeholder="Должность"
							:value="legalFormPerson?.post"
							:required="true"
							class="form__input"
							:onChange="(e: any) => updateLegalPerson('post', e.target.value)"
						/>
						<CustomInput
							ref="personFioInput"
							placeholder="ФИО"
							:value="legalFormPerson?.fio"
							class="form__input"
							:onChange="(e: any) => updateLegalPerson('fio', e.target.value)"
						/>
						<CustomInput
							ref="personTelephoneInput"
							:id="`personTelephoneInput${index}`"
							type="tel"
							placeholder="Телефон"
							:value="legalFormPerson?.telephone"
							class="form__input"
							:onChange="(e: any) => updateLegalPerson('telephone', e.target.value)"
						/>
						<CustomInput
							ref="personEmailInput"
							placeholder="Email"
							:value="legalFormPerson?.email"
							:required="true"
							class="form__input"
							:onChange="(e: any) => updateLegalPerson('email', e.target.value)"
						/>
					</div>
				</div>
			</section>
		</details>
	</section>
</template>

<script lang="ts">
import { Ref, defineComponent, ref } from "vue";
import { SelectCompanyType } from "../types/SelectCompanyType";
import { useStore } from "vuex";
import Map from "./Map.vue";
import axios, { AxiosResponse } from "axios";
import { DataType } from "./UI/TextSelect/TextSelect.vue";
import IMask from "imask";
import { LegalDataType, LegalPersonType, StoreDataType } from "../types/DataFromForm";
import { SearchCompanyEnum } from "../types/CustomInputWithDropdownTypes";
import { AddressSelectTypesEnum } from "../types/AddressSelectTypes";

export type CoordinatesType = {
	response: {
		GeoObjectCollection: {
			featureMember: [
				{
					GeoObject: {
						Point: {
							pos: string;
						};
					};
				}
			];
		};
	};
};

export default defineComponent({
	setup() {
		const store = useStore();
		let isShowMap: Ref<boolean> = ref(false);
		let coordinates: Ref<CoordinatesType> = ref({} as CoordinatesType);

		// Карта
		const mapRef: Ref<InstanceType<typeof Map> | null> = ref(null);
		const addressSelectTypeForMap: AddressSelectTypesEnum = AddressSelectTypesEnum.MAP;

		const invokeChild = (coordinates: CoordinatesType) => {
			mapRef.value?.updateCoordinates(coordinates);
		};

		// Данные для select-ов
		const dataForInn: DataType[] = [
			{
				name: "Без НДС",
			},
			{
				name: "20%",
			},
		];

		const dataForTaxSystem: DataType[] = [
			{
				name: "ОСНО",
			},
			{
				name: "УСН",
			},
		];
		const enumForTaxSystem: SearchCompanyEnum = SearchCompanyEnum.BIC;

		return {
			store,
			isShowMap,
			coordinates,
			mapRef,
			addressSelectTypeForMap,
			invokeChild,
			dataForInn,
			dataForTaxSystem,
			enumForTaxSystem,
		};
	},
	components: {
		Map,
	},
	props: {
		company: {
			type: Object as () => SelectCompanyType,
			required: true,
		},
		index: {
			type: Number,
			required: true,
		},
		copyIndex: {
			type: Number,
			required: false,
		},
		personCopyIndex: {
			type: Number,
			required: false,
		},
		storeFormData: {
			type: Object as () => StoreDataType,
            required: true,
		},
		legalFormData: {
			type: Object as () => LegalDataType,
			required: true,
		},
		legalFormPerson: {
			type: Object as () => LegalPersonType,
			required: true,
		},
	},
	methods: {
		checkValue(value: string | undefined): string {
			return value ? value : "";
		},
		setCopyIndex(e: InputEvent): void {
			if ((e.target as HTMLInputElement).checked) {
				this.$emit("setCopyIndex", this.index);
			} else {
				this.$emit("setCopyIndex", -1);
			}
			this.refreshLegalFormData();
		},
		setPersonCopyIndex(e: InputEvent): void {
			if ((e.target as HTMLInputElement).checked) {
				this.$emit("setPersonCopyIndex", this.index);
			} else {
				this.$emit("setPersonCopyIndex", -1);
			}
			this.refreshLegalFormPerson();
		},
		refreshStoreFormData(): void {
			this.$emit("refreshStoreData");
		},
		refreshLegalFormData(): void {
			this.$emit("refreshLegalData");
		},
		refreshLegalFormPerson(): void {
			this.$emit("refreshLegalPerson");
		},
		updateStoreData(parameter: string, value: string): void {			
			const formStoreData: StoreDataType[] = this.store.state.formStoreData;
			if(!formStoreData[this.index]) {
				formStoreData[this.index] = {} as StoreDataType;
			}
			formStoreData[this.index][parameter] = value;
			this.store.commit("setFormStoreData", formStoreData);
			this.refreshStoreFormData();
		},
		updateLegalData(parameter: string, value: string): void {
			const formLegalData: LegalDataType[] = this.store.state.formLegalData;	
			if(!formLegalData[this.index]) {
				formLegalData[this.index] = {} as LegalDataType;
			}
			formLegalData[this.index][parameter] = value;
			this.store.commit("setFormLegalData", formLegalData);
			this.refreshLegalFormData();
		},
		updateLegalPerson(parameter: string, value: string): void {
			const formLegalPerson: LegalPersonType[] = this.store.state.formLegalPerson;
			if(!formLegalPerson[this.index]) {
				formLegalPerson[this.index] = {} as LegalPersonType;
			}
			formLegalPerson[this.index][parameter] = value;
			this.store.commit("setFormLegalPerson", formLegalPerson);
			this.refreshLegalFormPerson();
		},
		async setCoordinates(): Promise<void> {
			const response: AxiosResponse = await axios.get("https://geocode-maps.yandex.ru/1.x/", {
				params: {
					apikey: "9cc9371c-b0ef-422b-b0be-2b1d49e32386",
					geocode: this.storeFormData.address,
					format: "json",
				},
			});

			if (response.status !== 200) return;

			this.coordinates = response.data as CoordinatesType;
			this.invokeChild(this.coordinates);
		},
	},
	mounted() {
		IMask(document.getElementById("telephoneInput" + this.index) as HTMLInputElement, {
			mask: "+{7} (000) 000-00-00",
		});
		IMask(document.getElementById("personTelephoneInput" + this.index) as HTMLInputElement, {
			mask: "+{7} (000) 000-00-00",
		});
	},
});
</script>

<style lang="scss" scoped>
@import "../styles/mixins";

.accordion {
	&__header {
		@include flex-center;
		justify-content: space-between;
		gap: 20px;
	}

	&__indicator {
		@include flex-center;

		border: var(--border);
		border-color: var(--color-light-dark-alt-gray);
		border-radius: var(--border-radius-circle);

		width: 35px;
		height: 35px;
	}

	&__icon {
		transition-duration: var(--transition-duration);
	}

	&[open] {
		.accordion__header {
			margin-bottom: 40px;
		}

		.accordion__icon {
			rotate: 180deg;
		}
	}
}
</style>
