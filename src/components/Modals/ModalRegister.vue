<template>
  <BaseModal modalName="register">
    <form id="form-register" method="post">
      <span id="modal-title">REGISTER</span>
      <BaseInput
        className="username"
        type="text"
        autocomplete="username nickname"
        v-model="username"
      />
      <BaseInput className="email" type="email" v-model="email" />
      <BaseInput
        className="password"
        type="password"
        autocomplete="password-new"
        v-model="password"
      />
      <BaseInput
        className="key"
        type="password"
        autocomplete="off"
        v-model="key"
      />
      <BaseButton label="register" />
    </form>
  </BaseModal>
</template>

<script>
import BaseModal from "@/components/BaseModal.vue";
import BaseInput from "@/components/BaseInput.vue";
import BaseButton from "@/components/BaseButton.vue";
export default {
  name: "ModalRegister",
  components: {
    BaseModal: BaseModal,
    BaseInput: BaseInput,
    BaseButton: BaseButton
  },
  data: function() {
    return {
      username: String,
      email: String,
      password: String,
      key: String
    };
  }
};
</script>

<style lang="less">
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
  }
}
</style>
