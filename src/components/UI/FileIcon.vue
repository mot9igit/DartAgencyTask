<template>
	<div class="file-icon">
		<img :src="iconSource" alt="" />
		<a :href="href" target="_blank" class="file-icon__icon">
			<slot></slot>
		</a>
	</div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { FileTypesEnum } from "../../data/FileTypes";
export default defineComponent({
	name: "FileIcon",
});
</script>
<script setup lang="ts">
const props = defineProps({
	href: {
		type: String,
		required: true,
	},
	type: {
		type: Object as () => FileTypesEnum,
		required: true,
	},
});

const iconSource = computed(() => `/img/ico/${props.type}-icon.svg`);
</script>

<style lang="scss" scoped>
.file-icon {
    display: flex;
    align-items: center;
    gap: 8px;

	cursor: pointer;

	&__icon {
		text-decoration: underline;
	}
}
</style>
