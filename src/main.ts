import { createApp } from "vue";
import "./style.scss";
import App from "./App.vue";
import UI from "./components/UI";
import router from "./router";
import { createStore } from "vuex";
import { CompanyType } from "./components/UI/CustomInputWithDropdown/CustomInputWithDropdown.vue";

const app = createApp(App);

UI.forEach(component => {
    app.component(component.name!, component);
});

const store = createStore({
    state: {
        companyNumber: 1,
        companyForInn: {} as CompanyType,
    },
    mutations: {
        setCompanyNumber(state: any, value: number) {
            state.companyNumber = value;
        },
        setCompanyForInn(state: any, value: CompanyType) {
            state.companyForInn = value;
        },
    },
});

app
    .use(store)
    .use(router)
    .mount("#app");