<template>
	<section class="download-form">
		<ArrowButton direction="left" class="edo__arrow" @click="$router.go(-1)" />

		<div class="edo__content download-form__content">
			<CustomTitle
				class="edo__title download-form__title"
				:text="customTitleText"
				:span="customTitleSpan"
				>{{ customTitlePunctuation }}</CustomTitle
			>
			<EdoSelect class="edo__select" :selections="['Да', 'Нет']" @setSelection="setSelection" />
			<div class="download-form__button-container">
				<TextWithHint>Что такое фид?</TextWithHint>
				<CustomButton theme="red" class="download-form__button">Далее</CustomButton>
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
	selection.value == 1 && showModal();
};
</script>

<style lang="scss">
.download-form {
	&__content {
		&__title,
		.download-form__title {
			max-width: 700px;
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
		padding-inline: 90px;
	}
}
</style>
