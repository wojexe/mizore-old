<template>
  <a class="beatmap-card">
    <slot />
    <img :src="backgroundSource" class="beatmap-card--background" />
  </a>
</template>

<script>
export default {
  name: "BaseBeatmap",
  props: {
    backgroundSource: String
  }
};
</script>

<style lang="less">
.beatmap-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100%;
  min-height: 125px;
  border-radius: 35px;
  z-index: 10;
  overflow: hidden;
  font-family: "M PLUS Rounded 1c", var(--font-family);
  & > *:not(img) {
    z-index: 10;
  }
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    min-width: 100%;
    height: auto;
    min-height: 100%;
    display: block;
    z-index: 1;
    filter: blur(7.5px);
    opacity: 0.8;
    transform: scale(1.05);
    transition: 0.3s all ease-in-out;
  }
}
</style>
