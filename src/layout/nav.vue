<template>
  <nav class="app-nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>

    <div class="inline-block w-2/3"></div>
    <c-input v-model="model" style="width:10rem;" class="mr-2"></c-input>
    <router-link to="/login">Login</router-link>
  </nav>
</template>

<script>
export default {
  name: 'app-nav',
  data () {
    return {
      model: ''
    }
  },
  watch: {
    model: function (val) {
      this.$store.commit('app/increment', val)
    }
  }
}
</script>

<style lang="scss" scoped>
.app-nav {
  @apply bg-blue-lighter;
  @apply p-2;

  & a {
    font-weight: bold;
    color: #2c3e50;
  }

  & a.router-link-exact-active {
    color: #42b983;
  }
}
</style>