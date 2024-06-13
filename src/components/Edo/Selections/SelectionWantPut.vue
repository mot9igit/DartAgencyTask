<template>
	<form class="selection" @submit.prevent="onSubmit">
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

			<CustomInput
				placeholder="ИНН"
				required="true"
				class="selection__input"
				:onChange="(e: any) => updateEdoData('inn', e.target.value)"
			/>
			<CustomInput
				id="telephoneInput"
				ref="telephoneInput"
				placeholder="Телефон"
				required="true"
				class="selection__input"
				:onChange="(e: any) => updateEdoData('telephone', e.target.value)"
			/>
			<CustomInput
				placeholder="Email"
				required="true"
				class="selection__input"
				:onChange="(e: any) => updateEdoData('email', e.target.value)"
			/>
			<CustomInput
				placeholder="ФИО"
				required="true"
				class="selection__input"
				:onChange="(e: any) => updateEdoData('fio', e.target.value)"
			/>

			<div class="selection__links">
				<a href="https://www.diadoc.ru/docs/faq/faq-166" class="selection__link">Что такое ЭДО?</a>
				<a
					href="https://www.diadoc.ru/articles/22574-chto_takoe_diadok#:~:text=Диадок%20—%20сервис%20ЭДО%20от%20Контура,документооборота%20с%20применением%20электронной%20подписи."
					class="selection__link"
					>Что такое Контур.Диадок?</a
				>
			</div>

			<CustomButton class="selection__button modal__button" type="submit">Отправить</CustomButton>
		</div>
	</form>
</template>

<script lang="ts">
export default defineComponent({
	name: "SelectionWantPut",
});
</script>

<script lang="ts" setup>
import { Ref, defineComponent, onMounted, ref } from "vue";
import { EdoDataType } from "../../../types/DataFromForm";
import axios, { AxiosResponse } from "axios";
import { useRouter } from "vue-router";
import IMask from "imask";

const emit = defineEmits(["close"]);
const router = useRouter();

const telephoneInput: Ref<HTMLInputElement> = ref({} as HTMLInputElement);
const edoData: Ref<EdoDataType> = ref({} as EdoDataType);

const close = (): void => {
	emit("close");
};

const updateEdoData = (parameter: string, value: string): void => {
	edoData.value[parameter] = value;
};

const onSubmit = async (): Promise<void> => {
	const response: AxiosResponse = await axios.post(
		"http://localhost:3000/edo",
		{
			...edoData.value,
		},
		{
			headers: {
				"Content-Type": "application/json",
			},
		}
	);

	if (response.status !== 200) return;

	// router.push("/edo/want-put");
};

onMounted(() => {
	IMask(document.getElementById("telephoneInput") as HTMLInputElement, {
		mask: "+{7} (000) 000-00-00",
	});
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

	&__button {
		margin-top: 40px;
		padding-inline: 55px;
	}
}
</style>
