<template>
  <aside class="app-aside" :id="storeApp.asideId" v-if="storeApp.aside === true">
    <div class="">
      <p v-for="a in 1,13" :key=a>
        {{a}} - aside
      </p>
    </div>
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
  mounted () {
    // todo
  },
  methods: {
    // todo
  }
}
</script>

<style lang="scss" scoped>
.app-aside {
  min-width: $app-aside-width;
  @apply bg-grey;
  @apply hidden;
}

@screen #{$app-aside-screen} {
  .app-aside {
    @apply block;
  }
}
</style>
