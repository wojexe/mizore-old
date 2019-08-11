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
  justify-content: center;
  min-height: 200px;
  max-height: 60vh;
  height: calc(100% - calc(1.6rem * 2)); // Subtract padding
  padding: 1.6rem 2.2rem;
  background-color: var(--card-color);
  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.5);
  border-radius: 45px;
  overflow: hidden;
  h1 {
    display: inline;
    margin: 0;
    font-size: 3rem;
    align-self: center;
    margin-bottom: 1rem;
    text-align: center;
    user-select: none;
  }
}
@media (min-width: 800px) {
  .base-card {
    min-height: 300px;
  }
}
</style>
