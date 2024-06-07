<template>
	<div class="marker" @click="isClicked = !isClicked">
		<div :class="`marker__content ${!isClicked && 'small-size'}`">
			<p class="marker__text">{{ address || "Ничего не найдено :(" }}</p>
		</div>
	</div>
</template>

<script lang="ts">
import { Ref, defineComponent, ref } from "vue";

export default defineComponent({
	setup() {
		let isClicked: Ref<boolean> = ref(false);

		return {
			isClicked,
		};
	},
	name: "MapMarker",
	props: {
		address: {
			type: String,
			default: "",
		},
	},
});
</script>

<style lang="scss" scoped>
@import "../../styles/mixins";

.marker {
	position: relative;
	height: 53px;
	width: 42px;

	translate: -50% -75%;
    cursor: pointer;

	&::before {
		content: url("../../assets/svg/marker.svg");

		position: absolute;
	}

	&:hover,
	&:active,
	&:focus {
		&::before {
			content: url("../../assets/svg/marker-active.svg");
		}
	}

	&__content {
		position: absolute;
		left: 110%;

		background-color: var(--color-red);
		border-radius: var(--border-radius-large);

		padding: 8px;
		width: 200px;

		transition-duration: var(--transition-duration);
		overflow: hidden;
	}

	&__text {
		font-size: 12px;
		color: var(--color-white);
	}
}

.small-size {
	width: 0px;
	padding: 0px;

	& .marker__text {
		text-wrap: nowrap;
	}
}
</style>
