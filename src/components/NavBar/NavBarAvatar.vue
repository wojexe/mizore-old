<template>
  <router-link v-if="src" class="avatar hover" to="/profile/:id">
    <img :src="src" alt="avatar" />
    <slot></slot>
  </router-link>
  <div v-else class="avatar hover notLogged">
    <font-awesome-icon icon="user" />
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "BaseAvatar",
  props: {
    src: String
  }
};
</script>

<style scoped lang="less">
a {
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(12vh - 30px);
  min-width: 50px;
  max-width: 80px;
  height: calc(12vh - 30px);
  min-height: 50px;
  max-height: 80px;
  img {
    height: 100%;
    width: 100%;
    border-radius: 500px;
    object-fit: cover;
  }
}
.notLogged {
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(12vh - 30px);
  min-width: 50px;
  max-width: 80px;
  height: calc(12vh - 30px);
  min-height: 50px;
  max-height: 80px;
  background-color: rgba(0, 0, 0, 0.55);
  svg {
    width: 50%;
    height: 50%;
    color: #fff;
  }
}
.avatar {
  position: relative;
  border-radius: 500px;
  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.25);
}
</style>
