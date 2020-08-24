<template>
  <TheLayout>
    <CardProfile />
    <CardUser />
    <CardScores />
    <CardRecent />
  </TheLayout>
</template>

<script>
import TheLayout from "@/components/TheLayout.vue";
import CardProfile from "@/components/Cards/CardProfile.vue";
import CardUser from "@/components/Cards/CardUser.vue";
import CardScores from "@/components/Cards/CardScores.vue";
import CardRecent from "@/components/Cards/CardRecent.vue";
export default {
  name: "Profile",
  components: {
    TheLayout,
    CardProfile,
    CardUser,
    CardScores,
    CardRecent
  }
};
</script>

<style>
.base-card {
  align-items: center;
}
</style>
