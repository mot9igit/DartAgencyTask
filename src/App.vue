<template>
	<div class="grid">
    <div>
      <ArrowButton />
      <ArrowButton />
    </div>
    <CloseButton />
    <CustomButton style="width: 290px;">Вывод средств</CustomButton>
    <CustomButton style="width: 290px;" theme="black">Вывод средств</CustomButton>
    <CustomCheckbox />
    <CustomIcon />
    <CustomInput />
    <CustomRadio />
    <CustomTextBlock />
    <div>
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
}
</style>
