<template>
	<article class="field__container">
		<label for="fileUpload" class="field">
			<div class="field__img-container">
				<img src="/img/ico/file-upload.svg" alt="" />
				<p class="field__text field__text--white">Добавить файл</p>
			</div>
			<p class="field__text">Можно перетащить его в эту рамку</p>
		</label>
		<input type="file" id="fileUpload" class="hidden" />
	</article>
</template>

<script lang="ts">
export default defineComponent({
	name: "FileField",
});
</script>
<script setup lang="ts">
import { defineComponent } from "vue";
</script>

<style lang="scss" scoped>
@import "../../styles/mixins";

.field {
	@include flex-center;
	flex-direction: column;
	gap: 4px;

	background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='%23CBCBCB59' stroke-width='4' stroke-dasharray='5' stroke-dashoffset='0' stroke-linecap='butt'/%3e%3c/svg%3e");

	padding: 10px;
	height: 100%;
	width: 100%;

	cursor: pointer;

	&__container {
		background-color: var(--color-transparent-5-white);
		border-radius: var(--border-radius);

		padding: 16px;
		height: 108px;
		width: 100%;
	}

	&__img-container {
		@include flex-center;
		gap: 12px;
	}

	&__text {
		font-size: 16px;
		line-height: 1;

		&--white {
			font-size: 14px;
			line-height: 18px;
			color: var(--color-white);
		}
	}
}
</style>
