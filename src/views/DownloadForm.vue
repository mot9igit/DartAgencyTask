<template>
	<form class="download-form" @submit.prevent="onSubmit">
		<div class="edo__content download-form__content">
			<CustomTitle
				class="edo__title download-form__title"
				:text="customTitleText"
				:span="customTitleSpan"
				>{{ customTitlePunctuation }}</CustomTitle
			>

			<EdoSelect
				v-if="selection === 0"
				class="edo__select download-form__select"
				:selections="['Да', 'Нет']"
				@setSelection="setSelection"
			/>
			<FileField
				v-if="(selection === 1 || selection === 3) && fileInputSelection === 'file'"
				class="download-form__file-field"
				:showLink="noSelection === 1"
				@onChange="setFile"
			/>
			<CustomInput
				v-if="(selection === 1 || selection === 3) && fileInputSelection === 'link'"
				class="download-form__input"
				placeholder="Ссылка"
				:required="true"
				:onChange="(e: any) => file = e.target.value"
			/>
			<div v-if="selection === 1 || selection === 3" class="download-form__radio-container">
				<CustomRadio
					id="downloadFormRadio1"
					name="radio"
					label="Файл"
					:checked="true"
					@onChange="() => (fileInputSelection = 'file')"
				/>
				<CustomRadio
					id="downloadFormRadio2"
					name="radio"
					label="Ссылка"
					@onChange="() => (fileInputSelection = 'link')"
				/>
			</div>
			<EdoSelect
				v-if="selection === 2"
				class="edo__select download-form__select"
				:selections="['Да', 'Нет']"
				@setSelection="setNoSelection"
			/>

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
				class="download-form__text-hint visible-tablet-mobile-average"
				>Что такое фид?</TextWithHint
			>

			<div class="download-form__button-container hidden-tablet-mobile-average">
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
					class="download-form__text-hint hidden-tablet-mobile-average"
					>Что такое фид?</TextWithHint
				>
				<ArrowButton
					v-if="selection !== 0"
					direction="left"
					class="edo__arrow download-form__arrow"
					@click="
						() => {
							if (selection === 1 && noSelection === 1) {
								setNoSelection(0);
								setSelection(2);
							} else if (selection !== 0) setSelection(0);
							else if (noSelection !== 0) setNoSelection(0);
						}
					"
				/>

				<CustomButton v-if="selection === 0" theme="red" class="download-form__button"
					>Далее</CustomButton
				>
				<CustomButton v-if="selection !== 0" theme="red" type="submit" class="download-form__button"
					>Отправить</CustomButton
				>
			</div>
		</div>

		<div class="download-form__button-container visible-tablet-mobile-average">
			<ArrowButton
				v-if="selection !== 0"
				direction="left"
				class="edo__arrow download-form__arrow"
				@click="
					() => {
						if (selection === 1 && noSelection === 1) {
							setNoSelection(0);
							setSelection(2);
						} else if (selection !== 0) setSelection(0);
						else if (noSelection !== 0) setNoSelection(0);
					}
				"
			/>

			<CustomButton v-if="selection === 0" theme="red" class="download-form__button"
				>Далее</CustomButton
			>
			<CustomButton v-if="selection !== 0" theme="red" type="submit" class="download-form__button"
				>Отправить</CustomButton
			>
		</div>
	</form>

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
import axios, { AxiosResponse } from "axios";
import CustomInput from "../components/UI/CustomInput.vue";

const store = useStore();
const selection: Ref<number> = ref(0);
const noSelection: Ref<number> = ref(0);
const isModalShow: Ref<boolean> = ref(false);

const customTitleText: Ref<string> = ref("У вас есть ФИД в формате");
const customTitleSpan: Ref<string> = ref("xml");
const customTitlePunctuation: Ref<string> = ref("?");

const file: Ref<File | string | null> = ref(null);
const fileInputSelection: Ref<string> = ref("file");

const showModal = (): void => {
	isModalShow.value = true;
};

const closeModal = (): void => {
	isModalShow.value = false;
};

const setSelection = (value: number): void => {
	selection.value = value;

	if (selection.value === 0) {
		setNoSelection(0);

		customTitleText.value = "У вас есть ФИД в формате";
		customTitleSpan.value = "xml";
		customTitlePunctuation.value = "?";
	}
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

const setNoSelection = (value: number): void => {
	noSelection.value = value;

	if (noSelection.value === 1) {
		setSelection(1);

		customTitleText.value = "В таком случае вам придется подготовить файл excel";
		customTitleSpan.value = "вручную";
		customTitlePunctuation.value = "";
	}
	if (noSelection.value === 2) {
		setSelection(0);
	}
};

const setFile = (value: File | null): void => {
	file.value = value;
};

const onSubmit = async () => {
	if (file.value == null || file.value == "") return;

	const formData = new FormData();
	formData.append("file", file.value);

	const response: AxiosResponse = await axios.post(
		"",
		{
			data: formData,
		},
		{
			headers: {
				"Content-Type": "multipart/form-data",
			},
		}
	);

	if (response.status !== 200) return;

	showModal();
};
</script>

<style lang="scss">
@import "../styles/media";
@import "../styles/mixins";

.download-form {
	@include flex-center;

	width: 100%;
	min-height: 100dvh;

	@include tablet {
		align-items: flex-start;
	}

	&__content {
		position: relative;
		left: 0;
		top: 0;
		translate: 0;

		@include tablet {
			margin-top: 40px;
		}

		@include tablet-mobile-average {
			z-index: 100;
		}

		@include mobile-tablet {
			position: relative;
			top: 0;
			left: 0;
			translate: 0;

			margin: 30px 20px;
			width: 100%;
		}

		&__title,
		.download-form__title {
			width: fit-content;
			height: fit-content;
			padding: 24px;
		}
	}

	&__input {
		width: 100%;
	}

	&__text-hint {
		@include tablet-mobile-average {
			align-self: flex-start;
			margin-top: 32px;
		}
	}

	&__select {
		@include tablet-mobile-average {
			width: 100%;
		}
	}

	&__radio-container {
		display: flex;
		gap: 10px;
		margin-top: 20px;
	}

	&__button-container {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 16px;

		margin-top: 95px;
		width: 100%;

		@include tablet-mobile-average {
			position: absolute;
			bottom: 20px;
			left: 50%;
			translate: -50% 0;
			padding-inline: 20px;
		}
	}

	&__button {
		width: 240px;

		@include tablet-mobile-average {
			width: 100%;
		}
	}

	&__arrow {
		position: static;
	}
}
</style>
