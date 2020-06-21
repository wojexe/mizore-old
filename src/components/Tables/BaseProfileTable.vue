<template>
  <div class="score-table">
    <span class="table-title">{{ title }}</span>
    <div class="scores">
      <table>
        <tr v-for="score in scoreList" :key="score.id">
          <td>
            <div v-if="score.judgement.includes('+')" class="judgement silver">
              {{ score.judgement.replace("+", "") }}
            </div>
            <div v-else class="judgement">{{ score.judgement }}</div>
            <div class="artist">{{ score.artist }}</div>
            <div class="title">{{ score.title }}</div>
            <div class="difficulty">[{{ score.difficulty }}]</div>
            <div v-for="mod in score.mods" :key="mod" class="mods">
              <div class="mod">{{ mod }}</div>
            </div>
            <div class="accuracy">{{ score.accuracy }}%</div>
            <div class="weightedPP">{{ score.weightedpp }}PP</div>
            <div class="pp">{{ score.pp }}PP</div>
          </td>
        </tr>
      </table>
    </div>
    <BaseShowMore />
  </div>
</template>

<script>
import BaseShowMore from "@/components/BaseShowMore.vue";
export default {
  name: "BaseTable",
  props: {
    title: String,
    scoreList: Array
  },
  components: {
    BaseShowMore
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
  }
  .scores {
    display: flex;
    justify-content: flex-start;
    width: 100%;
    border-radius: 20px;
    font-size: 1.1em;
    overflow-y: hidden;
    overflow-x: auto;
    background: var(--inner-background-color);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
    table {
      height: 100%;
      width: 100%;
      padding: 1.2em 1.4em;
      overflow: hidden;
      tr {
        td {
          margin-bottom: 0.5em;

          display: flex;
          flex-direction: row;
          align-items: center;
          // width: 100%;
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
            font-size: 1.3rem;
            font-weight: 700;
            color: #000;
            background-color: #fff;
            border-radius: 999px;
            box-shadow: 0 0 5px rgba(0, 0, 0, 0.35);
            user-select: none;
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
            color: rgba(255, 255, 255, 0.75);
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
          .mods,
          .accuracy,
          .weightedPP,
          .pp {
            display: none;
            justify-self: flex-end;
          }
          .mods {
            .mod {
            }
          }
          .accuracy {
          }
          .weightedPP {
          }
          .pp {
          }

          /*
          a {
            cursor: pointer;
            span {
              position: absolute;
              color: #222222;
              background-color: #d0d0d0;
              border-radius: 50px;
              padding: 0.05em 0.5em;
              bottom: 1.4rem;
              left: 0;
              font-size: 0.6em;
              font-weight: 700;
            }
          }
          */
        }
      }
    }
  }
  .button--showmore {
    margin-top: 1.2em;
    align-self: center;
  }
}
</style>
