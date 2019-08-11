<template>
  <div id="homepage">
    <card-uncho />
    <base-card title="Info">slots are workin!!</base-card>
    <base-card title="Another card!" />
  </div>
</template>

<script>
import CardUncho from "@/components/CardUncho.vue";
export default {
  name: "Homepage",
  components: {
    "card-uncho": CardUncho
  }
};
</script>

<style scoped lang="less">
#homepage {
  display: grid;
  grid-template-columns: 1fr [content] 80% 1fr;
  grid-template-rows: auto;
  grid-row-gap: 50px;
  margin: calc(12vh + 70px) 0; // space for navbar
  & > * {
    grid-column: content;
  }
}

@media (min-width: 1000px) {
  #homepage {
    grid-template-columns: 1fr [content] 800px 1fr; // Make it that max width of the content column doesnt exceed 800px
    grid-row-gap: 50px;
  }
}
</style>
