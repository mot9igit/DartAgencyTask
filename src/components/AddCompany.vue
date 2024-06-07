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
							:value="company.name"
							class="form__input"
						/>
						<CustomInput
							placeholder="Адрес магазина"
							:value="company.address"
							class="form__input"
						/>
					</div>
					<div class="map form__map">
						<!-- <img src="/img/map.png" alt="map" class="map__img" /> -->
						<Map class="map__img" />
						<CustomButton theme="black" class="form__button map__button"
							>Выбрать на карте</CustomButton
						>
					</div>
					<CustomCheckbox
						:id="'storeMode' + index"
						label="Работа в режиме магазина*"
						class="form__checkbox store-data__checkbox"
						@onChange="setCopyIndex"
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

						<!-- <CustomInput placeholder="ИНН" :required="true" class="form__input" /> -->
						<CustomInputWithDropdown
							:id="'innSelect' + index"
							placeholder="ИНН"
							:required="true"
							:value="checkValue(companyForInn.data?.inn)"
							class="form__input"
							:companyId="index"
							@refreshCompanyForInn="refreshCompanyForInn"
						/>
						<CustomInput
							placeholder="КПП"
							:disabled="true"
							:value="checkValue(companyForInn.data?.kpp)"
							class="form__input"
						/>
						<CustomInput
							placeholder="ОГРН"
							:disabled="true"
							:value="checkValue(companyForInn.data?.ogrn)"
							class="form__input"
						/>
						<CustomInput
							placeholder="Название юридического лица"
							:disabled="true"
							:value="checkValue(companyForInn.value)"
							class="form__input"
						/>
						<CustomSelect
							:id="'taxSelect' + index"
							placeholder="Система налогообложения"
							:disabled="true"
							:companies="[]"
							class="form__input"
						/>
						<CustomInput
							placeholder="Юридический Адрес"
							:value="checkValue(companyForInn.data?.address?.value)"
							:disabled="true"
							class="form__input"
						/>
						<CustomInput placeholder="Фактический адрес" :required="true" class="form__input" />
						<NdsSelect
							id="ndsSelect"
							placeholder="НДС"
							:required="true"
							class="form__input"
						/>
						<CustomInput placeholder="БИК" :required="true" class="form__input" />
						<CustomInput placeholder="Банк" :disabled="true" class="form__input" />
						<CustomInput placeholder="К/с" :disabled="true" class="form__input" />
						<CustomInput placeholder="Р/с" :required="true" class="form__input" />
					</div>
					<div class="container__input-container ur-store-data__input-container">
						<CustomInput placeholder="Телефон/факс" :required="true" class="form__input" />
						<CustomInput placeholder="Email" :required="true" class="form__input" />
						<CustomInput placeholder="ФИО подписанта" :required="true" class="form__input" />
						<CustomInput placeholder="Должность подписанта" :required="true" class="form__input" />
						<CustomInput
							placeholder="Основание действий подписанта"
							:required="true"
							class="form__input"
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
						:id="'lprDataCopy' + index"
						label="Копировать данные лица ответственного за подключение для остальных магазинов"
						class="form__checkbox"
					/>
				</div>
				<div class="container__data">
					<div class="container__input-container">
						<CustomInput placeholder="Должность" :required="true" class="form__input" />
						<CustomInput placeholder="ФИО" class="form__input" />
						<CustomInput placeholder="Телефон" class="form__input" />
						<CustomInput placeholder="Email" :required="true" class="form__input" />
					</div>
				</div>
			</section>
		</details>
	</section>
</template>

<script lang="ts">
import { Ref, defineComponent, ref } from "vue";
import { SelectCompanyType } from "../types/SelectCompanyType";
import { CompanyType } from "./UI/CustomInputWithDropdown/CustomInputWithDropdown.vue";
import { useStore } from "vuex";
import Map from "./Map.vue";

export default defineComponent({
	setup() {
		const store = useStore();
		let companyForInn: Ref<CompanyType> = ref({} as CompanyType);

		return {
			store,
			companyForInn,
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
		}
	},
	methods: {
		checkValue(value: string) {
			return value == null || value == "" ? "" : value;
		},
		refreshCompanyForInn() {
			this.companyForInn = this.store.state.companiesForInn[this.index];
		},
		setCopyIndex(e: InputEvent) {
			if((e.target as HTMLInputElement).checked) {
				this.$emit("setCopyIndex", this.index);
			}
		},
	},
	mounted() {
		if(this.copyIndex != -1) {
			this.companyForInn = this.store.state.companiesForInn[this.copyIndex];
		}
	}
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
