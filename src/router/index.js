import Vue from "vue";
import VueRouter from "vue-router";
import Guard from "../services/middlewares.js";
import Home from "../views/Home";
import AboutProject from "../views/AboutProject";
import Login from "../views/Login";
import Register from "../views/register/Register";
import RecoverPassword from "../views/recover-password/RecoverPassword";
import ProfessionalList from "../views/ProfessionalList";
import Settings from "../views/Settings";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/recover-password",
    name: "Recover Password",
    component: RecoverPassword,
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
    beforeEnter: Guard.auth,
  },
  {
    path: "/about",
    name: "About the Project",
    component: AboutProject,
    beforeEnter: Guard.auth,
  },
  {
    path: "/professional-list",
    name: "Professional List",
    component: ProfessionalList,
  },
  {
    path: "/settings",
    name: "Dados do usuário",
    component: Settings,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
