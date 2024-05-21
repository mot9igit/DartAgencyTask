<template>
	<div class="grid">
		<div class="block">
			<ArrowButton />
			<ArrowButton />
		</div>
		<CloseButton />
		<CustomButton style="width: 290px">Вывод средств</CustomButton>
		<CustomButton style="width: 290px" theme="black">Вывод средств</CustomButton>
		<CustomCheckbox id="checkbox" />
		<CustomIcon icon="vk" link="https://vk.com" />
		<CustomInput />
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
  justify-content: center;
  align-items: center;
	gap: 10px;
}
</style>
