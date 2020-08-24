<template>
  <div class="mod-icon">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "BaseModIcon"
};
</script>

<style lang="less">
.mod-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5em;
  margin-right: 0.5em;
  font-weight: 700;
  font-size: var(--font-size-M);
  width: var(--font-size-L);
  height: var(--font-size-L);
  color: rgb(0, 0, 0);
  background-color: rgb(var(--text-color));
  border-radius: 999px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.35);
  &:last-of-type {
    margin: 0;
  }
}
</style>
