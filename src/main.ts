import { createApp } from "vue";
import "./style.scss";
import App from "./App.vue";
import UI from "./components/UI";
import router from "./router";
import { createStore } from "vuex";
import { createYmaps } from "vue-yandex-maps";
import { LegalDataType, LegalPersonType } from "./types/DataFromForm";

const app = createApp(App);

UI.forEach((component) => {
	app.component(component.name!, component);
});

const store = createStore({
	state: {
		companyNumber: 1,
		formLegalData: [] as LegalDataType[],
		formLegalPerson: [] as LegalPersonType[],
		addresses: [],
	},
	mutations: {
		setCompanyNumber(state: any, value: number) {
			state.companyNumber = value;
		},
		setFormLegalData(state: any, value: LegalDataType[]) {
			state.formLegalData = value;
		},
		setFormLegalPerson(state: any, value: LegalPersonType[]) {
			state.formLegalPerson = value;
		},
		setAddresses(state: any, value: string[]) {
			state.addresses = value;
		},
	},
});

app
	.use(
		createYmaps({
			apikey: "9cc9371c-b0ef-422b-b0be-2b1d49e32386",
		})
	)
	.use(store)
	.use(router)
	.mount("#app");
