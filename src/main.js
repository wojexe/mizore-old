import Vue from "vue";
import App from "./App.vue";
import BaseCard from "./components/BaseCard.vue";
import router from "./router";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faUser,
  faEye,
  faEyeSlash,
  faTimes
} from "@fortawesome/free-solid-svg-icons"; // faBan
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faUser, faEye, faEyeSlash, faTimes);

Vue.component("font-awesome-icon", FontAwesomeIcon);

window.FontAwesomeConfig = {
  searchPseudoElements: true
};

Vue.config.productionTip = false;

Vue.component("base-card", BaseCard);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
