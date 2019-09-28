import Vue from "vue";
import Router from "vue-router";
import Homepage from "./views/Homepage.vue";
import Profile from "./views/Profile.vue";
import Rankings from "./views/Rankings.vue";
import Support from "./views/Support.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "homepage",
      component: Homepage
    },
    {
      path: "/profile/:userID",
      name: "profile",
      component: Profile
    },
    {
      path: "/rankings",
      name: "rankings",
      component: Rankings
    },
    {
      path: "/support",
      name: "support",
      component: Support
    }
  ]
});
