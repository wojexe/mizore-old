<template>
  <TheLayout>
    <CardProfile />
  </TheLayout>
</template>

<script>
import TheLayout from "@/components/TheLayout.vue";
import CardProfile from "@/components/Cards/CardProfile.vue";
export default {
  name: "Profile",
  components: {
    TheLayout,
    CardProfile
  }
};
</script>

<style></style>
