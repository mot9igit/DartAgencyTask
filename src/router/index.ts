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
import AnswerYes from "../components/Edo/Answers/AnswerYes.vue";
import IntegrationForm from "../views/IntegrationForm.vue";

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
		name: "CompanySelect",
		component: CompanySelectPage,
	},
	{
		path: "/edo",
		name: "Edo",
		component: Edo,
	},
	{
		path: "/edo/yes",
		name: "EdoYes",
		component: AnswerYes,
	},
	{
		path: "/edo/no",
		name: "EdoNo",
		component: AnswerNo,
	},
	{
		path: "/edo/want-put",
		name: "EdoWantPut",
		component: AnswerWantPut,
	},
	{
		path: "/form",
		name: "Form",
		component: PageWithForm,
	},
	{
		path: "/integration-form",
		name: "IntegrationForm",
		component: IntegrationForm,
	},
	{
		path: "/test",
		name: "Test",
		component: Test,
	},
	{
		path: "/:pathMatch(.*)*",
		name: "NotFound",
		component: NotFound,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
