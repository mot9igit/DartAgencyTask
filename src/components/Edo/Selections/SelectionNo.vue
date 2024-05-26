<template>
	<div class="selection">
		<div class="selection__content">
			<div class="modal__text-container selection__text-container">
				<p class="selection__text modal__text">
					Вы можете подключить услугу, выбрав в поле ответ «Хочу установить». С Вами свяжется наш
					менеджер и объяснит, как происходит процедура подключения.
				</p>
				<p class="selection__text modal__text">
					Если же Вы не намерены в ближайшее время подключать ЭДО, тогда не заполняйте форму дальше.
				</p>
			</div>

			<a href="/edo/no">
				<CustomButton class="selection__button modal__button" @click="close">Понятно</CustomButton>
			</a>
		</div>

		<img src="../../../assets/svg/smile.svg" class="selection__image" />
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "SelectionNo",

	setup() {
		return {};
	},
	methods: {
		close() {
			this.$emit("close");
		},
	},
});
</script>

<style lang="scss" scoped>
.selection {
	position: relative;

	&__content {
		display: flex;
		flex-direction: column;
		align-items: center;

		position: relative;
		z-index: 2;
	}

	&__image {
		position: absolute;
		bottom: -100px;
		left: -125px;
		z-index: 1;
	}

	&__button {
		margin-top: 40px;
		padding-inline: 55px;
	}
}
</style>
