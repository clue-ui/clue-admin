<template>
  <aside class="app-aside" :id="storeApp.asideId" v-if="storeApp.aside === true">
    <ul class="app-aside-menu">
      <aside-menu v-for="(m, idx) in storeApp.asideMenus"
        :model="m"
        :key="idx"
      ></aside-menu>
    </ul>
  </aside>
</template>

<script>
import AsideMenu from './aside-menu'

import mixin from '../mixin'
export default {
  name: 'app-aside',
  mixins: [mixin],
  components: {
    AsideMenu
  }
}
</script>

<style lang="scss" scoped>
.app-aside {
  // min-width: $app-aside-width;
  width: $app-aside-width;
  @apply #{$app-aside-bgcolor};
  @apply hidden;

  .app-aside-menu {
    @apply pt-2;
  }
}

@screen #{$app-aside-screen} {
  .app-aside {
    @apply block;
  }
}
</style>
