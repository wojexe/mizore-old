<template>
  <div id="homepage">
    <CardUncho />
    <CardInfo />
    <BeatmapsRanked />
  </div>
</template>

<script>
import CardUncho from "@/components/Cards/CardUncho.vue";
import CardInfo from "@/components/Cards/CardInfo.vue";
import BeatmapsRanked from "@/components/Cards/CardBeatmapsRanked.vue";
export default {
  name: "Homepage",
  components: {
    CardUncho: CardUncho,
    CardInfo: CardInfo,
    BeatmapsRanked: BeatmapsRanked
  }
};
</script>

<style scoped lang="less">
#homepage {
  display: grid;
  grid-template-columns: 1fr [content] 80% 1fr;
  grid-template-rows: auto;
  grid-row-gap: 50px;
  & > * {
    grid-column: content;
  }
}

@media (min-width: 1000px) {
  #homepage {
    grid-template-columns: 1fr [content] 800px 1fr; // Make it that max width of the content column doesnt exceed 800px
  }
}
</style>
