<template>
  <aside class="app-aside">

    <div class="app-logo">
      <div class="text-center flex-1 self-center">logo</div>
    </div>

    <p v-for="a in 1,13" :key=a>
      {{a}} - aside
    </p>
  </aside>
</template>

<script>
import mixin from '../mixin'
export default {
  name: 'app-aside',
  mixins: [mixin],
  data () {
    return {}
  },
  computed: {
    styleObject: function () {
      return {
        display: this.storeApp.asideVisible ? 'block' : 'none'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.app-aside {
  width: $app-aside-width;
  @apply bg-grey;
  @apply hidden;
}

.app-logo {
  width: $app-nav-logo;
  @apply bg-blue-light;
  @apply font-bold;
  @apply py-4;
}

@screen #{$app-aside-screen} {
  .app-aside {
    @apply block;
  }
}
</style>