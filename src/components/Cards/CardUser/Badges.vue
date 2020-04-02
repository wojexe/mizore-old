<template>
  <div id="badges">
    <img
      v-for="badge in userData.badges"
      :key="badge.name"
      :src="`/assets/` + /*badge.name.toLowerCase()*/ `donator` + `.png`"
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
.base-card {
  align-items: center;
}
#badges {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 75%;
  height: 3em;
  overflow: hidden;
  .badge {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 80px;
    height: 30px;
    margin: 0 0.75em;
    text-transform: uppercase;
    border-radius: 7.5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
    &::after {
      position: absolute;
      display: block;
      content: "";
      width: 100%;
      height: 100%;
      border-radius: 7.5%;
      box-shadow: rgba(0, 0, 0, 0.25);
    }
  }
  .border {
    display: block;
    height: 100%;
    width: 2em;
    content: "";
  }
}
</style>
