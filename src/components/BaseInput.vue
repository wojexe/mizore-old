<template>
  <div class="container-input">
    <label>{{ className }}</label>
    <input
      :class="className"
      :name="className"
      :type="type"
      :autocomplete="autocomplete"
    />
    <font-awesome-icon
      v-if="type === 'password'"
      :icon="passwordShown ? 'eye-slash' : 'eye'"
      @click="showPassword()"
    />
  </div>
</template>

<script>
export default {
  name: "BaseInput",
  props: {
    className: String,
    type: String,
    autocomplete: String
  },
  data() {
    return {
      passwordShown: false
    };
  },
  methods: {
    showPassword() {
      let target = this.$el.querySelector("input");
      if (target.type === "password") {
        target.type = "text";
        this.passwordShown = true;
      } else {
        target.type = "password";
        this.passwordShown = false;
      }
    }
  }
};
</script>

<style scoped lang="less">
div {
  display: flex;
  position: relative;
  flex-direction: column;
  text-align: center;
  font-size: 1.1rem;
  label {
    color: rgba(255, 255, 255, 0.75);
    margin-bottom: 0.25rem;
    user-select: none;
  }
  input {
    border-radius: 100px;
    border: none;
    padding: 0.3rem 0.5rem;
    outline: none;
    transition: transform 0.3s ease;
    &:focus {
      transform: scale(1.05);
      transition: transform 0.3s ease;
    }
  }
  svg {
    position: absolute;
    top: calc(2.15em - 0.525em);
    right: 0.4rem;
    cursor: pointer;
    color: var(--card-color);
  }
}
</style>
