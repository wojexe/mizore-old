<template>
  <div class="score-table">
    <span class="table-title">{{ title }}</span>
    <div class="scores">
      <div class="inner-table">
        <a
          class="table-row"
          v-for="score in scoreList"
          :key="score.id"
          :href="'https://osu.ppy.sh/beatmapsets/' + score.id"
        >
          <div v-if="score.judgement.includes('+')" class="judgement silver">
            {{ score.judgement.replace("+", "") }}
          </div>
          <div v-else class="judgement">{{ score.judgement }}</div>
          <div class="artist">{{ score.artist }}</div>
          <div class="title">{{ score.title }}</div>
          <div class="difficulty">[{{ score.difficulty }}]</div>
          <div class="align-right">
            <div class="mods">
              <BaseModIcon v-for="mod in score.mods" :key="mod">
                {{ mod }}
              </BaseModIcon>
            </div>
            <div class="aw-stack">
              <div class="accuracy">{{ score.accuracy }}%</div>
              <div class="weightedPP">{{ score.weightedpp }}PP</div>
            </div>
            <div class="pp">{{ score.pp }}PP</div>
          </div>
        </a>
      </div>
    </div>
    <BaseShowMore />
  </div>
</template>

<script>
import BaseModIcon from "@/components/BaseModIcon.vue";
import BaseShowMore from "@/components/BaseShowMore.vue";
export default {
  name: "BaseTable",
  props: {
    title: String,
    scoreList: Array
  },
  components: {
    BaseShowMore,
    BaseModIcon
  }
};
</script>

<style lang="less">
.score-table {
  display: flex;
  flex-direction: column;
  width: 100%;
  .table-title {
    margin-left: 20px; // border-radius
    font-size: var(--font-size-XL);
    font-weight: 700;
    font-style: italic;
  }
  .scores {
    display: flex;
    justify-content: flex-start;
    // 100% - <vertical padding>
    width: calc(100% - 2.4em);
    padding: 1.2em 1.4em;
    border-radius: 20px;
    font-size: calc(var(--font-size-M) * 1.1);
    overflow-y: hidden;
    overflow-x: auto;
    background: rgb(var(--inner-background-color));
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
    .inner-table {
      display: grid;
      flex-direction: column;

      height: 100%;
      width: 100%;
      overflow-y: auto;
      .table-row {
        margin-bottom: 0.5em;

        display: flex;
        flex-direction: row;
        align-items: center;
        min-width: max-content;
        white-space: nowrap;
        padding: 0.25rem;
        padding-top: 0;
        border-bottom: solid 1px rgba(208, 208, 208, 0.5);
        position: relative;
        .judgement {
          display: flex;
          justify-content: center;
          align-items: center;
          width: calc(var(--font-size-XXL) * 1.1);
          height: calc(var(--font-size-XXL) * 1.1);
          margin-right: 0.25rem;
          font-size: calc(var(--font-size-M) * 1.2);
          font-weight: 700;
          color: #000;
          background-color: #fff;
          border-radius: 999px;
          box-shadow: 0 0 5px rgba(0, 0, 0, 0.35);
          user-select: none;
          flex: none;
        }
        .silver {
          color: white;
          // var(--color-gradient) BUT to bottom right
          background: linear-gradient(
            to bottom right,
            rgb(18, 194, 233),
            rgb(196, 113, 237),
            rgb(246, 79, 89)
          );
        }
        .artist,
        .difficulty,
        .accuracy,
        .weightedPP {
          color: rgba(var(--text-color), 0.75);
          font-size: var(--font-size-S);
        }
        .artist {
          position: absolute;
          left: calc(0.5rem + calc(var(--font-size-XXL) * 1.1));
          transform: translateY(-40%);
        }
        .title {
          font-size: var(--font-size-L);
          transform: translateY(30%);
        }
        .difficulty {
          margin-left: 0.2em;
          font-size: calc(var(--font-size-S) * 0.9);
          transform: translateY(35%);
        }
        .align-right {
          display: flex;
          flex-direction: row;
          flex: 1;
          justify-content: flex-end;
          align-items: center;

          font-style: italic;
          .mods {
            display: flex;
            flex-direction: row;
            margin-left: 0.5rem;
            font-style: normal;
            .mod-icon {
              padding: 0.25em;
              margin-right: 0.5em;
              font-size: calc(var(--font-size-S) * 0.9);
            }
            .mod-icon:last-of-type {
              margin-right: 0;
            }
          }
          .aw-stack {
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            margin-left: 0.5rem;
            width: 4.5ch;
            .accuracy,
            .weightedPP {
              color: rgba(255, 255, 255, 0.75);
              font-size: calc(var(--font-size-S) * 0.8);
            }
          }
          .pp {
            position: relative;
            font-size: var(--font-size-XL);
            padding-left: 1.2ch;
          }
          .pp::before {
            display: block;
            position: absolute;
            content: "/";
            left: 0.2ch;
            transform: translateY(-10%);
            color: rgba(var(--text-color), 0.75);
          }
        }
      }
    }
  }
  .button--showmore {
    margin-top: 1.2em;
    align-self: center;
  }
}

@media (max-width: 940px) {
  .score-table {
    --font-size-S: 0.8rem;
    --font-size-M: 0.9rem;
    --font-size-L: 1rem;
    --font-size-XL: 1.2rem;
    --font-size-XXL: 1.5rem;
  }
}

@media (max-width: 825px) {
  .score-table {
    .scores {
      .inner-table {
        .table-row {
          .align-right {
            .aw-stack {
              min-width: 0px;
            }
          }
        }
      }
    }
  }
}
</style>
