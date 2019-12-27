<template>
  <BaseCard>
    <div id="card-contents">
      <img id="profile-avatar" src="/assets/wojexe.png" />
      <div id="username">wojexe</div>
      <div id="profile-rankings">
        <div id="ranking-country">
          <div class="country">POLAND</div>
          <img class="icon" id="flag" src="/assets/wojexe.png" />
          <div class="rank">#10000</div>
        </div>
        <div id="ranking-global">
          <div class="global">GLOBAL</div>
          <img class="icon" id="globe" src="/assets/wojexe.png" />
          <div class="rank">#10000</div>
        </div>
      </div>
      <div id="profile-pp">6432pp</div>
    </div>
    <img id="card-background" src="https://picsum.photos/1600/901" />
  </BaseCard>
</template>

<script>
import BaseCard from "@/components/BaseCard.vue";
export default {
  name: "Profile",
  components: {
    BaseCard
  }
};
</script>

<style lang="less" scoped>
.base-card {
  position: relative;
  width: 60%;
  align-self: center;
  justify-self: center;
  align-items: center;
  justify-content: center;
  #card-background {
    display: block;
    position: absolute;
    width: 110%;
    min-height: 110%;
    filter: blur(10px) opacity(70%);
    z-index: 1;
  }
  #card-contents {
    display: grid;
    grid-template-rows: [avatar] 2.8fr [rankings] 2fr [performance] 1fr;
    grid-template-columns: [left] 1fr [center] 1fr 1fr [right];
    grid-gap: 0.5em;
    height: 100%;
    width: 100%;
    justify-items: center;
    align-items: center;
    z-index: 5;
    #profile-avatar {
      width: 100%;
      max-width: 85%;
      display: block;
      grid-row: avatar;
      grid-column: center;
      align-self: center;
      border-radius: 100px;
      box-shadow: 0 0 25px rgba(0, 0, 0, 0.25);
    }
    #username {
      grid-row: avatar;
      grid-column: center;
      align-self: flex-end;
      padding: 0.15em 0.4em;
      font-size: var(--font-size-L);
      border-radius: 999px;
      backdrop-filter: blur(10px);
      background-color: rgba(37, 37, 37, 0.7);
    }
    #profile-rankings {
      position: relative;
      width: 100%;
      height: 100%;
      grid-row: rankings;
      grid-column-start: left;
      grid-column-end: right;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: calc(var(--font-size-L) * 0.8);
      text-transform: uppercase;
      &::before {
        position: absolute;
        left: 50%;
        display: block;
        content: "";
        width: 2.5px;
        height: 80%;
        transform: translateX(-1.25px);
        background-color: rgba(0, 0, 0, 0.5);
        box-shadow: 0 1px 10px rgba(0, 0, 0, 0.5);
        border-radius: 10px;
      }
      #ranking-country,
      #ranking-global {
        display: grid;
        column-gap: 0.25em;
        width: 47%;
        height: 100%;
        align-items: center;
        & > * {
          display: block;
        }
        .icon {
          width: 100%;
          box-shadow: 0 0 10px rgba(37, 37, 37, 0.7);
          border-radius: 50px;
        }
      }
      #ranking-country {
        grid-template-rows: [top] 1fr [bottom] 1fr;
        grid-template-columns: auto 1.5em;
        justify-items: flex-end;
        .country,
        .icon {
          grid-row: top;
        }
        .country {
          grid-column: 1;
        }
        .icon {
          grid-column: 2;
        }
        .rank {
          grid-row: bottom;
          grid-column: 2;
        }
      }
      #ranking-global {
        grid-template-rows: [top] 1fr [bottom] 1fr;
        grid-template-columns: 1.5em auto;
        justify-items: flex-start;
        .global,
        .icon {
          grid-row: top;
        }
        .global {
          grid-column: 2;
        }
        .icon {
          grid-column: 1;
        }
        .rank {
          grid-row: bottom;
          grid-column: 1;
        }
      }
    }
    #profile-pp {
      grid-row: performance;
      grid-column-start: left;
      grid-column-end: right;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0.2em 0.7em;
      font-size: var(--font-size-L);
      font-weight: 700;
      color: #000;
      border-radius: 999px;
      backdrop-filter: blur(10px);
      background-color: rgba(255, 255, 255, 0.7);
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
      text-transform: uppercase;
    }
  }
}
@media (min-width: 800px) {
  .base-card {
    #card-contents {
      #username,
      #profile-pp {
        font-size: calc(var(--font-size-L) * 1.25);
      }
      #profile-rankings {
        font-size: calc(var(--font-size-XXL) * 0.85);
      }
    }
  }
}
@media (max-width: 400px) {
  .base-card {
    width: 75%;
  }
}
</style>
