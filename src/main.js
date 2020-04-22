import Vue from "vue";
import App from "./App.vue";
import BaseCard from "./components/BaseCard.vue";
import router from "./router";

import faInit from "./fontAwesome";
faInit();

Vue.config.productionTip = false;

Vue.component("base-card", BaseCard);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
