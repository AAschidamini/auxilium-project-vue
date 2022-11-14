import Vue from "vue";
import VueRouter from "vue-router";
import Guard from "../services/middlewares.js";
import AboutProject from "../views/AboutProject";
import Login from "../views/login/Login";
import Register from "../views/register/Register";
import RecoverPassword from "../views/recover-password/RecoverPassword";
import ProfessionalList from "../views/ProfessionalList";
import Settings from "../views/Settings";
import PublicChat from "../views/chats/PublicChat";
import PrivateChat from "../views/chats/PrivateChat";
import Chats from "../views/chats/Chats";

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
    path: "/public-chat",
    name: "Public Chat",
    component: PublicChat,
    beforeEnter: Guard.auth,
  },
  {
    path: "/professional-chat",
    name: "Professional Chat",
    component: PrivateChat,
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
    beforeEnter: Guard.auth,
  },
  {
    path: "/chats",
    name: "Chats",
    component: Chats,
    beforeEnter: Guard.auth,
  },
  {
    path: "/settings",
    name: "Dados do usuário",
    component: Settings,
    beforeEnter: Guard.auth,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
