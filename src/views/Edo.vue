<template>
	<section class="edo">
		<ArrowButton direction="left" class="edo__arrow" />

		<div class="edo__img-container img-container">
			<img :src="company.image" class="edo__img" />
			<CardTitle class="img-container__title">{{ company.title }}</CardTitle>
		</div>

		<div class="edo__content">
			<CustomTitle class="edo__title" text="Есть ли у вас" span="ЭДО">?</CustomTitle>
			<EdoSelect class="edo__select" @setSelection="setSelection" />
			<CustomButton class="edo__button" theme="red" @click="showModal">Далее</CustomButton>
		</div>
	</section>

	<SuperModal
		v-if="isModalShow"
		id="edoModal"
		:title="getModalTitle"
		@setSelection="setSelection"
		@close="closeModal"
	>
		<SelectionYes v-if="selection == 1" @close="closeModal" />
		<SelectionNo v-if="selection == 2" @close="closeModal" />
		<SelectionWantPut v-if="selection == 3" @close="closeModal" />
	</SuperModal>
</template>

<script lang="ts">
import { Ref, defineComponent, ref } from "vue";

import { companies } from "../data/Companies";
import { CompanyType } from "../types/SelectCompanyPageTypes";

import EdoSelect from "../components/Edo/EdoSelect.vue";
import SuperModal from "../components/SuperModal.vue";
import SelectionYes from "../components/Edo/Selections/SelectionYes.vue";
import SelectionNo from "../components/Edo/Selections/SelectionNo.vue";
import SelectionWantPut from "../components/Edo/Selections/SelectionWantPut.vue";

export default defineComponent({
	setup() {
		const company: Ref<CompanyType> = ref({} as CompanyType);
		const selection: Ref<number> = ref(0);

		const isModalShow: Ref<boolean> = ref(false);

		const modalTitles: Record<number, string> = {
			1: "Укажите Ваш идентификатор ЭДО",
			2: "Извините, но пока мы не обслуживаем клиентов, у которых нет ЭДО",
			3: "ЭДО от СКБ «Контур»",
		};

		return {
			company,
			selection,
			modalTitles,
			isModalShow,
		};
	},
	props: {
		cardNumber: {
			type: Number,
			default: 0,
		},
	},
	components: {
		EdoSelect,
		SuperModal,
		SelectionYes,
		SelectionNo,
		SelectionWantPut,
	},
	methods: {
		showModal(): void {
			// const modal: HTMLDialogElement = document.getElementById("edoModal") as HTMLDialogElement;
			// modal.showModal();
			this.isModalShow = true;
		},
		closeModal(): void {
			this.isModalShow = false;
		},
		setSelection(value: number): void {
			this.selection = value;
		},
	},
	computed: {
		getCompany(): void {
			this.company = companies.find((company) => company.id == this.cardNumber) as CompanyType;
		},
		getModalTitle(): string {
			return this.modalTitles[this.selection];
		},
	},
});
</script>

<style lang="scss" scoped>
@import "../styles/mixins";

.edo {
	display: flex;
	justify-content: flex-start;
	align-items: flex-end;

	position: relative;

	padding-inline: 195px;

	height: 100dvh;
	width: 100vw;

	&__arrow {
		position: absolute;
		left: 195px;
		top: 118px;
	}

	&__img-container {
		position: relative;

		.edo__img {
			width: 598px;
			height: 944px;
			object-fit: contain;
		}

		.img-container__title {
			position: absolute;
			left: 0;
			bottom: 131px;

			width: 483px;
		}
	}

	&__content {
		@include flex-center;
		@include absolute-center;

		flex-direction: column;

		top: 107px;
		translate: -50% 0;

		.edo__title {
			margin-bottom: 80px;
		}

		.edo__button {
			margin-top: 40px;

			width: 241px;
			height: 50px;
		}
	}
}
</style>
