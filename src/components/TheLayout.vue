<template>
  <div id="layout">
    <slot />
  </div>
</template>

<style scoped lang="less">
#layout {
  display: grid;
  width: 100%;
  grid-template-columns: 1fr [content] 80% 1fr;
  grid-template-rows: auto;
  grid-row-gap: 50px;
  & > * {
    grid-column: content;
  }
}

@media (min-width: 1000px) {
  #layout {
    grid-template-columns: 1fr [content] 800px 1fr; // Make it that max width of the content column doesnt exceed 800px
  }
}
</style>
