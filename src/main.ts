import { createApp } from "vue";
import "./style.scss";
import App from "./App.vue";
import UI from "./components/UI";
import router from "./router";
import { createStore } from "vuex";
import { CompanyType } from "./components/UI/CustomInputWithDropdown/CustomInputWithDropdown.vue";
import { createYmaps } from "vue-yandex-maps";

const app = createApp(App);

UI.forEach((component) => {
	app.component(component.name!, component);
});

const store = createStore({
	state: {
		companyNumber: 1,
		companiesForInn: [],
		addresses: [],
	},
	mutations: {
		setCompanyNumber(state: any, value: number) {
			state.companyNumber = value;
		},
		setCompanyForInn(state: any, value: CompanyType[]) {
			state.companiesForInn = value;
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
