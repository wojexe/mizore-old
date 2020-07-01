import Vue from "vue";
import App from "./App.vue";
import BaseCard from "./components/BaseCard.vue";
import router from "./router";

import faInit from "./fontAwesome";
faInit();

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
