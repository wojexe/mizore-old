<template>
  <Layout>
    <CardUncho />
    <CardInfo />
    <BeatmapsRanked />
  </Layout>
</template>

<script>
import CardUncho from "@/components/Cards/CardUncho.vue";
import CardInfo from "@/components/Cards/CardInfo.vue";
import BeatmapsRanked from "@/components/Cards/CardBeatmapsRanked.vue";
import TheLayout from "@/components/TheLayout.vue";
export default {
  name: "Homepage",
  components: {
    Layout: TheLayout,
    CardInfo: CardInfo,
    CardUncho: CardUncho,
    BeatmapsRanked: BeatmapsRanked
  }
};
</script>
