<template>
	<section class="edo">
		<ArrowButton direction="left" class="edo__arrow" @click="$router.go(-1)" />

		<div class="edo__img-container img-container">
			<img :src="company.image" class="edo__img" />
			<CardTitle class="img-container__title hidden-tablet">{{ company.title }}</CardTitle>
		</div>

		<div class="edo__content">
			<CustomTitle class="edo__title" text="Есть ли у вас" span="ЭДО">?</CustomTitle>
			<EdoSelect class="edo__select" @setSelection="setSelection" />
		</div>
	</section>

	<SuperModal
		v-if="isModalShow"
		id="edoModal"
		:title="getModalTitle"
		:selection="selection"
		@setSelection="setSelection"
		@close="closeModal"
	>
		<SelectionYes v-if="selection == 1" @close="closeModal" />
		<SelectionNo v-if="selection == 2" @close="closeModal" />
		<SelectionWantPut v-if="selection == 3" @close="closeModal" />
	</SuperModal>
</template>

<script lang="ts" setup>
import { Ref, computed, defineComponent, onMounted, ref } from "vue";

import { companies } from "../data/Companies";
import { CompanyType } from "../types/SelectCompanyPageTypes";

import EdoSelect from "../components/Edo/EdoSelect.vue";
import SuperModal from "../components/SuperModal.vue";
import SelectionYes from "../components/Edo/Selections/SelectionYes.vue";
import SelectionNo from "../components/Edo/Selections/SelectionNo.vue";
import SelectionWantPut from "../components/Edo/Selections/SelectionWantPut.vue";
import router from "../router";
import { useStore } from "vuex";

const store = useStore();

const selection: Ref<number> = ref(0);
const isModalShow: Ref<boolean> = ref(false);

const company: Ref<CompanyType> = ref({} as CompanyType);

const modalTitles: Record<number, string> = {
	1: "Укажите Ваш идентификатор ЭДО",
	2: "Извините, но пока мы не обслуживаем клиентов, у которых нет ЭДО",
	3: "ЭДО от СКБ «Контур»",
};

const showModal = (): void => {
	isModalShow.value = true;
};

const closeModal = (): void => {
	isModalShow.value = false;
};

const setSelection = (value: number): void => {
	selection.value = value;
	showModal();
};

const getModalTitle = computed((): string => {
	return modalTitles[selection.value];
});

onMounted(() => {
	company.value = companies[store.state.companyNumber - 1];
});
</script>

<style lang="scss" scoped>
@import "../styles/mixins";

.edo {
	display: flex;
	justify-content: flex-start;
	align-items: flex-end;

	position: relative;
	overflow: hidden;

	padding-inline: 195px;

	height: 100dvh;
	width: 100vw;

	@include desktop-l {
		padding-inline: clamp(40px, #{calc(195 * 100 / 1980)}vw, 195px);
	}

	@include desktop {
		padding-inline: clamp(0px, #{calc(40 * 100 / 1280)}vw, 40px);
	}

	@include desktop-s {
		padding-inline: 0px;
	}

	&__arrow {
		position: absolute;
		left: 195px;
		top: 118px;

		@include desktop-l {
			left: clamp(40px, #{calc(195 * 100 / 1980)}vw, 195px);
		}

		@include desktop {
			left: 40px;
		}

		@include desktop-s {
			top: 211px;
		}

		@include tablet {
			top: clamp(35px, #{calc(40 * 100 / 768)}vw, 40px);
			left: clamp(20px, #{calc(40 * 100 / 768)}vw, 40px);
		}

		@include tablet-mobile-average {
			top: 35px;
			left: 20px;
		}
	}

	&__img-container {
		position: relative;
		// height: 95%;

		@include tablet-mobile-average {
			height: 310px;
			width: 100%;
		}

		.edo__img {
			// width: 598px;
			height: 944px;
			object-fit: contain;

			@include desktop-l {
				height: clamp(600px, #{calc(944 * 100 / 1980)}vw, 944px);
			}

			@include desktop {
				height: clamp(700px, #{calc(600 * 100 / 1280)}vw, 800px);
			}

			@include desktop-s {
				height: clamp(500px, #{calc(550 * 100 / 1024)}vw, 700px);
			}

			@include tablet {
				height: clamp(500px, #{calc(720 * 100 / 768)}vw, 600px);
			}

			@include tablet-mobile-average {
				width: 100%;
			}

			@include mobile {
				height: 310px;
			}
		}

		.img-container__title {
			position: absolute;
			left: 0;
			bottom: 131px;

			--height: 54px;
			// width: 483px;
		}
	}

	&__content {
		@include flex-center;
		@include absolute-center;

		flex-direction: column;

		top: 107px;
		translate: -50% 0;

		@include desktop-l {
			top: clamp(40px, #{calc(107 * 100 / 1980)}vw, 107px);
		}

		@include desktop {
			top: 40px;
		}

		@include desktop-s {
			top: 200px;
		}

		@include tablet {
			top: clamp(30px, #{calc(40 * 100 / 768)}vw, 40px);
		}

		@include tablet-mobile-average {
			top: 30px;
		}

		.edo__title {
			margin-bottom: 80px;

			@include tablet {
				margin-bottom: clamp(25px, #{calc(80 * 100 / 768)}vw, 80px);
			}

			@include mobile {
				margin-bottom: 25px;
			}
		}
	}

	.edo__button {
		margin-top: 40px;

		width: 241px;
		height: 50px;

		@include tablet-mobile-average {
			position: absolute;
			left: 50%;
			bottom: 20px;
			translate: -50%;

			width: calc(100% - 20px * 2);
		}
	}
}
</style>
