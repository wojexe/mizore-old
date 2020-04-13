<template>
  <base-card title="New ranked beatmaps" class="show-more">
    <div class="beatmaps-container" :style="rankedBeatmapStyle">
      <BaseBeatmap
        class="beatmap-card"
        v-for="(item, index) in beatmaps"
        :key="item.id"
        :href="'https://osu.ppy.sh/beatmapsets/' + item.id"
        :backgroundSource="item.background"
        v-bind:class="{
          spanned:
            index == beatmaps.length - 1 &&
            beatmaps.length % 2 != 0 &&
            windowWidth >= 960
        }"
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
      </BaseBeatmap>
    </div>
    <BaseShowMore @click="requestData" />
  </base-card>
</template>

<script>
//TODO: implement api
//TODO: (after api implementation) make diffs collapse when they overflow
import BaseShowMore from "@/components/BaseShowMore.vue";
import BaseBeatmap from "@/components/BaseBeatmap.vue";
export default {
  name: "BeatmapsRanked",
  components: {
    BaseShowMore,
    BaseBeatmap
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
          background: "https://picsum.photos/1600/900"
        },
        {
          id: "2",
          artist: "Our Stolen Theory",
          title: "UNITED (LAOS Remix)",
          diffs: ["EZ", "NM", "HR", "EX+", "+4"],
          background: "https://picsum.photos/1600/901"
        },
        {
          id: "3",
          artist: "USAO",
          title: "Showdown",
          diffs: ["NM", "HR", "EX+"],
          background: "https://picsum.photos/1600/903"
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
                Math.ceil(this.beatmaps.length / 2)
              )}`
            : `${"minmax(180px, max-content) ".repeat(this.beatmaps.length)}`
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
.base-card {
  align-items: center;
  .beatmaps-container {
    display: grid;
    // grid-template-rows handled by js
    grid-template-columns: 100%;
    grid-gap: 1.5em;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    width: 100%;
    .beatmap-card {
      .beatmap-card--artist,
      .beatmap-card--title,
      .beatmap-card--diff-container {
        position: relative;
        top: 0.4rem;
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
        font-family: "Chivo", BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
          "Ubuntu", "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
          "Segoe UI Emoji", "Segoe UI Symbol";
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
    }
    .spanned {
      grid-column-start: 1;
      grid-column-end: 3;
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
