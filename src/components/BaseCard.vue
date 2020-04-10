<template>
  <div class="base-card">
    <h1>{{ title }}</h1>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "BaseCard",
  props: {
    title: String
  }
};
</script>

<style lang="less">
.base-card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 200px;
  height: calc(100% - calc(1.6rem * 2)); // Subtract padding
  padding: 1.6rem 2.4rem;
  overflow: hidden;
  scroll-margin-top: 5rem;
  font-size: var(--font-size-S);
  background-color: var(--card-color);
  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.5);
  border-radius: 45px;
  h1 {
    margin: 0;
    font-size: var(--font-size-XXL);
    align-self: center;
    margin-bottom: 1rem;
    text-align: center;
    font-style: italic;
    user-select: none;
  }
}
@media (min-width: 800px) {
  .base-card {
    min-height: 300px;
    font-size: var(--font-size-M);
    h1 {
      font-size: calc(var(--font-size-XXL) * 1.5);
    }
  }
}
@media (max-width: 400px) {
  .base-card {
    padding: calc(1.6rem * 1 / 2) inherit;
  }
}
</style>
