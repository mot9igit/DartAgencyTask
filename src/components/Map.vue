<template>
	<YandexMap
		:settings="{
			location: {
				center: [37.617644, 55.755819],
				zoom: 10,
			},
            theme: 'dark',
			showScaleInCopyrights: true,
		}"
		width="100%"
		height="500px"
	>
		<YandexMapDefaultSchemeLayer :settings="{ theme: 'dark' }" />
		<YandexMapDefaultFeaturesLayer />

		<YandexMapDefaultMarker
            v-model="defaultMarker"
			:settings="{
				draggable: true,
				title: `Долгота: ${defaultMarker?.coordinates[0].toFixed(
					2
				)}<br>Широта: ${defaultMarker?.coordinates[1].toFixed(2)}`,
				coordinates: defaultMarker ? defaultMarker.coordinates : [37.617644, 55.755819],
				onDragMove,
			}"
		/>
	</YandexMap>
</template>

<script lang="ts" setup>
import {
  YandexMap, YandexMapDefaultSchemeLayer, YandexMapDefaultFeaturesLayer, YandexMapDefaultMarker,
} from 'vue-yandex-maps';
import { shallowRef, triggerRef } from 'vue';
import type { YMapDefaultMarker } from '@yandex/ymaps3-types/packages/markers';

const defaultMarker = shallowRef<YMapDefaultMarker | null>(null);

const onDragMove = () => {
  triggerRef(defaultMarker);
};
</script>

<style lang="scss" scoped>
.marker {
	position: relative;
	width: 50px;
	height: 50px;
	background-color: white;
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>
