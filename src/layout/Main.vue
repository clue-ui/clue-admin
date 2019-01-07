<template>
  <div class="flex flex-col min-h-screen">
    <app-nav></app-nav>

    <div class="flex flex-1 items-stretch">
      <app-aside>aside</app-aside>

      <!-- container -->
      <div class="flex-1 flex flex-col bg-grey-lighter p-2">
        <div class="flex-1 p-2 bg-white">
          <router-view/>
        </div>

        <!-- footer -->
        <div class="bg-teal p-4">footer</div>
      </div>
    </div>
  </div>
</template>

<script>
import appNav from './nav'
import appAside from './aside'

export default {
  components: {
    appNav,
    appAside
  }
}
</script>

<style lang="scss" scoped>

</style>
