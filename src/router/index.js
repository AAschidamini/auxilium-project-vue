import Vue from "vue";
import VueRouter from "vue-router";
import Guard from "../services/middlewares.js";
import Home from "../views/Home";
import AboutProject from "../views/AboutProject";
import Login from "../views/Login";
import RegisterPatient from "../views/register/RegisterPatient";
import RegisterProfessional from "../views/register/RegisterProfessional";
import Register from "../views/register/Register";
import RecoverPassword from "../views/recover-password/RecoverPassword";
import ProfessionalList from "../views/ProfessionalList";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/register-user",
    name: "Register User",
    component: RegisterPatient,
  },
  {
    path: "/register-professional",
    name: "Register Professional",
    component: RegisterProfessional,
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
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
