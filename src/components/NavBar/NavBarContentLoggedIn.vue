<template>
  <router-link
    to="/profile/:id"
    :style="[src ? {} : { width: 'unset' }]"
    class="hover"
  >
    <img :src="src" alt="avatar" />
  </router-link>
</template>

<script>
export default {
  name: "NavBarContentLoggedIn",
  props: {
    src: String
  }
};
</script>

<style scoped lang="less">
a {
  display: block;
  height: 100%;
  width: calc(12vh - 30px); // 30px is padding
  min-width: 50px;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
}
</style>
