<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <h2>Welcome to Your Vue.js App</h2>

    <c-button type="primary" @click="isFold = !isFold">{{isFold ? '展开' : '折叠'}}</c-button>
    <div class="border" :style="{
      transition: 'max-height 400ms ease 0s',
      position: 'relative',
      height: isFold ? '' : '100px'
    }">
      <ul v-if="!isFold">
        <li v-for="a in 1,4" :key="a">{{a}}</li>
      </ul>

      <div v-if="isFold">Menu</div>
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
