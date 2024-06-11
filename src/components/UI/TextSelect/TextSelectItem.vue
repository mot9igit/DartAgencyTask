<template>
	<article class="item">
		<p>{{ data.name }}</p>
	</article>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { DataType } from "./TextSelect.vue";

export default defineComponent({
	name: "TextSelectItem",

	setup() {
		return {};
	},

	props: {
		data: {
			type: Object as () => DataType,
			required: true,
		},
	},
});
</script>

<style lang="scss" scoped>
.item {
	display: flex;
	flex-direction: column;
	gap: 10px;

	border-radius: var(--border-radius);
}
</style>
