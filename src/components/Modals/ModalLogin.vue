<template>
  <BaseModal modalName="login">
    <form id="form-login" @submit.prevent="onSubmit">
      <span id="modal-title">LOGIN</span>
      <BaseInput
        className="username"
        type="text"
        autocomplete="username nickname"
        v-model="username"
      />
      <BaseInput
        className="password"
        type="password"
        autocomplete="password-new"
        v-model="password"
      />
      <BaseButton label="login" />
    </form>
  </BaseModal>
</template>

<script>
import BaseModal from "@/components/BaseModal.vue";
import BaseInput from "@/components/BaseInput.vue";
import BaseButton from "@/components/BaseButton.vue";
export default {
  name: "ModalLogin",
  components: {
    BaseModal: BaseModal,
    BaseInput: BaseInput,
    BaseButton: BaseButton
  },
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    onSubmit() {
      // eslint-disable-next-line no-console
      console.log("submitted 😉️");
      // eslint-disable-next-line no-console
      console.log(this.username, this.password);
    }
  }
};
</script>

<style lang="less">
#form-login {
  display: flex;
  padding: 0.75em 4em;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgb(var(--card-color));
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
  }
}
</style>
