<template>
  <button class="styled-button hover">{{ label }}</button>
</template>

<script>
export default {
  name: "BaseButton",
  props: {
    label: String
  }
};
</script>

<style lang="less">
.styled-button {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--text-color);
  background: var(--color-gradient);
  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.5);
  border-radius: 100px;
  padding: 0.4em 1.6em;
  outline: none;
  border: none;
  cursor: pointer;
  text-transform: uppercase;
  user-select: none;
}
</style>
