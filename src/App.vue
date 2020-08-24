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
  --background-color: 18, 18, 18;
  --inner-background-color: 48, 48, 48;
  --card-color: 37, 37, 37;
  --text-color: 255, 255, 255;

  --color-gradient: linear-gradient(
    to right,
    rgb(18, 194, 233),
    rgb(196, 113, 237),
    rgb(246, 79, 89)
  );

  --font-family: "Chivo", BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol";
  --font-size-S: 0.9rem;
  --font-size-M: 1rem;
  --font-size-L: 1.2rem;
  --font-size-XL: 1.5rem;
  --font-size-XXL: 2rem;
}

/* GLOBAL CODE */
body {
  width: 100%;
  margin: 0;
  padding: 0;
  background-color: rgb(var(--background-color));
  color: rgba(var(--text-color), 1);
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
  font-family: var(--font-family);
  padding-top: calc(12vh + 70px); // space for navbar
}
.hover {
  transition: 0.3s ease-in-out transform;
  &:hover {
    transition: 0.3s ease-in-out transform;
    transform: scale(1.1);
  }
}
.beatmap-card--mod {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5em;
  margin-right: 0.5em;
  font-weight: 700;
  font-size: var(--font-size-M);
  width: var(--font-size-L);
  height: var(--font-size-L);
  color: rgb(0, 0, 0);
  background-color: rgb(var(--text-color));
  border-radius: 999px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.35);
  &:last-of-type {
    margin: 0;
  }
}
@media (min-width: 800px) {
  #app {
    margin-top: 0;
  }
}
</style>
