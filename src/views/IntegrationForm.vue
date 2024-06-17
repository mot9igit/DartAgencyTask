<template>
	<section class="form-page">
		<header class="header container form-page__header">
			<a href="https://mst.tools/" target="_blank" class="header__logo-link">
				<img src="../assets/logo.svg" alt="logo" class="header__logo" />
			</a>
			<div class="header__content">
				<h2 class="header__title">Интеграция<br />с вашей учетной<br />системой</h2>
				<p class="header__text">Внесите данные для быстрой интеграции</p>
				<a href="#form" class="header__button-link">
					<CustomButton theme="red" class="header__button">Заполнить форму</CustomButton>
				</a>
			</div>

			<div class="header__blackout"></div>

			<img src="../assets/svg/gear.svg" alt="gear image" class="header__img header__img--gear" />
		</header>

		<main class="main container form-page__main integration-form">
			<form class="form main__form" id="form" @submit.prevent="onSubmit">
				<header class="form__header">
					<h3 class="form__title">Форма для интеграции</h3>
				</header>

				<div class="form__line-wrapper">
					<hr class="form__line" />
				</div>

				<main class="form__main">
					<section class="form__container">
						<div class="container__info container__info--column">
							<h6 class="form__title">Интеграция</h6>
						</div>
						<div class="container__data">
							<div class="container__input-container">
								<TextSelect
									id="configNameInput"
									ref="configNameInput"
									placeholder="Имя конфигурации"
									:value="integrationData.config_name"
									:required="true"
									class="form__input"
									:data="configNames"
									@change="(e: any) => updateIntegrationData('config_name', e.name)"
								/>
								<CustomInput
									ref="configVersionInput"
									placeholder="Версия конфигурации"
									:value="integrationData.config_version"
									:required="true"
									class="form__input"
									:onChange="(e: any) => updateIntegrationData('config_version', e.target.value)"
								/>
								<CustomInput
									ref="platformVersionInput"
									placeholder="Версия платформы"
									:value="integrationData.platform_version"
									:required="true"
									class="form__input"
									:onChange="(e: any) => updateIntegrationData('platform_version', e.target.value)"
								/>
								<CustomCheckbox
									@change="(e: any) => updatePerson1CData('self_installation', e.target.checked)"
									id="selfInstallation"
									label="Самостоятельная установка"
									class="form__checkbox"
								/>
							</div>
						</div>
					</section>

					<div class="form__line-wrapper">
						<hr class="form__line" />
					</div>

					<section class="form__container">
						<div class="container__info container__info--column">
							<h6 class="form__title">Данные ответственного за 1C</h6>
						</div>
						<div class="container__data">
							<div class="container__input-container">
								<CustomInput
									ref="person1CNameInput"
									placeholder="ФИО"
									:value="person1CData.fio"
									:required="true"
									class="form__input"
									:onChange="(e: any) => updatePerson1CData('fio', e.target.value)"
								/>
								<CustomInput
									id="person1CTelephoneInput"
									ref="person1CTelephoneInput"
									placeholder="Телефон"
									:value="person1CData.telephone"
									:required="true"
									class="form__input"
									:onChange="(e: any) => updatePerson1CData('telephone', e.target.value)"
								/>
								<CustomInput
									ref="person1CEmailInput"
									placeholder="Email"
									:value="person1CData.email"
									:required="true"
									class="form__input"
									:onChange="(e: any) => updatePerson1CData('email', e.target.value)"
								/>
							</div>
						</div>
					</section>

					<div class="form__line-wrapper">
						<hr class="form__line" />
					</div>

					<div class="integration-form__container">
						<FileIcon
							type="pdf"
							href="https://mst.tools/integration.pdf"
							class="integration-form__icon"
							>Скачать инструкцию</FileIcon
						>
						<div class="integration-form__button-container">
							<CustomButton
								theme="black"
								class="form__button form__button--submit"
								@click="showModal"
								>У нас другая учетная система</CustomButton
							>
							<CustomButton theme="red" type="submit" class="form__button form__button--submit"
								>Отправить</CustomButton
							>
						</div>
					</div>
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
					<CustomIcon
						icon="vk"
						link="https://vk.com/machinestore_association"
						class="footer__icon"
					/>
				</div>
				<p class="footer__text footer__text--large">© 2024 ООО МС</p>
			</div>
		</footer>
	</section>

	<SuperModal
		v-if="isModalShow"
		id="edoModal"
		title="Укажите вашу учетную систему"
		@close="closeModal"
	>
		<Account @close="closeModal" />
	</SuperModal>
</template>

<script lang="ts" setup>
import { Ref, onMounted, ref } from "vue";
import { useStore } from "vuex";
import { IntegrationDataType, Person1CDataType } from "../types/DataFromIntegrationForm";
import IMask from "imask";
import axios, { AxiosResponse } from "axios";
import { DataType } from "../components/UI/TextSelect/TextSelect.vue";
import SuperModal from "../components/SuperModal.vue";
import Account from "../components/IntegrationForm/Account.vue";

const store = useStore();
const integrationData: Ref<IntegrationDataType> = ref({} as IntegrationDataType);
const person1CData: Ref<Person1CDataType> = ref({} as Person1CDataType);

const isModalShow: Ref<boolean> = ref(false);

// Data
const configNames: DataType[] = [
	{ name: "1С7.7:Торговля и склад" },
	{ name: "1С8:Управление торговлей" },
	{ name: "1С8:Управление небольшой фирмой" },
	{ name: "1С8:Розница" },
	{ name: "1С8:Бухгалтерия" },
	{ name: "1С8:Комплексная автоматизация" },
	{ name: "1С8:ERP Управление предприятием 2" },
];

// Methods
const onSubmit = async (): Promise<void> => {
	const response: AxiosResponse = await axios.post(
		"some url",
		{
			data: {
				...integrationData.value,
				...person1CData.value,
			},
		},
		{
			headers: {
				"Content-Type": "application/json",
			},
		}
	);

	if (response.status !== 200) return;

	// Redirect
	// ...
};

const closeModal = (): void => {
	isModalShow.value = false;
};

const showModal = (): void => {
	isModalShow.value = true;
};

const updateIntegrationData = (key: string, value: string): void => {
	integrationData.value[key] = value;
};

const updatePerson1CData = (key: string, value: string): void => {
	person1CData.value[key] = value;
};

// Mounted
onMounted(() => {
	IMask(document.getElementById("person1CTelephoneInput") as HTMLInputElement, {
		mask: "+{7} (000) 000-00-00",
	});
});
</script>

<style lang="scss" scoped>
@import "../styles/_media.scss";

.header__img {
	&--gear {
		top: 0;
		right: 350px;
		z-index: 2;

		width: 560px;

		@include desktop-l {
			right: clamp(160px, #{calc(350 * 100 / 1920)}vw, 350px);
		}

		@include desktop {
			right: clamp(40px, #{calc(160 * 100 / 1280)}vw, 160px);
		}

		@include desktop-s {
			right: clamp(0px, #{calc(160 * 100 / 1024)}vw, 40px);
			width: clamp(400px, #{calc(560 * 100 / 1024)}vw, 560px);
		}

		@include tablet {
			top: 75px;
			right: 0;
			width: clamp(260px, #{calc(400 * 100 / 768)}vw, 400px);
		}

		@include tablet-mobile-average {
			top: 50px;
			right: -50px;
		}
	}
}

.integration-form {
	padding-top: 120px;

	&__container {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	&__button-container {
		display: flex;
		justify-content: flex-end;
		gap: 25px;
	}
}
</style>
