<template>
	<section class="form-page">
		<header class="header container form-page__header">
			<a href="https://mst.tools/" target="_blank" class="header__logo-link">
				<img src="../assets/logo.svg" alt="logo" class="header__logo" />
			</a>
			<div class="header__content">
				<h2 class="header__title">Хотите продавать<br />быстро?</h2>
				<p class="header__text">Добро пожаловать в наш маркетплейс!</p>
				<a href="#form" class="header__button-link">
					<CustomButton theme="red" class="header__button">Заполнить форму</CustomButton>
				</a>
			</div>

			<div class="header__blackout"></div>

			<img src="../assets/svg/drill.svg" alt="drill image" class="header__img header__img--drill" />
			<img
				src="../assets/svg/lines.svg"
				alt="drill image"
				class="header__img header__img--lines hidden-tablet"
			/>
		</header>

		<main class="main container form-page__main">
			<section class="start main__start">
				<h3 class="start__title">Что нам необходимо<br />для начала работы</h3>
				<div class="start__steps-container">
					<div class="step__wrapper">
						<span class="step__mark">1</span>
						<p class="step start__step">Заполните форму</p>
					</div>
					<img src="../assets/svg/arrow.svg" class="start__arrow hidden-desktop-s" />
					<div class="step__wrapper">
						<span class="step__mark">2</span>
						<p class="step start__step">Подписываем договор</p>
					</div>
					<img src="../assets/svg/arrow.svg" class="start__arrow hidden-desktop-s" />
					<div class="step__wrapper">
						<span class="step__mark">3</span>
						<p class="step start__step">Мы создаём модуль для 1С</p>
					</div>
					<div class="step__wrapper">
						<span class="step__mark">4</span>
						<p class="step start__step">Проводим сопоставление товаров</p>
					</div>
					<img src="../assets/svg/arrow.svg" class="start__arrow hidden-desktop-s" />
					<div class="step__wrapper">
						<span class="step__mark">5</span>
						<p class="step start__step">Проводим обучение по работе на маркетплейсе</p>
					</div>
					<img src="../assets/svg/arrow.svg" class="start__arrow hidden-desktop-s" />
					<div class="step__wrapper">
						<span class="step__mark">6</span>
						<p class="step start__step">Запускаем ваш магазин на маркетплейсе</p>
					</div>
				</div>
			</section>

			<form class="form main__form" id="form">
				<header class="form__header">
					<h3 class="form__title">Форма для подключения</h3>
					<p class="form__text">
						Обратите внимание на то, что мы предоставляем бесплатную помощь в подключении.
					</p>
				</header>

				<main class="form__main">
					<AddCompany
						:company="company"
						:index="index"
						:key="index"
						:copyIndex="copyIndex"
						:personCopyIndex="personCopyIndex"
						:legalFormData="copyIndex === -1 ? legalFormData[index] : legalFormData[copyIndex]"
						:legalFormPerson="personCopyIndex === -1 ? legalFormPerson[index] : legalFormPerson[personCopyIndex]"
						@setCopyIndex="setCopyIndex"
						@setPersonCopyIndex="setPersonCopyIndex"
						@refreshLegalData="refreshLegalData"
						@refreshLegalPerson="refreshLegalPerson"
						v-for="(company, index) in companies"
					/>

					<CustomButton theme="black" class="form__button form__button--add" @click="addCompany"
						>+ Добавить компанию</CustomButton
					>

					<div class="form__line-wrapper">
						<hr class="form__line" />
					</div>

					<section class="form__container">
						<div class="container__info">
							<h4 class="form__title">От сотрудников какой компании вы узнали о маркетплейсе</h4>
						</div>
						<div class="container__data">
							<CustomSelect
								id="companySelect"
								placeholder="Выберите компанию"
								:companies="companiesInfo"
								class="form__input"
								@change="setCompany"
							/>
						</div>
					</section>

					<div class="form__line-wrapper">
						<hr class="form__line" />
					</div>

					<CustomButton theme="red" type="submit" class="form__button form__button--submit"
						>Отправить</CustomButton
					>
				</main>
			</form>
		</main>
		<footer class="footer form-page__footer">
			<div class="footer__contacts contacts container">
				<a href="https://mst.tools/" target="_blank" class="footer__text footer__link"
					>machinestore.ru</a
				>
				<p class="contacts__text">
					<a href="tel:+74993255250" class="footer__link">+7 (499) 325-52-50</a> – контактный
					телефон<br />для вопросов
				</p>
			</div>
			<div class="footer__content container">
				<div class="footer__icon-container">
					<CustomIcon icon="vk" link="https://vk.com" class="footer__icon" />
				</div>
				<p class="footer__text footer__text--large">© 2023 ООО МС</p>
			</div>
		</footer>
	</section>
