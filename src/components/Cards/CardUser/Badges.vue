<template>
  <div id="badges">
    <img
      v-for="badge in userData.badges"
      :key="badge.name"
      :src="`/assets/badges/` + badge.name.toLowerCase() + `.png`"
      :alt="badge.name.toLowerCase()"
      class="badge"
    />
  </div>
</template>

<script>
export default {
  name: "Badges",
  data() {
    return {
      userData: {
        badges: [
          {
            name: "Beta",
            img: "1/2/3"
          },
          {
            name: "Helper",
            img: "1/2/3"
          },
          {
            name: "Donator",
            img: "1/2/3"
          },
          {
            name: "Colorful",
            img: "1/2/3"
          },
          {
            name: "Cats",
            img: "1/2/3"
          }
        ]
      }
    };
  }
};
</script>

<style lang="less">
#badges {
  display: grid;
  grid-template-rows: 1;
  grid-gap: 0.75em;
  align-items: center;
  justify-items: center;
  width: 75%;
  height: 3em;
  overflow-x: auto;
  scroll-snap-type: x proximity;
  scroll-padding: 0.5em;
  .badge {
    display: flex;
    position: relative;
    grid-row: 1;
    max-width: 80px;
    height: 30px;
    text-transform: uppercase;
    scroll-snap-align: start;
    border-radius: 7.5px;
    box-shadow: 0 0 7.5px rgba(0, 0, 0, 0.25);
  }
  .border {
    display: block;
    height: 100%;
    width: 2em;
    content: "";
  }
}
</style>
