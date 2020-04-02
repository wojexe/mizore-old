<template>
  <base-card title="New ranked beatmaps">
    <div class="beatmaps-container" :style="rankedBeatmapStyle">
      <!-- <div class="beatmaps-container"> -->
      <a
        class="beatmap-card"
        :href="'https://osu.ppy.sh/beatmapsets/' + item.id"
        v-for="item in beatmaps"
        :key="item.id"
      >
        <span class="beatmap-card--artist">{{ item.artist }}</span>
        <span class="beatmap-card--title">{{ item.title }}</span>
        <div class="beatmap-card--diff-container">
          <div
            class="beatmap-card--diff"
            :style="{ backgroundColor: getColor(diffabbr) }"
            v-for="diffabbr in item.diffs"
            :key="diffabbr"
          >
            {{ diffabbr == "EX+" ? "EX" : diffabbr }}
          </div>
        </div>
        <div class="beatmaps-card--background-blur"></div>
        <img :src="item.background" class="beatmap-card--background" />
      </a>
    </div>
    <BaseShowMore @click="requestData" />
  </base-card>
</template>

<script>
//TODO (after api implementation) make diffs collapse when they overflow
import BaseShowMore from "@/components/BaseShowMore.vue";
export default {
  name: "BeatmapsRanked",
  components: {
    BaseShowMore: BaseShowMore
  },
  data() {
    return {
      colors: {
        EZ: "#65821d",
        NM: "#65c8fa",
        HR: "#d4ac40",
        IN: "#fa65a7",
        EX: "#876ade",
        "EX+": "#000"
      },
      beatmaps: [
        {
          id: "1",
          artist: "40meterP",
          title: "Usotsuki wa Koi no Hajimari",
          diffs: ["EZ", "NM", "EX"],
          background: "https://picsum.photos/1600/901"
        },
        {
          id: "2",
          artist: "Our Stolen Theory",
          title: "UNITED (LAOS Remix)",
          diffs: ["EZ", "NM", "HR", "EX+", "+4"],
          background: "https://picsum.photos/1600/900"
        }
      ],
      windowWidth: window.innerWidth
    };
  },
  methods: {
    requestData() {
      return "";
    },
    getColor(diffabbr) {
      switch (diffabbr) {
        case "EZ":
          return this.colors.EZ;
        case "NM":
          return this.colors.NM;
        case "HR":
          return this.colors.HR;
        case "IN":
          return this.colors.IN;
        case "EX":
          return this.colors.EX;
        case "EX+":
          return this.colors["EX+"];
        default:
          return "#ccc";
      }
    }
  },
  computed: {
    rankedBeatmapStyle() {
      return {
        gridTemplateRows:
          this.windowWidth >= 960
            ? `${"minmax(180px, 220px) ".repeat(
                Math.floor(this.beatmaps.length / 2)
              )}`
            : `${"minmax(180px, 220px) ".repeat(this.beatmaps.length)}`
      };
    }
  },
  mounted() {
    window.addEventListener("resize", () => {
      this.windowWidth = window.innerWidth;
    });
  }
};
</script>

<style scoped lang="less">
:root {
  --ranked-beatmaps-count: 2;
}
.base-card {
  align-items: center;
  .beatmaps-container {
    display: grid;
    //grid-template-rows handled by js
    grid-template-columns: 100%;
    grid-gap: 1.5em;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    width: 100%;
    .beatmap-card {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      position: relative;
      height: 100%;
      min-height: 125px;
      border-radius: 35px;
      z-index: 10;
      overflow: hidden;
      .beatmap-card--artist,
      .beatmap-card--title,
      .beatmap-card--diff-container {
        position: relative;
        top: 0.65rem;
      }
      .beatmap-card--artist,
      .beatmap-card--title {
        text-shadow: 0 0 5px rgba(0, 0, 0, 0.35);
      }
      .beatmap-card--artist {
        font-size: 1.25em;
        width: 90%;
        text-align: center;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }
      .beatmap-card--title {
        font-size: 1.5em;
        font-weight: 700;
        width: 90%;
        text-align: center;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }
      .beatmap-card--diff-container {
        display: grid;
        grid-template-columns: auto;
        grid-template-rows: 1;
        grid-gap: 1.5em;
        margin-top: 0.2em;
        & > * {
          grid-row: 1;
        }
        .beatmap-card--diff {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: red;
          color: #000;
          font-weight: 700;
          font-size: 1.1em;
          width: 2.2em;
          height: 2.2em;
          border-radius: 100px;
          box-shadow: 0 0 5px rgba(0, 0, 0, 0.35);
          z-index: 5;
          &::before {
            position: absolute;
            display: block;
            content: "";
            width: 85%;
            height: 85%;
            background: #fff;
            border-radius: 100px;
            z-index: -1;
          }
        }
      }
      & > *:not(img) {
        z-index: 10;
      }
      &:nth-child(2n) {
        margin-right: 0;
      }
      .beatmaps-card--background-blur {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.3);
        backdrop-filter: blur(7.5px);
        border-radius: 35px;
        z-index: 2;
      }
      img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        min-width: 100%;
        height: auto;
        min-height: 100%;
        display: block;
        z-index: 1;
      }
    }
  }
  & > * {
    margin: 0.6em 0;
    &:last-child {
      margin-bottom: 0;
    }
  }
}
@media (min-width: 960px) {
  .base-card {
    .beatmaps-container {
      //grid-template-rows handled by js
      grid-template-columns: 1fr 1fr;
    }
  }
}
</style>
