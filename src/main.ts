import { createApp } from "vue";
import "./style.scss";
import App from "./App.vue";
import UI from "./components/UI";
import router from "./router";
import { createStore } from "vuex";

const app = createApp(App);

UI.forEach(component => {
    app.component(component.name!, component);
});

const store = createStore({
    state: {
        companyNumber: 1
    },
    mutations: {
        setCompanyNumber(state: any, value: number) {
            state.companyNumber = value;
        }
    },
});

app
    .use(store)
    .use(router)
    .mount("#app");