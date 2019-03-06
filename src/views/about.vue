<template>
  <div class="about">
    <h2>Welcome to Your About Page</h2>


    <div class="border border-red border-2" style="width: 600px; height: 400px;">
      <c-resize class="ab-resize">

        <!-- <div slot="footer" class="bg-blue">[x]</div> -->
      </c-resize>
    </div>


  </div>
</template>

<script>
export default {
  name: 'about',
  data () {
    return {}
  }
}
</script>

<style lang="scss">
.ab-resize {
  @apply border border-blue;
  width: 200px;
  height: 100px;
}
</style>