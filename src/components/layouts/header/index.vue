<template>
  <nav class="app-nav sticky pin-t">
    <div class="nav-menus">

      <!-- aside 折叠按钮 -->
      <div class="nav-item" @click="asideSwitch">
        <i class="fa fa-lg fa-bars" aria-hidden="true"></i>
      </div>

      <!-- app-logo (小屏幕显示) -->
      <!-- <div class="app-logo">
        <div class="w-4 text-center">
          <i class="fa fa-lg fa-bars" aria-hidden="true"></i>
        </div>

        <div class="flex-1 text-center">Clue Admin</div>
        <div class="w-4 text-center">
          <i class="fa fa-lg fa-bars" aria-hidden="true"></i>
        </div>
      </div> -->

      <!-- menu left (大屏幕显示) -->
      <router-link class="nav-item" to="/">Home</router-link>
      <router-link class="nav-item" to="/about">About</router-link>

      <!-- menu right (大屏幕显示) -->
      <div class="nav-item flex-1"></div>
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
    // todo
  }
}
</script>

<style lang="scss" scoped>
.app-nav {
  @apply bg-blue-lighter;
  @apply flex;

  .app-logo {
    @apply text-blue;
    @apply font-bold;
    @apply px-2 py-2;
    @apply block;
    @apply flex;
  }

  .nav-menus {
    @apply flex flex-1;
    // @apply flex-col;
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
    // @apply hidden;
  }
}

// 大屏幕自适应样式
@screen #{$app-aside-screen} {
  .app-nav {
    // .app-logo {
    //   @apply hidden;
    // }

    .nav-menus {
      @apply flex-row;
    }

    // .nav-item {
    //   @apply block;
    // }
  }
}
</style>