<template>
	<section class="answer">
		<div class="answer__img">
			<!-- <img src="/img/background/want-put-edo-bg.png" alt="no edo image" class="answer__img" /> -->
		</div>
		<div class="answer__content">
			<p class="answer__text answer__text--main">Заявка уже летит!</p>
			<div class="answer__text-container">
				<p class="answer__text">
					В ближайшее время с вами свяжутся консультанты СКБ Контур и объяснят, что необходимо для
					установки ЭДО.
				</p>
				<p class="answer__text">
					После того, как ЭДО уже будет у вас, можете заполнять форму подключения
				</p>
			</div>
			<CustomButton theme="red" class="answer__button">Назад</CustomButton>
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

	padding: 20px;

	color: var(--color-white);

	&__img {
		@include absolute-center;

		background: url("/img/background/want-put-edo-bg.png") no-repeat center center / cover;

		filter: brightness(74%);

		width: 100vw;
		height: 100dvh;

		@include desktop-s {
			background-image: url("/img/background/want-put-edo-bg-small.png");
		}
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

		@include tablet {
			font-size: clamp(19px, #{calc(22 * 100 / 1440)}vw, 22px);
		}

		@include mobile {
			font-size: 19px;
		}

		&--main {
			font: {
				weight: 600;
			}

			margin-bottom: 19px;
		}
	}

	&__text-container {
		display: flex;
		flex-direction: column;
		gap: 8px;
	}

	&__button {
		font: {
			size: 18px;
		}

		height: 50px;
		width: 241px;
		margin-top: 40px;

		@include mobile-tablet {
			position: absolute;
			bottom: 20px;
			margin-top: 0px;
			width: calc(100% - 20px * 2);
		}
	}
}
</style>
