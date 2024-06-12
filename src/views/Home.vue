<template>
	<section class="home">
		<header class="home__header header">
			<hr class="header__hr hidden-tablet-mobile-average" />
			<CustomTitle class="header__title" text="Выберите свою" span="компанию" />
			<hr class="header__hr hidden-tablet-mobile-average" />
		</header>

		<div class="home__card-container hidden-desktop-s">
			<RouterLink to="/company-select">
				<PersonCard :card="3" @setCompanyNumber="setCompanyNumber" />
			</RouterLink>
			<RouterLink to="/company-select">
				<PersonCard :card="2" @setCompanyNumber="setCompanyNumber" />
			</RouterLink>
			<RouterLink to="/company-select">
				<PersonCard :card="1" @setCompanyNumber="setCompanyNumber" />
			</RouterLink>
		</div>
		<CardSlider class="visible-desktop-s" @setCompanyNumber="setCompanyNumber" />

		<footer class="home__foter footer">
			<p class="footer__text hidden-mobile">Подключение к сервисам MachineStore</p>
			<a href="https://mst.tools/" target="_blank">
				<img src="../assets/logo.svg" alt="logo" class="footer__logo" />
			</a>
		</footer>
	</section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PersonCard from "../components/UI/PersonCard.vue";
import CustomTitle from "../components/UI/CustomTitle.vue";
import CardSlider from "../components/CardSlider.vue";
import { RouterLink } from "vue-router";
import { useStore } from "vuex";


export default defineComponent({
	name: "Home",
	
	setup() {
		const store = useStore();

		return {
			store
		}
	},
	
	components: {
		PersonCard,
		CustomTitle,
		CardSlider,
	},
	methods: {
		setCompanyNumber(value: number) {
			this.store.commit('setCompanyNumber', +value);
		},
	}
});
</script>

<style lang="scss" scoped>
@import "../styles/mixins";
@import "../styles/media";

.home {
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	padding-inline: 195px;
	padding-bottom: 40px;

	height: 100dvh;

	@include desktop-l {
		padding-block: clamp(40px, #{calc(40 * 100 / 1980)}vw, 40px);
	}

	@include desktop {
		padding-block: 40px;
		justify-content: space-between;
	}

	.header {
		@include flex-center;
		gap: 28px;

		margin-bottom: 70px;
		width: 100vw;

		&__hr {
			height: 1px;
			width: 100%;
			background-color: var(--color-transparent-15-white);
		}

		&__title {
			@include tablet {
				min-width: clamp(300px, #{calc(470 * 100 / 768)}vw, 470px);
			}

			@include tablet-mobile-average {
				width: 100%;
				max-width: 300px;
				margin-inline: 10px;
			}
		}

		@include desktop-l {
			margin-bottom: clamp(0px, #{calc(40 * 100 / (1980 + 1280))}vw, 40px);
		}

		@include desktop {
			margin-bottom: 0;
		}
	}

	&__card-container {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 40px;

		@include desktop-l {
			gap: clamp(24px, #{calc(40 * 100 / 1980)}vw, 40px);
		}

		@include desktop {
			gap: 24px;
		}
	}

	.footer {
		@include flex-center;
		flex-direction: column;
		gap: 12px;

		margin-top: 95px;

		&__text {
			font: {
				size: 18px;
				weight: 400;
			}
			line-height: 22px;
			letter-spacing: 0.5px;
			text-align: center;

			color: var(--color-transparent-65-white);
		}

		&__logo {
			width: 274px;
			height: 57px;

			@include tablet {
				width: clamp(154px, #{calc(274 * 100 / 375)}vw, 274px);
			}

			@include mobile {
				width: 154px;
			}
		}

		@include desktop-l {
			margin-top: clamp(0px, #{calc(40 * 100 / 1980)}vw, 40px);
		}

		@include desktop {
			margin-top: 0;
		}
	}
}
</style>
