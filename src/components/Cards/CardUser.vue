<template>
  <BaseCard title="User">
    <Badges />
    <Presentation />
  </BaseCard>
</template>

<script>
import BaseCard from "@/components/BaseCard.vue";
import Badges from "@/components/Cards/CardUser/Badges.vue";
import Presentation from "@/components/Cards/CardUser/Presentation.vue";
export default {
  name: "CardUser",
  components: {
    BaseCard,
    Badges,
    Presentation
  }
};
</script>

<style lang="less" scoped></style>
