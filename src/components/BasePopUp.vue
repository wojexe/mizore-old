<template>
  <div class="popup" v-click-outside="clickOutside">
    <slot />
  </div>
</template>

<script>
import { EventBus } from "@/eventBus";
export default {
  name: "BasePopUp",
  props: {
    popupName: String
  },
  data() {
    return {
      isVisible: false
    };
  },
  directives: {
    "click-outside": {
      bind(el, binding, vnode) {
        vnode.context.event = e => {
          // if (popup does not contain clickPos AND avatar (origin) does not contain clickPos)
          if (
            vnode.context.isVisible &&
            !el.contains(e.target) &&
            !vnode.elm.parentNode.contains(e.target)
          ) {
            vnode.context[binding.expression]();
          }
        };
        document.body.addEventListener("click", vnode.context.event);
      },
      unbind(vnode) {
        document.body.removeEventListener("click", vnode.context.event);
      }
    }
  },
  methods: {
    clickOutside() {
      if (this.isVisible) {
        EventBus.$emit(`popup_${this.popupName}-close`);
        this.isVisible = false;
      }
    }
  },
  mounted() {
    EventBus.$on(`popup_${this.popupName}-open`, () => {
      this.isVisible = true;
    });
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
  //top: 3em;
  transform: translateY(105%);
  padding: 0.75rem 1.5rem;
  background-color: var(--card-color);
  border-radius: 35px;
  box-shadow: 0 0 35px rgba(0, 0, 0, 0.5);
  z-index: 150;
  opacity: 0;
  pointer-events: none;
  transition: all 0.3s ease;
  &.visible {
    opacity: 1;
    pointer-events: all;
    transition: opacity 0.3s ease;
  }
}
@media (min-height: 750px) {
  .popup {
    //top: 4.2em;
    transition: all 0.3s ease;
  }
}
</style>
