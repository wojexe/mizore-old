<template>
  <svg
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 150 150"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="75" cy="75" r="67.5" stroke="white" stroke-width="5" />
    <circle cx="75" cy="75" r="55" fill="white" />
    <path
      d="M75 104C86.0457 104 95 95.0457 95 84H88C88 84 88 97 75 97C62 97 62 84 62 84H55C55 95.0457 63.9543 104 75 104Z"
      fill="black"
    />
    <rect x="55" y="50" width="7" height="38" rx="3.5" fill="black" />
    <rect x="88" y="50" width="7" height="38" rx="3.5" fill="black" />
  </svg>
</template>

<script>
export default {
  name: "NavBarLogo"
};
</script>

<style scoped lang="less">
svg {
  width: calc(12vh - 30px);
  min-width: 50px;
  max-width: 80px;
  height: calc(12vh - 30px);
  min-height: 50px;
  max-height: 80px;
  filter: drop-shadow(0px 0px 25px rgba(0, 0, 0, 0.25));
}
</style>
