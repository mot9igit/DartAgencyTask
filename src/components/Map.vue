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
		<YandexMapDefaultSchemeLayer />
		<YandexMapDefaultFeaturesLayer />

		<YandexMapMarker
			@click.stop
			v-model="defaultMarker"
			:settings="{
				draggable: true,
				coordinates: defaultMarker ? defaultMarker.coordinates : [37.617644, 55.755819],
				onDragMove,
			}"
		>
			<MapMarker :address="address" />
		</YandexMapMarker>

		<YandexMapListener
			:settings="{
				onClick,
			}"
		/>
	</YandexMap>
</template>

<script lang="ts" setup>
import {
	YandexMap,
	YandexMapDefaultSchemeLayer,
	YandexMapDefaultFeaturesLayer,
	YandexMapListener,
	YandexMapMarker,
} from "vue-yandex-maps";
import { Ref, ref, shallowRef, triggerRef } from "vue";
import type { YMapDefaultMarker } from "@yandex/ymaps3-types/packages/markers";
import axios, { AxiosResponse } from "axios";
import { useStore } from "vuex";
import { CoordinatesType } from "./AddCompany.vue";

const props = defineProps({
	companyIndex: Number,
	coordinates: Object as () => CoordinatesType,
});

const emit = defineEmits(["refreshAddress"]);

const defaultMarker = shallowRef<YMapDefaultMarker | null>(null);

let address: Ref<string> = ref("");
const store = useStore();
let timer: Ref<NodeJS.Timeout> = ref({} as NodeJS.Timeout);

const onDragMove = () => {
	triggerRef(defaultMarker);
	debounce(refreshGeo, 300);
};

const onClick = (object, event) => {
	defaultMarker.value?.update({
		coordinates: event.coordinates,
	});
	refreshGeo();
};

const updateCoordinates = (coordinates: CoordinatesType) => {
	console.log("Child: " + coordinates);
	
	defaultMarker.value?.update({
		coordinates: props.coordinates
			? [
					+coordinates.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.split(
						" "
					)[0],
					+coordinates.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.split(
						" "
					)[1],
			  ]
			: [37.617644, 55.755819],
	});
};

defineExpose({
	updateCoordinates,
});

// TODO При обратном геокодировании адрес не записывается в маркер

const refreshGeo = async () => {
	const response: AxiosResponse = await axios.get("https://geocode-maps.yandex.ru/1.x/", {
		params: {
			apikey: "9cc9371c-b0ef-422b-b0be-2b1d49e32386",
			geocode:
				defaultMarker.value?.coordinates[0].toString() +
				"," +
				defaultMarker.value?.coordinates[1].toString(),
			format: "json",
			results: 1,
		},
	});

	if (response.status !== 200) return;

	address.value =
		response.data.response.GeoObjectCollection.featureMember[0].GeoObject.metaDataProperty.GeocoderMetaData.text;

	const newAddresses = store.state.addresses;
	newAddresses[props.companyIndex] = address.value;
	store.commit("setAddresses", newAddresses);

	emit("refreshAddress");
};

const debounce = (func, delay) => {
	clearTimeout(timer.value);
	timer.value = setTimeout(func, delay);
};
</script>

<style lang="scss" scoped></style>
