<template>
	<div class="grid grid--2">
    <div>
      <ArrowButton />
      <ArrowButton />
    </div>
    <CloseButton />
    <CustomButton style="width: 290px;">Вывод средств</CustomButton>
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

<style scoped></style>
