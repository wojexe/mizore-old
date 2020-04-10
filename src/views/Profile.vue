<template>
  <TheLayout>
    <CardProfile />
    <CardUser />
  </TheLayout>
</template>

<script>
import TheLayout from "@/components/TheLayout.vue";
import CardProfile from "@/components/Cards/CardProfile.vue";
import CardUser from "@/components/Cards/CardUser.vue";
export default {
  name: "Profile",
  components: {
    TheLayout,
    CardProfile,
    CardUser
  }
};
</script>

<style>
.base-card {
  align-items: center;
}
</style>
