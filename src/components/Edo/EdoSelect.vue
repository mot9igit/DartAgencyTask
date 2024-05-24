<template>
	<div class="select">
		<input id="1" type="radio" class="select__input" />
		<label for="1" class="select__label label">
			<CustomTextBlock class="label__content">Да</CustomTextBlock>
		</label>
		<input id="2" type="radio" class="select__input" />
		<label for="2" class="select__label label">
			<CustomTextBlock class="label__content">Нет</CustomTextBlock>
		</label>
		<input id="3" type="radio" class="select__input" />
		<label for="3" class="select__label label">
			<CustomTextBlock class="label__content">Нет, но я хочу оставить</CustomTextBlock>
		</label>
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
@import "../../styles/mixins";

.select {
    @include flex-center;
    align-items: flex-start;
    flex-direction: column;

    border-left: var(--border);
    border-color: var(--color-white);

    &__input {
        @include visually-hidden;
    }

    &__label {
    }
}
</style>
