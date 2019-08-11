<template>
  <div id="app">
    <navigation-bar-combined :src="getAvatar()" />
    <navbar-modal-log-in />
    <navbar-modal-register />
    <router-view />
  </div>
</template>

<script>
import NavBarCombined from "./components/NavBarCombined.vue";
import NavBarModalLogIn from "@/components/NavBarModalLogIn.vue";
import NavBarModalRegister from "@/components/NavBarModalRegister.vue";
export default {
  components: {
    "navigation-bar-combined": NavBarCombined,
    "navbar-modal-log-in": NavBarModalLogIn,
    "navbar-modal-register": NavBarModalRegister
  },
  methods: {
    getAvatar: profile => {
      if (profile) {
        return "/assets/wojexe.png";
      } else {
        return "";
      }
    }
  }
};
</script>

<style lang="less">
/* FONT IMPORTS */
@import "./App.css";

/* VARIABLES */
:root {
  --background-color: #121212;
  --card-color: #252525;
  --text-color: #ffffff;
}

/* GLOBAL CODE */
body {
  width: 100%;
  margin: 0;
  padding: 0;
  background-color: var(--background-color);
  color: var(--text-color);
}
a {
  text-decoration: none;
  color: unset;
}
#app {
  font-family: "Chivo", sans, sans-serif;
}
.hover {
  transition: 0.3s ease-in-out transform;
  &:hover {
    transition: 0.3s ease-in-out transform;
    transform: scale(1.1);
  }
}
@media (min-width: 800px) {
  #app {
    margin-top: 0;
  }
}
</style>
