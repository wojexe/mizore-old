<template>
  <BaseCard title="User">
    <Badges />
    <Info />
  </BaseCard>
</template>

<script>
import BaseCard from "@/components/BaseCard.vue";
import Badges from "@/components/Cards/CardUser/Badges.vue";
import Info from "@/components/Cards/CardUser/Info.vue";
export default {
  name: "CardUser",
  components: {
    BaseCard,
    Badges,
    Info
  }
};
</script>

<style lang="less" scoped></style>
