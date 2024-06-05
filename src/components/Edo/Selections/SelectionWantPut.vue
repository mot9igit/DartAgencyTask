<template>
	<div class="selection">
		<h6 class="selection__title">Контур.Диадок</h6>
		<div class="selection__content">
			<div class="modal__text-container selection__text-container">
				<p class="selection__text">
					Мы являемся официальными партнерами компании СКБ «Контур». Это лидер рынка систем
					электронного электрооборота. При подключении их ЭДО «Диадок» Вам не нужно будет ежемесячно
					вносить платежи, Вы платите только за отправленные документы.
				</p>
				<p class="selection__text">
					Заполните небольшую форму и специалисты «Контура» свяжутся с вами для подключения.
				</p>
			</div>

			<CustomInput placeholder="ИНН" required="true" class="selection__input" />
			<CustomInput placeholder="Телефон" required="true" class="selection__input" />
			<CustomInput placeholder="Email" required="true" class="selection__input" />
			<CustomInput placeholder="ФИО" required="true" class="selection__input" />

			<div class="selection__links">
				<a href="https://www.diadoc.ru/docs/faq/faq-166" class="selection__link">Что такое ЭДО?</a>
				<a
					href="https://www.diadoc.ru/articles/22574-chto_takoe_diadok#:~:text=Диадок%20—%20сервис%20ЭДО%20от%20Контура,документооборота%20с%20применением%20электронной%20подписи."
					class="selection__link"
					>Что такое Контур.Диадок?</a
				>
			</div>

			<RouterLink to="/edo/want-put" class="selection__button-link">
				<CustomButton class="selection__button modal__button" @click="close"
					>Отправить</CustomButton
				>
			</RouterLink>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { RouterLink } from "vue-router";

export default defineComponent({
	name: "SelectionWantPut",

	setup() {
		return {};
	},
	methods: {
		close(): void {
			this.$emit("close");
		},
	},
});
</script>

<style lang="scss" scoped>
.selection {
	&__title {
		font: {
			size: 14px;
			weight: 500;
		}

		color: var(--color-white);
		letter-spacing: 0.25px;

		margin-bottom: 16px;
	}

	&__content {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 25px;
	}

	&__input {
		width: 100%;
	}

	&__links {
		display: flex;
		gap: 24px;

		.selection__link {
			color: var(--color-light-dark-gray);
			text-decoration: underline;
			cursor: pointer;
		}
	}

	&__button-link {
		margin-top: 40px;
	}

	&__button {
		padding-inline: 55px;
	}
}
</style>
