<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <h2>Welcome to Your Vue.js App</h2>

    <div class="border border-red mt-2">
      <div class="flex flex-wrap bg-grey-lighter">
        <div class="w-1/3 p-2" v-for="a in 1,11" :key="a">
          <div class="text-grey-darker text-center bg-grey-light p-2">1</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    // HelloWorld
  },
  data () {
    return {
      isFold: false
    }
  }
}
</script>

<style scoped>
.xx {
  transition: max-height 400ms ease 0s;
}
</style>
