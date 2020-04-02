<template>
  <div id="info">
    <div>location</div>
    <div>interest</div>
    <div>posession</div>
  </div>
</template>

<script>
export default {
  name: "Info"
};
</script>

<style lang="less">
#info {
  display: flex;
  flex-direction: row;
  & > * {
    margin: 0 1em;
  }
}
</style>
