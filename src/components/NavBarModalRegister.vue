<template>
  <div id="modal-register">
    <font-awesome-icon
      id="modal-close"
      class="hover"
      icon="times"
      @click="turnModal()"
    />
    <form id="form-register" method="post">
      <span id="modal-title">REGISTER</span>
      <base-input
        className="username"
        type="text"
        autocomplete="username nickname"
        v-model="username"
      />
      <base-input className="email" type="email" v-model="email" />
      <base-input
        className="password"
        type="password"
        autocomplete="password-new"
        v-model="password"
      />
      <base-input
        className="key"
        type="password"
        autocomplete="off"
        v-model="key"
      />
      <base-button label="register" />
    </form>
  </div>
</template>

<script>
import BaseInput from "@/components/BaseInput.vue";
import BaseButton from "@/components/BaseButton.vue";
export default {
  name: "NavBarModalLogIn",
  components: {
    "base-input": BaseInput,
    "base-button": BaseButton
  },
  data: function() {
    return {
      username: String,
      email: String,
      password: String,
      key: String
    };
  },
  methods: {
    turnModal() {
      this.$parent.$children[0].$children[0].$children[0].turnModal("register");
    }
  }
};
</script>

<style lang="less">
#modal-register {
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  z-index: 175;
  backdrop-filter: blur(15px);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
  #modal-close {
    font-size: 1.25rem;
    height: 1em;
    width: 1em;
    border-radius: 999px;
    margin-bottom: 0.75rem;
    padding: 10px;
    color: rgba(0, 0, 0, 0.75);
    background-color: rgba(255, 255, 255, 0.8);
  }
  #form-register {
    display: flex;
    padding: 0.75em 4em;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--card-color);
    border-radius: 35px;
    box-shadow: 0 0 35px rgba(0, 0, 0, 0.5);
    z-index: 200;
    #modal-title {
      font-size: 1.4em;
      font-weight: 700;
      margin: 0.75rem 0;
      user-select: none;
    }
    .container-input:not(:last-of-type) {
      margin-bottom: 0.75em;
    }
    button {
      margin-top: 1.5em;
      margin-bottom: 1rem;
      padding: 0.4em 1.6em;
    }
  }
  &.visible {
    opacity: 1;
    pointer-events: all;
    transition: opacity 0.3s ease;
  }
}
</style>
