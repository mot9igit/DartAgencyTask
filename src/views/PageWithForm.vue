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

					<section class="store form__store">
						<div class="store__info">
							<h3 class="store__title">Данные магазина</h3>
							<p class="form__text">
								Эта информация необходима для того, чтобы знать, к кому обращаться в случае вопросов
								по заказам в вашем магазине
							</p>
						</div>
						<div class="store__data">
							<div class="store__input-container">
								<CustomInput class="form__input" />
								<CustomInput class="form__input" />
							</div>
							<div class="map store__map">
								<img src="/img/map.png" alt="map image" />
								<CustomButtom theme="black" class="form__button">Выбрать на карте</CustomButtom>
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

					<section class="order form__order">
						<div class="order__info">
							<h6 class="order__title">Организационно-правовая форма</h6>
							<CustomCheckbox
								id="orderCopy"
								label="Копировать данные организационно-правовой формы
							для остальных магазинов"
								class="form__checkbox"
							/>
						</div>
					</section>
				</main>
			</form>
		</main>
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
