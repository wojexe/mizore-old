<template>
  <div class="popup" v-click-outside="hide">
    <slot />
  </div>
</template>

<script>
export default {
  name: "BasePopUp",
  methods: {
    hide() {
      this.$parent.$emit("hide");
    }
  },
  directives: {
    "click-outside": {
      bind(el, binding, vnode) {
        vnode.context.event = function(event) {
          if (
            !(
              el == event.target ||
              el.contains(event.target) ||
              vnode.context.$parent.$parent.$el == event.target || // the avatar
              vnode.context.$parent.$parent.$el.contains(event.target)
            ) // the avatar contents
          ) {
            vnode.context[binding.expression]();
          }
        };
        document.body.addEventListener("mouseup", vnode.context.event);
      },
      unbind(vnode) {
        document.body.removeEventListener("mouseup", vnode.context.event);
      }
    }
  }
};
</script>

<style scoped lang="less">
.popup {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 90px;
  padding: 0.75rem 1.5rem;
  background-color: var(--card-color);
  border-radius: 35px;
  box-shadow: 0 0 35px rgba(0, 0, 0, 0.5);
  z-index: 150;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
  &.visible {
    opacity: 1;
    pointer-events: all;
    transition: opacity 0.3s ease;
  }
}
</style>
