<template>
  <li>
    <!-- menu item -->
    <div class="menu-item" :class="{ 'link-exact-active': linkActive }" :style="styleObject" @click="toggle">
      <i v-if="model.icon" :class="model.icon" class="px-2" aria-hidden="true"></i>
      <span class="inline-block">{{model.label}}</span>
    </div>

    <!-- children menu -->
    <ul v-if="isOpen && isChildren">
      <aside-menu v-for="(m, idx) in model.children"
        :model="m"
        :level="level+1"
        :key="idx"
      ></aside-menu>
    </ul>
  </li>
</template>

<script>
export default {
  name: 'aside-menu',
  props: {
    model: {
      default: []
    },
    level: {
      default: 0
    }
  },
  data () {
    return {
      isOpen: true
    }
  },
  computed: {
    linkActive: function () {
      let path = this.$route.fullPath
      if (path && path === this.model.path) {
        return true
      }

      return false
    },
    isChildren: function () {
      return this.model.children && this.model.children.length
    },
    styleObject: function () {
      return {
        paddingLeft: 0.5 + this.level * 1 + 'rem'
      }
    }
  },
  mounted () {
    // todo, 当前激活链接
  },
  methods: {
    toggle () {
      if (this.isChildren) {
        this.isOpen = !this.isOpen
      } else {
        this.onRouter()
      }
    },
    onRouter () {
      let path = this.model.path

      if (path && path.length) {
        this.$router.push({
          path: path
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.menu-item {
  @apply pr-2 py-2;
  @apply block;

  @apply #{$app-aside-color};
  @apply cursor-pointer;

  @apply select-none;
  @apply truncate;

  // 左侧边框透明占位
  @apply border-l-2;
  @apply border-transparent;

  &:hover {
    @apply #{$app-aside-hover-color};
    background-color: #{$app-aside-hover-bgcolor};

    // 左侧边框颜色
    @apply border-l-2;
    @apply #{$app-aside-bl-color};
  }

  &.link-exact-active {
    @apply #{$app-aside-hover-color};
    @apply border-l-2;
    @apply #{$app-aside-bl-color};
  }
}
</style>
