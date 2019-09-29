<template>
  <div id="app">
    <NavBar :src="getAvatar('')" />
    <ModalLogin ref="login" />
    <ModalRegister ref="register" />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import TheNavBar from "@/components/TheNavBar.vue";
import TheFooter from "@/components/TheFooter.vue";
import ModalLogin from "@/components/Modals/ModalLogin.vue";
import ModalRegister from "@/components/Modals/ModalRegister.vue";
export default {
  components: {
    NavBar: TheNavBar,
    Footer: TheFooter,
    ModalLogin: ModalLogin,
    ModalRegister: ModalRegister
  },
  methods: {
    getAvatar(profile) {
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
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
a {
  text-decoration: none;
  color: unset;
}
#app {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Chivo", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
    "Oxygen", "Ubuntu", "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol";
  padding-top: calc(12vh + 70px); // space for navbar
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
