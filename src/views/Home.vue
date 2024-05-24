<template>
	<section class="home">
		<header class="home__header header">
			<hr class="header__hr" />
			<CustomTitle class="header__title" text="Выберите свою" span="компанию" />
			<hr class="header__hr" />
		</header>
		<div class="home__card-container">
			<PersonCard :card="1" @setCompanyNumber="setCompanyNumber" />
			<PersonCard :card="2" @setCompanyNumber="setCompanyNumber" />
			<PersonCard :card="3" @setCompanyNumber="setCompanyNumber" />
		</div>
		<footer class="home__foter footer">
			<p class="footer__text">Подключение к сервисам MachineStore</p>
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

export default defineComponent({
	name: "Home",

	components: {
		PersonCard,
		CustomTitle,
	},
	methods: {
		setCompanyNumber(value: number) {
			this.$emit("setCompanyNumber", value);
		}
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
		}
	}

	&__card-container {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 40px;
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

			color: var(--color-transparent-65-white);
		}

		&__logo {
			width: 274px;
			height: 57px;
		}
	}
}
</style>
