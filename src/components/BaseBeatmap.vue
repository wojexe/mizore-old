<template>
  <a class="beatmap-card">
    <slot />
    <div class="beatmaps-card--background-blur"></div>
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
  font-family: "M PLUS Rounded 1c", "Chivo", BlinkMacSystemFont, "Segoe UI",
    "Roboto", "Oxygen", "Ubuntu", "Helvetica Neue", Arial, sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  & > *:not(img) {
    z-index: 10;
  }
  .beatmaps-card--background-blur {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(7.5px);
    border-radius: 35px;
    z-index: 2;
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
    transform: scale(1.05);
  }
}
</style>