</template>

<script lang="ts">
import { Ref, defineComponent, ref } from "vue";
import { companiesInfo } from "../data/CompaniesInfo";
import { SelectCompanyType } from "../types/SelectCompanyType";
import AddCompany from "../components/AddCompany.vue";
import { useStore } from "vuex";
import { LegalDataType, LegalPersonType, StoreDataType } from "../types/DataFromForm";

export default defineComponent({
	setup() {
		const companies: Ref<any[]> = ref([AddCompany]);
		const company: Ref<SelectCompanyType> = ref({} as SelectCompanyType);
		let copyIndex: Ref<number> = ref(-1);
		let personCopyIndex: Ref<number> = ref(-1);

		const store = useStore();

		const storeFormData: Ref<StoreDataType> = ref({} as StoreDataType);
		const legalFormData: Ref<LegalDataType> = ref({} as LegalDataType);
		const legalFormPerson: Ref<LegalPersonType> = ref({} as LegalPersonType);

		return {
			companiesInfo,
			companies,
			company,
			copyIndex,
			personCopyIndex,
			store,
			storeFormData,
			legalFormData,
			legalFormPerson,
		};
	},
	components: {
		AddCompany,
	},
	methods: {
		setCompany(company: SelectCompanyType) {
			this.company = company;
		},
		addCompany() {
			this.companies.push(AddCompany);			
		},
		setCopyIndex(index: number) {
			this.copyIndex = index;
		},
		setPersonCopyIndex(index: number) {
			this.personCopyIndex = index;
		},
		refreshLegalFormData() {
			this.legalFormData = this.store.state.formLegalData;
		},
		refreshLegalData() {
			this.legalFormData = this.store.state.formLegalData;
		},
		refreshLegalPerson() {
			this.legalFormPerson = this.store.state.formLegalPerson;
		},
	},
});
</script>

<style lang="scss">
@import "../styles/mixins";

