<template>
	<section class="answer">
		<img src="/img/background/no-edo-bg.png" alt="no edo image" class="answer__img" />
		<div class="answer__content">
			<p class="answer__text answer__text--main">
				Нам очень жаль, но мы уверены, что в будущем сможем поработать с Вами. Ждем вас с ЭДО!
			</p>
			<p class="answer__text">С надеждой, команда MachineStore.</p>
			<CustomButton theme="red" class="answer__button">Я готов завести ЭДО</CustomButton>
		</div>
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
@import "../../../styles/mixins";

.answer {
	@include flex-center;

	width: 100vw;
	height: 100dvh;

	color: var(--color-white);

	&__img {
		@include absolute-center;

		filter: brightness(74%);

		width: 100vw;
		height: 100dvh;
	}

	&__content {
		@include flex-center;
		align-items: flex-start;
		flex-direction: column;

		color: var(--color-white);

		width: 442px;
		z-index: 10;
	}

	&__text {
		font: {
			size: 22px;
			weight: 400;
		}

		color: var(--color-white);

		line-height: 28px;
		letter-spacing: 0.5px;

		&--main {
			font: {
				weight: 700;
			}

			margin-bottom: 19px;
		}
	}

	&__button {
		font: {
			size: 18px;
		}

		height: 50px;
		width: 241px;
		margin-top: 40px;
	}
}
</style>
