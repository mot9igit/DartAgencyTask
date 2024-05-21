<template>
	<div class="grid">
		<div class="block">
			<ArrowButton direction="left" />
			<ArrowButton direction="right" />
		</div>
		<CloseButton />
		<CustomButton style="width: 290px">Вывод средств</CustomButton>
		<CustomButton style="width: 290px" theme="black">Вывод средств</CustomButton>
		<CustomCheckbox id="checkbox" />
		<CustomIcon icon="vk" link="https://vk.com" />
		<form class="block">
      <CustomInput placeholder="ИНН" required=true />
      <CustomInput placeholder="Ваше имя" />
      <CustomInput placeholder="Название магазина" disable=true />
      <CustomButton theme="red" type="submit" style="width: 150px;">Отправить</CustomButton>
    </form>
		<div class="block">
			<CustomRadio id="radio1" name="radio" />
			<CustomRadio id="radio2" name="radio" />
		</div>
		<CustomTextBlock />
		<div class="block">
			<PersonCard />
			<PersonCard />
			<PersonCard />
		</div>
	</div>
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
.grid {
	background-color: #1e1e1e;
	padding: 30px;
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
