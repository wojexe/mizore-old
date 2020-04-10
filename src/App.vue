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
  --background-color: rgb(18, 18, 18);
  --inner-background-color: rgb(48, 48, 48);
  --card-color: rgb(37, 37, 37);
  --text-color: rgb(255, 255, 255);

  --color-gradient: linear-gradient(
    to right,
    rgb(18, 194, 233),
    rgb(196, 113, 237),
    rgb(246, 79, 89)
  );

  --font-size-S: 0.9rem;
  --font-size-M: 1rem;
  --font-size-L: 1.2rem;
  --font-size-XXL: 2rem;
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
