<template>
  <div class="base-card video-card">
    <h1>{{ title }}</h1>
    <video loop muted autoplay="true">
      <source src="@/assets/video.mp4" type="video/mp4" />
      <span id="video--warning">
        This browser does not support HTML5 video.<a href="@/assets/video.mp4"
          >Click here</a
        >
        to watch it.</span
      >
    </video>
  </div>
</template>

<script>
export default {
  name: "VideoCard",
  props: {
    title: String
  }
};
</script>

<style scoped lang="less">
video {
  position: absolute;
  z-index: 0;
}
.video-card {
  position: relative;
  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.5);
  h1 {
    font-size: 4rem;
    padding: 2rem 3rem;
    border-radius: 85px;
    backdrop-filter: blur(30px);
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.3);
    background-color: rgba(0, 0, 0, 0.3);
    text-transform: uppercase;
    z-index: 5;
  }
}
@media (max-width: 420px) {
  .video-card {
    /deep/ h1 {
      font-size: 3rem;
      padding: 1.5rem 2.5rem;
    }
  }
}
</style>
