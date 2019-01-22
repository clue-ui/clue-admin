<template>
  <div class="flex flex-col min-h-screen">
    <app-nav></app-nav>

    <div class="flex flex-1 items-stretch">
      <app-aside v-if="storeApp.asideVisible === true">aside</app-aside>

      <!-- container -->
      <div class="flex-1 flex flex-col bg-grey-lighter p-2">
        <div class="flex-1 p-2 bg-white">
          <router-view/>
        </div>

        <!-- footer -->
        <div class="bg-teal p-4">footer</div>
      </div>
    </div>

    <!-- float tools -->
    <app-float-bar></app-float-bar>
  </div>
</template>

<script>
import appNav from './nav'
import appAside from './aside'
import appFloatBar from './float-bar'

import { storeApp } from '@/mixins/store'
export default {
  mixins: [storeApp],
  components: {
    appNav,
    appAside,
    appFloatBar
  },
  mounted () {
    // console.log('[storeApp] ', this.storeApp)
  }
}
</script>

<style lang="scss" scoped>

</style>
