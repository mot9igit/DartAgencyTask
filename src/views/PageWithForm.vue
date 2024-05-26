<template>
	<section class="form-page">
		<header class="header container form-page__header">
			<a href="https://mst.tools/" target="_blank">
				<img src="../assets/logo.svg" alt="logo" class="header__logo" />
			</a>
			<div class="header__content">
				<h2 class="header__title">Хотите продавать быстро?</h2>
				<p class="header__text">Добро пожаловать в наш маркетплейс!</p>
				<CustomButton theme="red" class="header__button">Заполнить форму</CustomButton>
			</div>

			<div class="header__blackout"></div>

			<img src="../assets/svg/drill.svg" alt="drill image" class="header__img header__img--drill" />
			<img src="../assets/svg/lines.svg" alt="drill image" class="header__img header__img--lines" />
		</header>

		<main class="main container form-page__main">
			<section class="start main__start">
				<h3 class="start__titl">Что нам необходимо<br />для начала работы</h3>
				<div class="start__steps-container">
					<div class="step__wrapper">
						<span class="step__mark">1</span>
						<p class="step start__step">Заполните форму</p>
					</div>
					<img src="../assets/svg/arrow.svg" class="start__arrow" />
					<div class="step__wrapper">
						<span class="step__mark">2</span>
						<p class="step start__step">Подписываем договор</p>
					</div>
					<img src="../assets/svg/arrow.svg" class="start__arrow" />
					<div class="step__wrapper">
						<span class="step__mark">3</span>
						<p class="step start__step">Мы создаём модуль для 1С</p>
					</div>
					<div class="step__wrapper">
						<span class="step__mark">4</span>
						<p class="step start__step">Проводим сопоставление товаров</p>
					</div>
					<img src="../assets/svg/arrow.svg" class="start__arrow" />
					<div class="step__wrapper">
						<span class="step__mark">5</span>
						<p class="step start__step">Проводим обучение по работе на маркетплейсе</p>
					</div>
					<img src="../assets/svg/arrow.svg" class="start__arrow" />
					<div class="step__wrapper">
						<span class="step__mark">6</span>
						<p class="step start__step">Запускаем ваш магазин на маркетплейсе</p>
					</div>
				</div>
			</section>

			<form class="form main__form">
				<header class="form__header">
					<h3 class="form__title">Форма для подключения</h3>
					<p class="form__text">
						Обратите внимание на то, что мы предоставляем бесплатную помощь в подключении.
					</p>
				</header>

				<main class="form__main">
					<h4 class="form__subtitle">Компания №1</h4>

					<section class="form__container">
						<div class="container__info">
							<h3 class="container__title">Данные магазина</h3>
							<p class="form__text">
								Эта информация необходима для того, чтобы знать, к кому обращаться в случае вопросов
								по заказам в вашем магазине
							</p>
						</div>
						<div class="container__data">
							<div class="container__input-container">
								<CustomInput class="form__input" />
								<CustomInput class="form__input" />
							</div>
							<div class="map container__map">
								<img src="/img/map.png" alt="map image" />
								<CustomButtom theme="black" class="form__button map__button"
									>Выбрать на карте</CustomButtom
								>
							</div>
							<CustomCheckbox
								id="storeMode"
								label="Работа в режиме магазина*"
								class="form__checkbox"
							/>
							<span class="form__span"
								>* На вашем складе розничный покупатель может получить продукцию</span
							>
						</div>
					</section>

					<section class="form__container">
						<div class="container__info">
							<h6 class="container__title">Организационно-правовая форма</h6>
							<CustomCheckbox
								id="orderCopy"
								label="Копировать данные организационно-правовой формы
							для остальных магазинов"
								class="form__checkbox"
							/>
						</div>
						<div class="container__input-container">
							<CustomRadio id="ip" label="Индивидуальный предприниматель" name="orderSelect" />
							<CustomRadio id="ur" label="Юридическое лицо" name="orderSelect" />
						</div>
					</section>

					<section class="form__container">
						<div class="container__info">
							<h6 class="form__title">Юридические данные магазина</h6>
							<CustomCheckbox
								id="storeDataCopy"
								label="Копировать юридические данные для остальных
							магазинов"
								class="form__checkbox"
							/>
							<div class="container__check">
								<p class="form__text form__text--white">
									Пожалуйста, проверьте автоматически заполненные поля
								</p>
								<img src="../assets/svg/not-error.svg" class="store-data__check-icon" />
							</div>
						</div>
						<div class="container__data">
							<div class="container__input-container container__input-container--border">
								<CustomInput placeholder="ИНН" required="true" class="form__input" />
								<CustomInput placeholder="КПП" class="form__input" />
								<CustomInput placeholder="ОГРН" class="form__input" />
								<CustomInput placeholder="Название юридического лица" class="form__input" />
								<CustomInput placeholder="Система налогообложения" class="form__input" />
								<CustomInput placeholder="Юридический Адрес" class="form__input" />
								<CustomInput placeholder="Фактический адрес" required="true" class="form__input" />
								<CustomInput placeholder="НДС" required="true" class="form__input" />
								<CustomInput placeholder="БИК" required="true" class="form__input" />
								<CustomInput placeholder="Банк" class="form__input" />
								<CustomInput placeholder="К/с" class="form__input" />
								<CustomInput placeholder="ИНН" required="true" class="form__input" />
							</div>
							<div class="container__input-container">
								<CustomInput placeholder="Телефон/факс" required="true" class="form__input" />
								<CustomInput placeholder="Email" required="true" class="form__input" />
								<CustomInput placeholder="ФИО подписанта" required="true" class="form__input" />
								<CustomInput
									placeholder="Должность подписанта"
									required="true"
									class="form__input"
								/>
								<CustomInput
									placeholder="Основание действий подписанта"
									required="true"
									class="form__input"
								/>
							</div>
						</div>
					</section>

					<section class="form__container">
						<div class="container__info">
							<h6 class="form__title">Данные лица ответственного за подключение (ЛПР)</h6>
							<p class="form__text">
								На старте и в последующем, нам необходимо знать, к кому обращаться при подключении.
							</p>
							<CustomCheckbox
								id="storeDataCopy"
								label="Копировать юридические данные для остальных
							магазинов"
								class="form__checkbox"
							/>
						</div>
						<div class="container__input-container">
							<CustomInput placeholder="Должность" required="true" class="form__input" />
							<CustomInput placeholder="ФИО" class="form__input" />
							<CustomInput placeholder="Телефон" class="form__input" />
							<CustomInput placeholder="Email" required="true" class="form__input" />
						</div>
					</section>

					<CustomButton theme="black" class="form__button">+ Добавить компанию</CustomButton>

					<section class="form__container">
						<div class="container__info">
							<h4 class="form__title">От сотрудников какой компании вы узнали о маркетплейсе</h4>
						</div>
						<div class="container__data">
							<CustomInput placeholder="Выберите компанию" class="form__input" />
						</div>
					</section>

					<CustomButton theme="red" type="submit" class="form__button">Отправить</CustomButton>
				</main>
			</form>
		</main>
		<footer class="footer form-page__footer">
			<div class="footer__contacts contacts">
				<a href="https://mst.tools/" target="_blank" class="footer__link">machinestore.ru</a>
				<p class="contacts__text">
					<a href="tel:+74993255250" class="footer__link">+7 (499) 325-52-50</a> – контактный
					телефон для вопросов
				</p>
			</div>
			<div class="footer__content container">
				<div class="footer__icon-container">
					<CustomIcon icon="vk" class="footer__icon" />
				</div>
				<p class="footer__text">© 2023 ООО МС</p>
			</div>
		</footer>
	</section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	setup() {
		return {};
	},
});
</script>