.form-page {
	background-color: var(--color-alt-black);

	height: 100dvh;
	width: 100vw;

	&__header,
	.header {
		@include adaptive-background;

		display: flex;
		flex-direction: column;
		gap: 88px;

		height: 580px;
		width: 100%;

		position: relative;
		overflow: hidden;

		@include tablet {
			padding-inline: clamp(20px, #{calc(40 * 100 / 768)}vw, 40px);
		}

		@include mobile-tablet {
			justify-content: space-between;
			padding-bottom: 50px;
		}

		@include mobile {
			padding-inline: 20px;
		}

		&__logo-link {
			margin-top: 40px;
		}

		&__logo {
			position: relative;
			z-index: 10;

			@include tablet {
				margin-top: clamp(20px, #{calc(40 * 100 / 768)}vw, 40px);
				width: clamp(154px, #{calc(274 * 100 / 768)}vw, 274px);
			}

			@include mobile {
				margin-top: 20px;
				width: 154px;
			}
		}

		&__content {
			display: flex;
			align-items: flex-start;
			flex-direction: column;

			z-index: 10;

			// width: 381px;
		}

		&__title {
			margin-bottom: 17px;
		}

		&__text {
			color: var(--color-white);
		}

		&__button-link {
			margin-top: 32px;
		}

		&__button {
			height: 50px;
			padding-inline: 35px;

			@include mobile {
				padding-inline: 56px;
			}
		}

		&__blackout {
			position: absolute;
			left: 0;
			bottom: 0;

			background: linear-gradient(360deg, #111 0%, rgba(17, 17, 17, 0) 85.65%);

			height: 184px;
			width: 100%;
		}

		&__img {
			position: absolute;

			&--drill {
				top: 70px;
				right: 255.75px;

				z-index: 2;

				@include desktop-l {
					right: clamp(10px, #{calc(255.75 * 100 / 1920)}vw, 255.75px);
				}

				@include desktop {
					right: 10px;
				}

				@include desktop-s {
					width: 684px;
					top: calc(100% - 800px / 2);
				}

				@include tablet {
					width: clamp(435px, #{calc(684 * 100 / 768)}vw, 684px);
				}

				@include mobile {
					width: 435px;
				}
			}

			&--lines {
				top: 42px;
				right: 132px;

				z-index: 1;
			}
		}
	}

	&__main,
	.main {
		@include flex-center;
		flex-direction: column;
		gap: 80px;

		background-color: var(--color-alt-black);

		@include tablet {
			gap: clamp(50px, #{calc(80 * 100 / 768)}vw, 80px);
			padding-inline: clamp(20px, #{calc(40 * 100 / 768)}vw, 40px);
		}

		@include mobile-tablet {
			// button {
			// 	width: 100%;
			// }
		}

		@include mobile {
			gap: 50px;
			padding-inline: 20px;
		}

		&__start,
		.start {
			display: flex;
			align-items: flex-start;
			flex-direction: column;
			gap: 55px;

			background-color: var(--color-light-black);
			border-radius: var(--border-radius-large);

			padding: 60px 80px;

			@include desktop-s {
				padding-inline: clamp(20px, #{calc(80 * 100 / 1920)}vw, 80px);
			}

			@include tablet {
				padding: 60px 20px;
			}

			&__title {
			}

			&__steps-container {
				display: grid;
				grid-template: repeat(2, 1fr) / 1fr 4px 1fr 4px 1fr;
				align-items: center;
				gap: 44px;

				max-width: 970px;

				@include desktop-s {
					grid-template: auto / repeat(3, 1fr);
					column-gap: clamp(5px, #{calc(44 * 100 / 1920)}vw, 44px);
				}

				@include tablet {
					column-gap: 5px;
					row-gap: clamp(32px, #{calc(44 * 100 / 1920)}vw, 44px);
				}

				@include tablet-mobile {
					grid-template: auto / repeat(2, 1fr);
				}

				@include mobile-tablet {
					grid-template: auto / 1fr;
				}

				@include mobile {
					row-gap: 32px;
				}
			}

			&__arrow {
				rotate: 180deg;
				height: 10px;
			}

			&__step,
			.step {
				font: {
					size: 22px;
					weight: 500;
				}

				color: var(--color-white);
				line-height: 22px;
				letter-spacing: 0.5px;

				position: relative;

				&__wrapper {
					display: flex;
					align-items: flex-start;
					justify-content: flex-start;
					gap: 16px;
				}

				&__mark {
					@include flex-center;

					font: {
						size: 22px;
						weight: 500;
					}

					flex-shrink: 0;

					background-color: var(--color-alt-gray);
					border-radius: var(--border-radius-circle);

					color: var(--color-light-black);

					width: 32px;
					aspect-ratio: 1;
				}
			}
		}

		&__form,
		.form {
			width: 100%;

			&__input {
				width: 100%;
			}

			&__button {
				padding-inline: 35px;
				align-self: flex-end;

				&--add {
					margin-top: 40px;
				}
			}

			&__text {
				&--white {
					color: var(--color-white);
				}
			}

			&__header {
				display: flex;
				flex-direction: column;
				gap: 22px;
			}

			&__main {
				display: flex;
				flex-direction: column;
			}

			&__line-wrapper {
				margin-block: 40px;

				.form__line {
					background-color: var(--color-dark-gray);
					border: none;

					height: 1px;
					width: 100%;
				}
			}

			&__container {
				display: flex;
				justify-content: space-between;
				gap: 90px;

				@include desktop-l {
					gap: clamp(50px, #{calc(90 * 100 / 1920)}vw, 90px);
				}

				@include desktop {
					gap: 50px;
				}

				@include desktop-s {
					flex-direction: column;
				}
			}

			&__subtitle {
				// margin-bottom: 40px;
			}

			&__store-data,
			.store-data {
				&__input-container {
					margin-bottom: 16px;
				}

				&__map,
				.map {
					position: relative;
					margin-bottom: 25px;
					width: 100%;

					&__overlay {
						position: absolute;

						background-color: rgba(0, 0, 0, 0.5);

						width: 100%;
						height: 100%;

						z-index: 2;
					}

					&__img {
						width: 100%;
						z-index: 1;
					}

					&__button {
						z-index: 3;

						@include absolute-center;
						// padding-inline: 17px;

						@include mobile {
							width: calc(100% - 17px);
						}
					}
				}

				&__checkbox {
					margin-bottom: 16px;
					width: 50%;
				}

				&__span {
					font: {
						size: 12px;
					}

					color: var(--color-light-dark-alt-gray);
				}
			}

			&__order,
			.order {
				@include desktop {
					gap: clamp(27px, #{calc(60 * 100 / 1920)}vw, 50px);
				}

				@include desktop-s {
					gap: 27px;
				}

				&__input-container {
					gap: 24px;
					width: fit-content;
				}
			}

			&__ur-store-data,
			.ur-store-data {
				&__check {
					--border-dash: 8px;

					@include flex-center;
					gap: 16px;

					background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='%23656565FF' stroke-width='1' stroke-dasharray='8' stroke-dashoffset='5' stroke-linecap='square'/%3e%3c/svg%3e");
					padding: 24px;
					margin-top: 82px;

					@include desktop {
						margin-top: clamp(0px, #{calc(82 * 100 / 1920)}vw, 82px);
					}

					@include desktop-s {
						margin-top: 0;
					}
				}

				&__input-container {
					margin-top: 25px;
				}
			}
		}
	}

	&__footer,
	.footer {
		display: flex;
		flex-direction: column;

		background-color: var(--color-alt-black);

		padding-top: 80px;

		@include tablet {
			margin-top: clamp(50px, #{calc(80 * 100 / 768)}vw, 80px);
		}

		@include mobile {
			margin-top: 50px;
		}

		&__contacts {
			display: flex;
			flex-direction: column;
			gap: 10px;
		}

		&__content {
			display: flex;
			justify-content: space-between;

			border-top: 1px solid var(--color-dark-gray);

			padding-block: 24px 40px;
			margin-top: 24px;
		}

		&__text {
			font-size: 13px;
			line-height: 20px;

			&--large {
				font-size: 15px;
			}
		}

		&__link {
			color: var(--color-white);
		}
	}
}

.container {
	padding-inline: 351px;

	@include desktop-l {
		padding-inline: clamp(40px, #{calc(351 * 100 / 1980)}vw, 351px);
	}

	@include desktop {
		padding-inline: 40px;
	}

	&__info {
		display: flex;
		flex-direction: column;
		gap: 22px;

		min-width: 375px;
		width: 375px;

		@include desktop-s {
			flex-direction: row;
			justify-content: space-between;
			align-items: flex-end;
			width: 100%;
		}

		@include tablet {
			flex-direction: column;
			align-items: flex-start;
			min-width: 100%;
		}

		&--column {
			flex-direction: column;
			align-items: flex-start;
		}
	}

	&__info-block {
		display: flex;
		flex-direction: column;
		gap: 22px;
	}

	&__data {
		display: flex;
		flex-direction: column;

		width: 100%;
	}

	&__input-container {
		display: grid;
		grid-template: auto / repeat(2, 1fr);
		row-gap: 25px;
		column-gap: 24px;

		width: 100%;

		position: relative;

		@include tablet-mobile-average {
			grid-template: auto / 1fr;
		}
	}

	&__border {
		--border-dash: 8px;

		position: absolute;
		top: 0;
		left: -23px;

		height: 100%;
		width: 10px;

		background: linear-gradient(
				to bottom,
				var(--color-middle-dark-gray) var(--border-dash),
				transparent var(--border-dash)
			)
			repeat-y center / 1px calc(var(--border-dash) * 2);
	}
}
</style>
