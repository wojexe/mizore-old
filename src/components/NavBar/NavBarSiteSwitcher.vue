<template>
  <ul
    id="siteSwitcher"
    :class="{ active: switcherShown }"
    v-click-outside="hideSwitcher"
  >
    <li
      v-for="site in sites"
      :key="site.name"
      :class="{ active: getActiveRoute(site.name) }"
    >
      <router-link
        :to="{ name: site.name, params: { userID: 1 } }"
        @click.native="swap"
      >
        {{ site.name }}
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: "NavBarSiteSwitcher",
  data() {
    return {
      sites: [
        { name: "homepage" },
        { name: "profile" },
        { name: "rankings" },
        { name: "support" }
      ],
      switcherShown: false
    };
  },
  methods: {
    getActiveRoute(key) {
      if (this.$route.name == key) return true;
      else return false;
    },
    swap() {
      this.switcherShown = !this.switcherShown;
    },
    hideSwitcher() {
      this.switcherShown = false;
    }
  },
  directives: {
    "click-outside": {
      bind(el, binding, vnode) {
        vnode.context.event = function(event) {
          if (!(el == event.target || el.contains(event.target))) {
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

<style lang="less">
#siteSwitcher {
  position: absolute;
  left: 50%;
  transform: translateX(calc(-50% - 0.05rem));
  margin: 0;
  padding: 1.2em 2.25em;
  list-style-type: none;
  border-radius: 35px;
  box-shadow: none;
  background-color: none;
  transition: all ease 0.3s;
  z-index: 150;
  &.active {
    transform: translate(calc(-50% - 0.25em), calc(1.22rem * 3));
    background-color: rgb(var(--card-color));
    box-shadow: 0 0 25px rgba(0, 0, 0, 0.5);
    transition: all ease 0.3s;
    li {
      display: list-item;
      &.active {
        padding-bottom: 0.5em;
      }
    }
  }
  li {
    display: none;
    position: relative;
    text-align: center;
    padding: 0.25em; // 0.75em = one item
    padding-bottom: 0.5em;
    transform: translateY(-0.25rem); // cancel out padding
    &:last-of-type {
      padding-bottom: 0.25em;
    }
    &.active {
      display: list-item;
      padding-bottom: unset;
      &::after,
      &::before {
        display: block;
        content: "";
        height: 1.2em;
        width: 0.2em;
        position: absolute;
        top: 0;
        background-color: #fff;
        border-radius: 99px;
        transform: translateY(0.25em); // cancel out padding
        opacity: 1;
        pointer-events: all;
      }
      &::after {
        right: -1em;
      }
      &::before {
        left: -1em;
      }
    }
    a {
      display: inline-block;
      transition: all ease 0.3s;
      &:hover {
        text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        transform: scale(1.1);
      }
    }
  }
}
</style>
