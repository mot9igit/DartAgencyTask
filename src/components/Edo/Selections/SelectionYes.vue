<template>
	<form class="selection" @submit.prevent="onSubmit">
		<CustomInput
			placeholder="Ваш идентификатор"
			required="true"
			class="selection__input"
			:onChange="(e: any) => edoIdentity = e.target.value"
		/>
		<p class="selection__text modal__text">
			Если не можете найти идентификатор, пропустите этот шаг
		</p>
		<CustomButton class="selection__button modal__button" type="submit">Далее</CustomButton>
	</form>
</template>

<script lang="ts">
import { Ref, defineComponent, ref } from "vue";
import { useStore } from "vuex";

export default defineComponent({
	name: "SelectionYes",

	setup() {
		const store = useStore();

		const edoIdentity: Ref<string> = ref("");

		return {
			store,
			edoIdentity,
		};
	},
	methods: {
		close(): void {
			this.$emit("close");
		},
		onSubmit(e: any): void {
			// Установка идентификатора ЭДО
			this.store.commit("setIdentityEdo", this.edoIdentity);

			this.$router.push("/form");
		},
	},
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
