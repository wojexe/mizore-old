<template>
  <div id="wrapper">
    <div class="navbar-button-container">
      <a @click="turnModal('login')" class="hover" id="button-login" ref="login"
        >LOG IN</a
      >
    </div>
    <div id="user" class="common hover">
      <font-awesome-icon icon="user" />
    </div>
    <div class="navbar-button-container">
      <a @click="turnModal('register')" class="hover">REGISTER</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBarContentNotLoggedIn",
  methods: {
    turnModal(kind) {
      switch (kind) {
        case "login":
          if (this.loginOpened)
            document.getElementById("popup-login").classList.remove("visible");
          else document.getElementById("popup-login").classList.add("visible");
          this.loginOpened = !this.loginOpened;
          break;
        case "register":
          if (this.registerOpened) {
            document
              .getElementById("modal-register")
              .classList.remove("visible");
            document.body.style.overflow = "unset";
          } else {
            document.getElementById("modal-register").classList.add("visible");
            document.body.style.overflow = "hidden";
          }
          this.registerOpened = !this.registerOpened;
          break;
        default:
          // error notification
          break;
      }
    },
    calculatePopupPosition() {
      let popup = document.getElementById("popup-login");
      let loginButton = document.getElementById("button-login");
      let navbar = document.getElementById("nav");
      let navContent = document.getElementById("content");
      function getComputedValueNumber(element, property) {
        return +/[^px]+/.exec(
          window.getComputedStyle(element, null).getPropertyValue(property)
        )[0];
      }
      popup.style.top =
        loginButton.offsetTop +
        loginButton.offsetHeight * 1.5 +
        getComputedValueNumber(popup, "padding-top") +
        "px";
      popup.style.left =
        navbar.offsetLeft +
        loginButton.offsetLeft +
        getComputedValueNumber(navContent, "padding-left") +
        +loginButton.offsetWidth / 2 -
        getComputedValueNumber(popup, "width") / 2 -
        getComputedValueNumber(popup, "padding-left") +
        "px";
    }
  },
  data() {
    return {
      loginOpened: false,
      registerOpened: false
    };
  },
  mounted() {
    this.$nextTick(function() {
      window.addEventListener("resize", this.calculatePopupPosition);
      this.calculatePopupPosition();
    });
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.calculatePopupPosition);
  }
};
</script>

<style lang="less">
#wrapper {
  position: relative;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  width: 100%;
  height: 100%;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  font-size: 1.6rem;
  font-weight: 700;
  #user {
    display: flex;
    justify-content: center;
    align-items: center;
    width: calc(12vh - 30px);
    min-width: 50px;
    max-width: 80px;
    height: calc(12vh - 30px);
    min-height: 50px;
    max-height: 80px;
    background-color: rgba(0, 0, 0, 0.55);
    svg {
      width: 50%;
      height: 50%;
      color: white;
    }
  }
  .navbar-button-container {
    display: flex;
    flex: none;
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
    a {
      user-select: none;
      cursor: pointer;
    }
  }
}
</style>
