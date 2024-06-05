<template>
	<section class="answer">
		<div class="answer__img"></div>
		<div class="answer__content">
			<p class="answer__text answer__text--main">
				Нам очень жаль, но мы уверены, что в будущем сможем поработать с Вами. Ждем вас с ЭДО!
			</p>
			<p class="answer__text">С надеждой, команда MachineStore.</p>
			<RouterLink to="/edo" class="answer__link">
				<CustomButton theme="red" class="answer__button">Я готов завести ЭДО</CustomButton>
			</RouterLink>
		</div>
	</section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { RouterLink } from "vue-router";

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

		background: url("/img/background/no-edo-bg.png") no-repeat center center / cover;

		filter: brightness(74%);

		width: 100vw;
		height: 100dvh;

		@include desktop-s {
			background-image: url("/img/background/no-edo-bg-small.png");
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
				weight: 700;
			}

			margin-bottom: 19px;
		}
	}

	&__link {
		margin-top: 40px;

		@include mobile-tablet {
			margin-top: 0px;
		}
	}

	&__button {
		font: {
			size: 18px;
		}

		height: 50px;
		width: 241px;

		@include mobile-tablet {
			position: absolute;
			bottom: 20px;
			width: calc(100% - 20px * 2);
		}
	}
}
</style>
