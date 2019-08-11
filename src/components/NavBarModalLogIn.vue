<template>
  <form id="popup-login" method="post">
    <base-input className="email" type="email" v-model="email" />
    <base-input
      className="password"
      type="password"
      autocomplete="password-current"
      v-model="password"
    />
    <base-button label="login" />
    <a @click="restorePassword()" id="restorePassword"
      >i don’t remember my login details</a
    >
  </form>
</template>

https://medium.com/@Taha_Shashtari/an-easy-way-to-detect-clicks-outside-an-element-in-vue-1b51d43ff634
https://medium.com/@Taha_Shashtari/an-easy-way-to-detect-clicks-outside-an-element-in-vue-1b51d43ff634
https://medium.com/@Taha_Shashtari/an-easy-way-to-detect-clicks-outside-an-element-in-vue-1b51d43ff634

<script>
import BaseInput from "@/components/BaseInput.vue";
import BaseButton from "@/components/BaseButton.vue";
//let handleOutsideClick;
export default {
  name: "NavBarModalLogIn",
  components: {
    "base-input": BaseInput,
    "base-button": BaseButton
  },
  data: function() {
    return {
      email: null,
      password: null
    };
  },
  methods: {
    restorePassword() {
      return 0;
    }
  }
  //directives: {
  //  closable: {
  //    bind(el, binding, vnode) {
  //      handleOutsideClick = e => {
  //        e.stopPropagation();
  //        const { handler, exclude } = binding.value;
  //        console.log(exclude);
  //        let clickedOnExcludedEl = false;
  //        exclude.forEach(refName => {
  //          if (!clickedOnExcludedEl) {
  //            const excludedEl = vnode.context.$refs[refName];
  //            console.log(vnode);
  //            console.log(refName)
  //            clickedOnExcludedEl = excludedEl.contains(e.target);
  //          }
  //        });
  //        if (!el.contains(e.target) && !clickedOnExcludedEl) {
  //          document.getElementById("button-login").turnModal;
  //        }
  //      };
  //      document.addEventListener("click", handleOutsideClick);
  //      document.addEventListener("touchstart", handleOutsideClick);
  //    },
  //    unbind() {
  //      document.removeEventListener("click", handleOutsideClick);
  //      document.removeEventListener("touchstart", handleOutsideClick);
  //    }
  //  }
  //}
};
</script>

<style lang="less">
#popup-login {
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  padding: 0.5rem 2rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--card-color);
  border-radius: 35px;
  box-shadow: 0 0 35px rgba(0, 0, 0, 0.5);
  z-index: 150;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
  &.visible {
    opacity: 1;
    pointer-events: all;
    transition: opacity 0.3s ease;
  }
  & > * {
    margin: 0.5rem 0;
  }
  #restorePassword {
    position: relative;
    margin-top: 0.25rem;
    font-size: 0.9rem;
    color: orange;
    cursor: pointer;
    z-index: 160;
    &::after {
      display: block;
      content: "";
      position: absolute;
      bottom: 0.1em;
      width: 100%;
      height: 1px;
      border-radius: 10px;
      background-color: orange;
      opacity: 0;
      z-index: 155;
      transition: opacity 0.3s ease;
    }
    &:hover::after {
      opacity: 1;
      transition: opacity 0.3s ease;
    }
  }
}
</style>
