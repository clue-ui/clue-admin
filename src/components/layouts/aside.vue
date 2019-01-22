<template>
  <aside class="app-aside hidden sm:block">
    <p v-for="a in 1,13" :key=a>
      {{a}} - aside
    </p>
  </aside>
</template>

<script>
export default {
  name: 'app-aside'
}
</script>

<style lang="scss" scoped>
.app-aside {
  width: $app-aside-width;
  @apply bg-grey;
}
</style>