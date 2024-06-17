<template>
	<div class="selection">
		<div class="selection__content">
			<div class="modal__text-container selection__text-container">
				<p class="selection__text modal__text">
					Фид успешно отправлен. Ваши товары в ближайшее время будут выгружены на наш маркетплейс
				</p>
			</div>

			<CustomButton
				class="selection__button modal__button"
				@click="
					{
						close();
					}
				"
				>Отлично</CustomButton
			>
		</div>

		<img src="/img/ico/heart.svg" class="selection__image" />
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "Gratitude",

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
		overflow: hidden;
		z-index: 2;
	}

	&__image {
		position: absolute;
		bottom: -75px;
		right: -70px;
		z-index: 1;
	}

	&__button {
		margin-top: 40px;
		padding-inline: 55px;
	}
}
</style>
