<template>
  <div class="modal" :class="{ visible: isVisible }">
    <font-awesome-icon
      id="modal-close"
      class="hover"
      icon="times"
      @click="closeModal"
    />
    <slot />
  </div>
</template>

<script>
import { EventBus } from "@/eventBus.js";
export default {
  name: "BaseModal",
  data: function() {
    return {
      isVisible: false
    };
  },
  props: {
    modalName: String
  },
  methods: {
    closeModal() {
      EventBus.$emit(`modal_${this.modalName}-close`);
    }
  },
  mounted() {
    EventBus.$on(`modal_${this.modalName}-open`, () => {
      this.isVisible = true;
    });
    EventBus.$on(`modal_${this.modalName}-close`, () => {
      this.isVisible = false;
    });
  }
};
</script>

<style lang="less">
.modal {
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  z-index: 175;
  backdrop-filter: blur(15px);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
  #modal-close {
    font-size: 1.25rem;
    height: 1em;
    width: 1em;
    border-radius: 999px;
    margin-bottom: 0.75rem;
    padding: 10px;
    color: rgba(0, 0, 0, 0.75);
    background-color: rgba(255, 255, 255, 0.8);
  }
  &.visible {
    opacity: 1;
    pointer-events: all;
    transition: opacity 0.3s ease;
  }
}
</style>