<style lang="scss" scoped>
@import "../styles/mixins";

.form-page {
	background-color: var(--color-alt-black);

	height: 100dvh;
	width: 100vw;

	&__header,
	.header {
		display: flex;
		flex-direction: column;
		gap: 88px;

		background: url("/img/background/bg-bright.png") no-repeat center center / cover;

		height: 580px;
		width: 100%;

		position: relative;

		&__logo {
			margin-top: 40px;
		}

		&__content {
			display: flex;
			align-items: flex-start;
			flex-direction: column;

			width: 381px;
		}

		&__title {
			margin-bottom: 17px;
		}

		&__text {
			color: var(--color-white);
		}

		&__button {
			height: 50px;
			margin-top: 32px;
			padding-inline: 35px;
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
			}

			&--lines {
				top: 42px;
				right: 132px;

				z-index: 1;
			}
		}
	}

	.form-page__main,
	.main {
		@include flex-center;
		flex-direction: column;
		gap: 80px;

		&__start,
		.start {
			display: flex;
			align-items: flex-start;
			flex-direction: column;
			gap: 55px;

			background-color: var(--color-light-black);
			border-radius: var(--border-radius-large);

			padding: 60px 80px;

			&__title {
			}

			&__steps-container {
				display: grid;
				grid-template: repeat(2, 1fr) / 1fr 4px 1fr 4px 1fr;
				align-items: center;
				gap: 44px;

				width: 970px;
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
	}
}

.container {
	padding-inline: 351px;
}
</style>
