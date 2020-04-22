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
  faEnvelope,
  faLocationArrow,
  faSuitcase,
  faStar
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
  faLocationArrow,
  faSuitcase,
  faStar,

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

import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

const apolloClient = new ApolloClient({
  link: createHttpLink({
    uri: 'http://localhost:4000',
    credentials: 'include'
  }),
  cache: new InMemoryCache()
});

import VueApollo from 'vue-apollo'

Vue.use(VueApollo);

const apolloProvider = new VueApollo({
  defaultClient: apolloClient
});

new Vue({
  router,
  apolloProvider,
  render: h => h(App)
}).$mount("#app");
