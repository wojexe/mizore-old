<template>
  <BasePopUp>
    <span class="popup-option" @click="modalTurn('login')">Login</span>
    <span class="popup-option" @click="modalTurn('register')">Register</span>
  </BasePopUp>
</template>

<script>
import BasePopUp from "@/components/BasePopUp.vue";
export default {
  name: "PopUpUser",
  components: {
    BasePopUp: BasePopUp
  },
  data() {
    return {
      userOptions: [{ name: "Login" }, { name: "Register" }],
      isVisible: false
    };
  },
  methods: {
    modalTurn(key) {
      eval(`this.$root.$children[0].$refs.${key}.$children[0].turnModal()`);
    }
  }
};
</script>

<style scoped lang="less">
.popup-option {
  position: relative;
  margin: 0.25rem 0;
  cursor: pointer;
  &::before {
    display: block;
    content: "";
    position: absolute;
    top: 50%;
    left: -0.5em;
    transform: translate(0, -50%);
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: #fff;
    pointer-events: none;

    opacity: 0;
    transition: opacity 0.3s ease;
  }
  &:hover {
    &::before {
      opacity: 1;
      transition: opacity 0.3s ease;
    }
  }
}
</style>
