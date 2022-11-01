import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import EventBus from "./helper/EventBus";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import VueTheMask from "vue-the-mask";
import VueLoading from "vuejs-loading-plugin";

// using default options
Vue.use(VueLoading);

// overwrite defaults
Vue.use(VueLoading, {
  dark: true, // default false
  text: "Ladataan", // default 'Loading'
  loading: true, // default false
  background: "rgb(255,255,255)", // set custom background
  classes: ["myclass"], // array, object or string
});

/** Bootstrap vue */
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

/** Vue the mask */
Vue.use(VueTheMask);

/** Define Event Bus */
Vue.use(EventBus);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
