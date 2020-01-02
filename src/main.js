import Vue from "vue";
import App from "./App.vue";
import BaseCard from "./components/BaseCard.vue";
import router from "./router";

import {
  faUser,
  faEye,
  faEyeSlash,
  faTimes,
  faDollarSign,
  faUserPlus,
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faDiscord } from "@fortawesome/free-brands-svg-icons";

import { library } from "@fortawesome/fontawesome-svg-core";
library.add(
  faUser,
  faEye,
  faEyeSlash,
  faTimes,
  faDollarSign,
  faUserPlus,
  faEnvelope,
  faGithub,
  faDiscord
);

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
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
