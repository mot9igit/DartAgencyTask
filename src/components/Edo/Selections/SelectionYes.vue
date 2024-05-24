<template>
	<div class="selection">
		<CustomInput placeholder="Ваш идентификатор" required="true" class="selection__input" />
		<p class="selection__text modal__text">
			Если не можете найти идентификатор, пропустите этот шаг
		</p>
		<CustomButton class="selection__button modal__button" @click="close">Далее</CustomButton>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "SelectionYes",

	setup() {
		return {};
	},
	methods: {
		close(): void {
			this.$emit("close");
		}
	}
});
</script>

<style lang="scss" scoped>
@import "../../../styles/mixins";

.selection {
	display: flex;
	flex-direction: column;
	align-items: center;

	&__input {
		margin-block: 10px 16px;
		width: 100%;
	}

	&__button {
		margin-top: 40px;
		padding-inline: 55px;
	}
}
</style>
