<template>
	<article class="item">
		<p>{{ nds.name }}</p>
	</article>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NdsType from "./NdsSelect.vue";

export default defineComponent({
	name: "NdsSelectItem",

	setup() {
		return {};
	},

	props: {
		nds: {
			type: Object as () => NdsType,
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
