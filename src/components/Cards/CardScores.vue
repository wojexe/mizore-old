<template>
  <BaseCard title="Scores">
    <BaseBeatmap
      :backgroundSource="
        'https://assets.ppy.sh/beatmaps/' + topScore.id + '/covers/cover.jpg'
      "
      :href="'https://osu.ppy.sh/beatmapsets/' + topScore.id"
    >
      <span class="beatmap-card--performance">{{ topScore.pp }}PP</span>
      <span class="beatmap-card--artist">{{ topScore.artist }}</span>
      <span class="beatmap-card--title">{{ topScore.title }}</span>
      <span class="beatmap-card--diff">[{{ topScore.difficulty }}]</span>
      <span class="beatmap-card--mods">
        <div v-for="mod in topScore.mods" :key="mod" class="beatmap-card--mod">
          {{ mod }}
        </div>
      </span>
    </BaseBeatmap>
    <BaseProfileTable title="Top scores" :scoreList="scores" />
  </BaseCard>
</template>

<script>
import BaseCard from "@/components/BaseCard.vue";
import BaseBeatmap from "@/components/BaseBeatmap.vue";
import BaseProfileTable from "@/components/Tables/BaseProfileTable.vue";
export default {
  name: "Scores",
  components: {
    BaseCard,
    BaseBeatmap,
    BaseProfileTable
  },
  data() {
    return {
      scores: [
        {
          id: "813712",
          artist: "40meterP",
          title: "Usotsuki wa Koi no Hajimari",
          difficulty: "Hidden love",
          mods: ["HD", "DT"],
          judgement: "SS+",
          accuracy: "100.00",
          weightedpp: "619",
          pp: "619"
        },
        {
          id: "513590",
          artist: "RADWIMPS",
          title: "Zen Zen Zense (movie ver.)",
          difficulty: "Extra: Mitsuha",
          mods: ["HD", "DT"],
          judgement: "S+",
          accuracy: "98.71",
          weightedpp: "591",
          pp: "591"
        },
        {
          id: "361740",
          artist: "Agnete Kjolsrud",
          title: "Get Jinxed",
          difficulty: "Master",
          mods: ["HD", "DT"],
          judgement: "SS",
          accuracy: "98.82",
          weightedpp: "541",
          pp: "570"
        },
        {
          id: "983911",
          artist: "S3RL",
          title: "Bass Slut (Original Mix)",
          difficulty: "Reform's Filthy Expert",
          mods: ["HD", "DT"],
          judgement: "S+",
          accuracy: "100.00",
          weightedpp: "505",
          pp: "560"
        },
        {
          id: "409164",
          artist: "S3RL feat Mixie Moon",
          title: "FriendZoned",
          difficulty: "Slayed's Extreme",
          mods: ["HD", "DT"],
          judgement: "S+",
          accuracy: "98.00",
          weightedpp: "479",
          pp: "559"
        },
        {
          id: "452230",
          artist: "BABYMETAL",
          title: "Gimme chocolate!!",
          difficulty: "BLACK CHOCOLATE!!",
          mods: ["HD", "DT"],
          judgement: "S",
          accuracy: "99.77",
          weightedpp: "455",
          pp: "559"
        }
      ]
    };
  },
  computed: {
    topScore() {
      return {
        id: this.scores[0].id,
        artist: this.scores[0].artist,
        title: this.scores[0].title,
        difficulty: this.scores[0].difficulty,
        mods: this.scores[0].mods,
        pp: this.scores[0].pp
      };
    }
  }
};
</script>

<style lang="less" scoped>
.base-card {
  padding-bottom: 1.5em;
}
.beatmap-card {
  padding: 0.8em 1em;
  max-width: 300px;
  font-size: var(--font-size-L);
  & > * {
    text-shadow: 0 0 5px rgba(0, 0, 0, 0.35);
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    max-width: 100%;
  }
  .beatmap-card--performance {
    font-family: var(--font-family);
    font-size: var(--font-size-XL);
    font-weight: 700;
    font-style: italic;
  }
  .beatmap-card--artist {
    transform: translateY(0.5em);
  }
  .beatmap-card--title {
    font-size: var(--font-size-XL);
    font-weight: 700;
  }
  .beatmap-card--diff {
    transform: translateY(-0.5em);
  }
  .beatmap-card--mods {
    display: flex;
    font-family: var(--font-family);
    flex-direction: row;
    align-items: center;
    justify-content: center;
    overflow: visible;
    user-select: none;
    text-shadow: none;
    .beatmap-card--mod {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.5em;
      margin-right: 0.5em;
      font-weight: 700;
      font-size: var(--font-size-M);
      width: var(--font-size-L);
      height: var(--font-size-L);
      color: #000;
      background: #fff;
      border-radius: 999px;
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.35);
      &:last-of-type {
        margin: 0;
      }
    }
  }
}
.base-card > * {
  margin: 1rem 0;
}
.base-card > *:last-child {
  margin-bottom: 0;
}
@media (max-width: 480px) {
  .beatmap-card {
    max-width: 200px;
  }
}
@media (max-width: 350px) {
  .beatmap-card {
    max-width: 150px;
  }
}
</style>
