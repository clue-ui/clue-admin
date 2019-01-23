<template>
  <nav class="app-nav sticky pin-t">
    <div class="nav-menus">
      <!-- asideSwitch -->
      <i class="nav-item aside fa fa-bars"
        aria-hidden="true"
        :class="{
          'text-grey': storeApp.asideVisible === true,
          'text-black': storeApp.asideVisible === false,
        }"
        @click="asideSwitch"
      ></i>

      <router-link class="nav-item" to="/">Home</router-link>
      <router-link class="nav-item" to="/about">About</router-link>

      <div class="flex-1"></div>
      <router-link class="nav-item" to="/login">Amce</router-link>
    </div>
  </nav>
</template>

<script>
import mixin from '../mixin'
export default {
  name: 'app-nav',
  mixins: [mixin],
  data () {
    return {
      // model: ''
    }
  },
  mounted () {
    //
  },
  methods: {
    asideSwitch () {
      let asideVisible = this.storeApp.asideVisible
      this.$store.dispatch('app/setAside', !asideVisible)
    }
  }
}
</script>

<style lang="scss" scoped>
.app-nav {
  @apply bg-blue-lighter;
  @apply flex;

  .nav-menus {
    @apply flex flex-1;
    @apply m-2;
    @apply self-center;

    & a {
      @apply font-bold;
      @apply no-underline;
      color: #2c3e50;
    }

    & a.router-link-exact-active {
      color: #42b983;
    }
  }

  .nav-item {
    @apply px-2 py-2;
    // @apply mx-1;
    // @apply border border-yellow;

    &.aside {
      // @apply hidden;
      @apply cursor-pointer;
      @apply text-grey;
    }
  }
}

// 菜单的自适应样式
@screen #{$app-aside-screen} {
  .app-nav {
    .nav-item {
      &.aside {
        @apply text-black;
      }
    }
  }
}
</style>