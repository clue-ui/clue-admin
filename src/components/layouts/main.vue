<template>
  <div class="flex min-h-screen">
    <app-aside/>

    <div class="flex flex-col flex-1">
      <app-nav/>

      <!-- container -->
      <div class="container-full">
        <div class="flex-1 p-2 bg-white">
          <router-view/>
        </div>
      </div>
      <!-- footer -->
      <div class="bg-teal p-4">footer</div>
    </div>
  </div>
</template>

<script>
import appNav from './header'
import appAside from './aside'

export default {
  components: {
    appNav,
    appAside
  },
  mounted () {
    // todo
  }
}
</script>

<style lang="scss" scoped>
.container-full {
  @apply flex-1 flex flex-col;
  @apply p-2;
  @apply bg-grey-lighter;
}

// @screen #{$app-aside-screen} {
//   .container-full {
//     transform: translate(0, 0);
//   }
// }
</style>
