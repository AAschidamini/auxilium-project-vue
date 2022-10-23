import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import VueTheMask from "vue-the-mask";

/** Bootstrap vue */
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

/** Vue the mask */
Vue.use(VueTheMask);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
