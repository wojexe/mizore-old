<template>
  <base-navbar>
    <navbar-content-loggedin v-if="src" :src="src" class="common" />
    <navbar-content-not-loggedin v-else />
  </base-navbar>
</template>

<script>
import BaseNavBar from "@/components/BaseNavBar.vue";
import NavBarContentLoggedIn from "@/components/NavBarContentLoggedIn.vue";
import NavBarContentNotLoggedIn from "@/components/NavBarContentNotLoggedIn.vue";
export default {
  name: "NavBarCombined",
  components: {
    "base-navbar": BaseNavBar,
    "navbar-content-loggedin": NavBarContentLoggedIn,
    "navbar-content-not-loggedin": NavBarContentNotLoggedIn
  },
  props: {
    src: String
  }
};
</script>

<style lang="less">
.common {
  border-radius: 9999px;
  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.25);
  overflow: hidden;
}
</style>
