import { Component } from "vue";
import Home from "../views/Home.vue";
import CompanySelectPage from "../components/CompanySelectPage/CompanySelectPage.vue";
import Edo from "../views/Edo.vue";
import PageWithForm from "../views/PageWithForm.vue";
import AnswerNo from "../components/Edo/Answers/AnswerNo.vue";
import AnswerWantPut from "../components/Edo/Answers/AnswerWantPut.vue";
import { createRouter, createWebHistory } from "vue-router";
import Test from "../views/Test.vue";
import NotFound from "../views/NotFound.vue";

type RouteType = {
	path: string;
	name: string;
	component: Component;
};

const routes: RouteType[] = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},
	{
		path: "/company-select",
		name: "Company select",
		component: CompanySelectPage,
	},
	{
		path: "/edo",
		name: "Edo",
		component: Edo,
	},
	{
		path: "/edo/no",
		name: "Edo no",
		component: AnswerNo,
	},
	{
		path: "/edo/want-put",
		name: "Edo want put",
		component: AnswerWantPut,
	},
	{
		path: "/form",
		name: "Form",
		component: PageWithForm,
	},
	{
		path: "/test",
		name: "Test",
		component: Test
	},
	{
		path: "/:pathMatch(.*)*",
		name: "NotFound",
		component: NotFound
	}
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;