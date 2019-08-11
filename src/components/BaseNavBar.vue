<template>
  <div id="nav">
    <div id="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseNavBar"
};
</script>

<style lang="less">
#nav {
  display: flex;
  position: fixed;
  top: 0;
  left: 5vw; // (100vw - 90vw [element width]) / 2
  width: 90vw;
  min-height: 80px;
  max-height: 12vh;
  background: linear-gradient(
    to right,
    rgb(18, 194, 233),
    rgb(196, 113, 237),
    rgb(246, 79, 89)
  );
  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.5);
  border-radius: 0px 0px 35px 35px;
  overflow: hidden;
  z-index: 100;
  #content {
    display: flex;
    width: 100%;
    height: inherit;
    padding: 15px;
    justify-content: center;
    align-items: center;
  }
}
@media (min-width: 800px) {
  #nav {
    max-width: 80%;
    left: 10%;
  }
}
@media (min-width: 1000px) {
  #nav {
    max-width: 820px;
    left: calc(50% - 410px);
  }
}
</style>
