<template>
  <div id="presentation">
    <div id="short-container">
      <div class="short">
        <div><font-awesome-icon icon="location-arrow" /></div>
        yo mama ass
      </div>
      <div class="short">
        <div><font-awesome-icon :icon="getHeart" /></div>
        big tiddies
      </div>
      <div class="short">
        <div><font-awesome-icon icon="suitcase" /></div>
        uncho! dev team
      </div>
    </div>
    <div id="explication">
      <div id="playstyle">
        <h2>Playstyle</h2>
        <div class="content">
          <span class="style">TABLET</span>
          <span class="style">KEYBOARD</span>
        </div>
      </div>
      <div id="stats">
        <h2>Stats</h2>
        <div class="content">
          <div>
            <div class="stat">Ranked score</div>
            <span class="value">22,076,467,510</span>
          </div>
          <div>
            <div class="stat">Avg. accuracy</div>
            <span class="value">98.13%</span>
          </div>
          <div>
            <div class="stat">Playcount</div>
            <span class="value">59,173</span>
          </div>
          <div>
            <div class="stat">Time played</div>
            <span class="value">902h</span>
          </div>
          <div>
            <div class="stat">Highest <font-awesome-icon icon="star" /> FC</div>
            <span class="value">8.52</span>
          </div>
        </div>
      </div>
      <div id="biogram">
        <h2>Biogram</h2>
        <div class="content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          tempore voluptate beatae ex sed aliquam quia cum repellendus voluptas
          illum, atque ad obcaecati architecto. Incidunt, optio. Maiores labore
          numquam doloremque. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Ducimus odit ex unde maiores beatae eum sequi
          reiciendis nesciunt repellat. Dolor beatae autem veniam vero excepturi
          ex quae quis non et.
          <BaseShowMore text="load more" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//TODO: implement api
import BaseShowMore from "@/components/BaseShowMore.vue";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
export default {
  name: "Presentation",
  components: {
    BaseShowMore
  },
  //TODO: make that code prettier 😜️
  computed: {
    getHeart() {
      return faHeart;
    }
  }
};
</script>

<style lang="less">
#presentation {
  display: flex;
  flex-direction: column;
  align-items: center;
  & > * {
    margin-top: 0.75em;
  }
  #short-container {
    display: flex;
    align-self: center;
    flex-direction: row;
    & > .short {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 1em;
      & > div {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 0.5em;
        padding: 0.5em;
        color: #000;
        background: #fff;
        border-radius: 999px;
      }
    }
  }
  #explication {
    display: grid;
    grid-template-columns: [left] 3fr [right] 7fr;
    grid-gap: 2em;
    h2 {
      font-size: calc(var(--font-size-L) * 1.1);
      margin: 0;
      margin-left: 0.75em;
    }
    .content {
      display: flex;
      flex-direction: column;
      background: var(--inner-background-color);
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
      padding: 1rem;
      border-radius: 20px;
      .button--showmore {
        align-self: center;
        margin-top: 0.5rem;
        padding: 0.25em 0.5em;
        border-radius: 999px;
        color: rgba(255, 255, 255, 1);
        background-color: rgba(255, 255, 255, 0.15);
      }
    }
    #playstyle {
      grid-column: left;
      .content {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        .style {
          display: block;
          font-size: calc(var(--font-size-L) * 1.1);
          font-weight: 800;
        }
      }
    }
    #stats {
      grid-column: left;
      .content {
        display: flex;
        flex-direction: column;
        & > * {
          margin-bottom: 0.25em;
        }
        & > *:last-of-type {
          margin-bottom: 0;
        }
        .stat {
          font-size: calc(var(--font-size-M) * 0.9);
          color: rgba(255, 255, 255, 0.75);
        }
        .value {
          font-size: var(--font-size-M);
          margin-left: 0.5em;
        }
      }
    }
    #biogram {
      align-self: center;
      grid-row-start: 1;
      grid-row-end: 3;
      grid-column: right;
    }
  }
}
@media (max-width: 580px) {
  #presentation {
    #short-container {
      flex-direction: column;
      .short {
        margin-bottom: 0.5em;
      }
      .short:last-of-type {
        margin-bottom: 0;
      }
    }
    #explication {
      grid-template-columns: 0;
      grid-template-rows: [playstyle] max-content [stats] max-content [biogram] max-content;
      grid-gap: 1em 0;
      #playstyle {
        grid-row: playstyle;
      }
      #stats {
        grid-row: stats;
      }
      #biogram {
        grid-row: biogram;
      }
    }
  }
}
</style>
