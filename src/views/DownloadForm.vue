<template>
	<section class="download-form">
		<div class="edo__content download-form__content">
			<CustomTitle
				class="edo__title download-form__title"
				:text="customTitleText"
				:span="customTitleSpan"
				>{{ customTitlePunctuation }}</CustomTitle
			>

			<EdoSelect v-if="selection === 0" class="edo__select" :selections="['Да', 'Нет']" @setSelection="setSelection" />
			<FileField v-if="selection === 1" class="edo__file-field" />

			<div class="download-form__button-container">
				<TextWithHint
					v-if="selection === 0"
					:paragraphes="[
						{
							title: 'Фид (или продуктовый фид)',
							text: '— структурированный набор данных о товарах в формате файла CSV или XML.',
						},
						{
							title: '',
							text: 'Содержит информацию о продукте: его характеристики, отдельные категории, бренд, производителя, цену, описание.',
						},
						{
							title: '',
							text: 'Работает на Яндекс Маркете, Google Shopping, Авито, Озон и других маркетплейсах.',
						},
					]"
					>Что такое фид?</TextWithHint
				>
				<ArrowButton
					v-if="selection !== 0"
					direction="left"
					class="edo__arrow download-form__arrow"
					@click="$router.go(-1)"
				/>

				<CustomButton v-if="selection === 0" theme="red" class="download-form__button"
					>Далее</CustomButton
				>
				<CustomButton v-if="selection !== 0" theme="red" type="submit" class="download-form__button"
					>Отправить</CustomButton
				>
			</div>
		</div>
	</section>

	<SuperModal
		v-if="isModalShow"
		id="edoModal"
		title="Благодарим за сотрудничество!"
		:selection="selection"
		@setSelection="setSelection"
		@close="closeModal"
	>
		<Gratitude v-if="selection == 1" @close="closeModal" />
	</SuperModal>
</template>

<script lang="ts" setup>
import { Ref, ref } from "vue";
import EdoSelect from "../components/Edo/EdoSelect.vue";
import SuperModal from "../components/SuperModal.vue";
import Gratitude from "../components/DownloadForm/Gratitude.vue";
import router from "../router";
import { useStore } from "vuex";

const store = useStore();
const selection: Ref<number> = ref(0);
const isModalShow: Ref<boolean> = ref(false);

const customTitleText: Ref<string> = ref("У вас есть ФИД в формате");
const customTitleSpan: Ref<string> = ref("xml");
const customTitlePunctuation: Ref<string> = ref("?");

const showModal = (): void => {
	isModalShow.value = true;
};

const closeModal = (): void => {
	isModalShow.value = false;
};

const setSelection = (value: number): void => {
	selection.value = value;

	if (selection.value === 1) {
		customTitleText.value = "Пожалуйста, загрузите его";
		customTitleSpan.value = "в форму";
		customTitlePunctuation.value = "";
	}
	if (selection.value === 2) {
		customTitleText.value = "Вы можете попросить";
		customTitleSpan.value = "IT-специалиста";
		customTitlePunctuation.value = "вашей компании подготовить такой ФИД?";
	}
};
</script>

<style lang="scss">
.download-form {
	&__content {
		&__title,
		.download-form__title {
			width: fit-content;
			height: fit-content;
			padding: 24px;
		}
	}

	&__button-container {
		display: flex;
		align-items: center;
		justify-content: space-between;

		margin-top: 95px;
		width: 100%;
	}

	&__button {
		width: 240px;
	}

	&__arrow {
		position: static;
	}
}
</style>
