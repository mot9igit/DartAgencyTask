<template>
	<div class="grid">
		<div class="block">
			<ArrowButton direction="left" />
			<ArrowButton direction="right" />
		</div>
		<CloseButton />
		<CustomButton id="test1" style="width: 290px">Вывод средств</CustomButton>
		<CustomButton id="test2" style="width: 290px" theme="black">Вывод средств</CustomButton>
		<CustomInputWithDropdown id="test1" style="width: 300px" placeholder="ИНН" required="true" />
		<CustomCheckbox id="checkbox" />
		<CustomIcon icon="vk" link="https://vk.com" />
		<form class="block">
			<CustomInput id="inn" placeholder="ИНН" required="true" />
			<CustomInput id="name" placeholder="Ваше имя" required="true" style="width: 300px" />
			<CustomInput id="store" placeholder="Название магазина" disabled="true" />
			<CustomButton id="submit" theme="red" type="submit" style="width: 150px">Отправить</CustomButton>
		</form>
		<CustomSelect id="testSelect" placeholder="Выберите компанию" :companies="companiesInfo" style="width: 500px;" />
		<div class="block">
			<CustomRadio id="radio1" name="radio" />
			<CustomRadio id="radio2" name="radio" />
		</div>
		<CustomTextBlock>Да</CustomTextBlock>
		<div class="block" style="justify-content: center">
			<!-- <PersonCard card=1 /> -->
			<PersonCard card="2" />
			<!-- <PersonCard card=3 /> -->
		</div>

		<CardSlider style="margin-block: 100px;" />

	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { companiesInfo } from "../data/CompaniesInfo";
import CardSlider from "../components/CardSlider.vue";

export default defineComponent({
	name: "Test",

	setup() {
		return {
			companiesInfo
		};
	},

	components: {
		CardSlider,
	}
});
</script>

<style lang="scss" scoped>
.grid {
	background-color: #1e1e1e;
	padding: 30px;
	padding-bottom: 100px;
	min-height: 100dvh;
	width: 100vw;
}
.block {
	display: flex;
	justify-content: flex-start;
	align-items: flex-end;
	flex-wrap: wrap;
	gap: 10px;
}
</style>
