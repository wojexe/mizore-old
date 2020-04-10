<template>
  <div id="nav">
    <div id="content">
      <NavBarLogo class="hover" />
      <NavBarSiteSwitcher />
      <NavBarAvatar @click.native="show" :src="src">
        <PopUpUser :class="{ visible: isVisible }" @hide="hide" />
      </NavBarAvatar>
    </div>
  </div>
</template>

<script>
import NavBarLogo from "@/components/NavBar/NavBarLogo.vue";
import NavBarAvatar from "@/components/NavBar/NavBarAvatar.vue";
import NavBarSiteSwitcher from "@/components/NavBar/NavBarSiteSwitcher.vue";
import PopUpUser from "@/components/PopUps/PopUpUser.vue";
export default {
  name: "TheNavBar",
  components: {
    NavBarLogo: NavBarLogo,
    NavBarAvatar: NavBarAvatar,
    NavBarSiteSwitcher: NavBarSiteSwitcher,
    PopUpUser: PopUpUser
  },
  data() {
    return {
      isVisible: false
    };
  },
  props: {
    src: String
  },
  methods: {
    show() {
      this.isVisible = true;
    },
    hide() {
      this.isVisible = false;
    }
  }
};
</script>

<style lang="less">
#nav {
  display: flex;
  flex: none;
  justify-content: center;
  align-items: center;
  position: fixed;
  font-size: var(--font-size-M);
  top: 0;
  left: 5vw; // (100vw - 90vw [element width]) / 2
  width: 90vw;
  min-height: 80px;
  max-height: 12vh;
  background: var(--color-gradient);
  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.5);
  border-radius: 0px 0px 35px 35px;
  z-index: 100;
  #content {
    position: relative;
    display: flex;
    width: 100%;
    height: inherit;
    padding: 15px 20px;
    justify-content: space-between;
    align-items: center;
  }
}
@media (min-width: 800px) {
  #nav {
    max-width: 80%;
    left: 10%;
  }
}
@media (min-width: 1000px) {
  #nav {
    max-width: 820px;
    left: calc(50% - 410px);
  }
}
@media (min-height: 750px) {
  #nav {
    font-size: var(--font-size-L);
  }
}
</style>
