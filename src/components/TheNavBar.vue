<template>
  <div id="nav">
    <div id="content">
      <NavBarLogo class="hover" />
      <NavBarSiteSwitcher />
      <NavBarAvatar :src="src" @click.native="showPopup('user')">
        <PopUpUser :class="{ visible: isVisible }" />
      </NavBarAvatar>
    </div>
  </div>
</template>

<script>
import { EventBus } from "@/eventBus";

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
  props: {
    src: String,
    popupName: String
  },
  data() {
    return {
      isVisible: false
    };
  },
  methods: {
    showPopup(popupName) {
      if (!this.isVisible) {
        EventBus.$emit(`popup_${popupName}-open`);
      }
    }
  },
  mounted() {
    EventBus.$on(`popup_user-open`, () => {
      this.isVisible = true;
    });
    EventBus.$on(`popup_user-close`, () => {
      this.isVisible = false;
    });
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
