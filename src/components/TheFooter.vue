<template>
  <div id="footer">
    <span
      >created with <span id="footer--heart">❤</span> by uncho! dev team</span
    >
    <div id="footer--icon-container">
      <a href="https://github.com/wojexe/mizore" target="_blank"
        ><font-awesome-icon class="hover" :icon="['fab', 'github']"
      /></a>
      <a href="https://discord.gg/rJGPnXB" target="_blank"
        ><font-awesome-icon class="hover" :icon="['fab', 'discord']"
      /></a>
      <a href="https://paypal.me/wojexe" target="_blank"
        ><font-awesome-icon class="hover" icon="dollar-sign"
      /></a>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheFooter"
};
</script>

<style lang="less">
#footer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgb(var(--card-color));
  font-size: var(--font-size-S);
  font-weight: 700;
  font-style: italic;
  margin: 100px 0;
  padding: 1.2em 2em;
  border-radius: 500px;
  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.5);
  #footer--heart {
    font-style: normal;
  }
  #footer--icon-container {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 45%;
    font-size: 1.25em;
    color: rgba(255, 255, 255, 0.75);
    margin-top: 0.5em;
    & > * {
      cursor: pointer;
    }
  }
}
@media (min-width: 800px) {
  #footer {
    font-size: var(--font-size-L);
  }
}
</style>
