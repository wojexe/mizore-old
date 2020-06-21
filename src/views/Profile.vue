<template>
  <TheLayout>
    <CardProfile />
    <CardUser />
    <CardScores />
  </TheLayout>
</template>

<script>
import TheLayout from "@/components/TheLayout.vue";
import CardProfile from "@/components/Cards/CardProfile.vue";
import CardUser from "@/components/Cards/CardUser.vue";
import CardScores from "@/components/Cards/CardScores.vue";
export default {
  name: "Profile",
  components: {
    TheLayout,
    CardProfile,
    CardUser,
    CardScores
  }
};
</script>

<style>
.base-card {
  align-items: center;
}
</style>
