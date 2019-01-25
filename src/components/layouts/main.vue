<template>
  <div class="flex flex-col min-h-screen">
    <app-nav class="sticky pin-t"/>

    <div class="flex flex-1" :class="{ 'aside-open': storeApp.asideDisplay === 'block' }">
      <app-aside/>

      <!-- container -->
      <div class="container-full">
        <div class="flex-1 m-2 p-2 bg-white">
          <router-view/>
        </div>

        <!-- footer -->
        <div class="bg-teal p-4">footer</div>
      </div>
    </div>
  </div>
</template>

<script>
import appNav from './header'
import appAside from './aside'

import mixin from './mixin'
export default {
  name: '',
  mixins: [mixin],
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
  @apply bg-grey-lighter;
}
</style>
