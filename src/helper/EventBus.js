/* eslint-disable */
import Vue from "vue";

const bus = new Vue();
const EventBus = {
  install(VueInstance) {
    VueInstance.prototype.$bus = bus;
  },
};

export default EventBus;
