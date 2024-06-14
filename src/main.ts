import { createApp } from "vue";
import "./style.scss";
import App from "./App.vue";
import UI from "./components/UI";
import router from "./router";
import { createStore } from "vuex";
import { createYmaps } from "vue-yandex-maps";
import { LegalDataType, LegalPersonType, StoreDataType } from "./types/DataFromForm";

const app = createApp(App);

UI.forEach((component) => {
	app.component(component.name!, component);
});

const store = createStore({
	state: {
		companyNumber: 1,
		identityEdo: null,
		formStoreData: [] as StoreDataType[],
		formLegalData: [] as LegalDataType[],
		formLegalPerson: [] as LegalPersonType[],
	},
	mutations: {
		setCompanyNumber(state: any, value: number) {
			state.companyNumber = value;
		},
		setIdentityEdo(state: any, value: any) {
			state.identityEdo = value;
		},
		setFormStoreData(state: any, value: StoreDataType[]) {
			state.formStoreData = value;
		},
		setFormLegalData(state: any, value: LegalDataType[]) {
			state.formLegalData = value;
		},
		setFormLegalPerson(state: any, value: LegalPersonType[]) {
			state.formLegalPerson = value;
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
