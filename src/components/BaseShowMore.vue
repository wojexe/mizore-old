<template>
  <a class="button--showmore hover">{{ text }}</a>
</template>

<script>
export default {
  name: "BaseShowMore",
  props: {
    text: {
      type: String,
      default: "show more"
    }
  }
};
</script>

<style>
.button--showmore {
  color: rgba(255, 255, 255, 0.2);
  font-weight: 500;
  cursor: pointer;
}
</style>
