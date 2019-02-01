<template>
  <nav class="app-nav">

    <!-- app logo -->
    <div class="app-logo" :style="styleObject">
      <span class="self-center cursor-pointer" @click="$router.push('/')">Clue Admin</span>
    </div>

    <!-- nav menus- -->
    <div class="nav-menus">

      <!-- aside 折叠按钮 -->
      <div class="nav-item" @click="asideSwitch" v-if="storeApp.aside === true">
        <i class="fa fa-lg fa-bars cursor-pointer" aria-hidden="true"></i>
      </div>

      <!-- <router-link class="nav-item" to="/">Home</router-link> -->
      <router-link class="nav-item" to="/wysiwyg/quill">Quill</router-link>
      <router-link class="nav-item" to="/aa/bb/cc">ABC</router-link>
      <router-link class="nav-item" to="/about">About</router-link>

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
  computed: {
    styleObject: function () {
      let aside = this.storeApp.aside
      let display = this.storeApp.asideDisplay

      return {
        display: aside ? display : 'none'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.app-nav {
  @apply bg-blue-lighter;
  @apply flex z-10;

  .app-logo {
    width: $app-nav-logo-width;
    @apply text-center;
    @apply text-white bg-blue;
    @apply font-bold;
    @apply hidden;
    @apply py-4;
  }

  .nav-menus {
    @apply flex flex-1;
    @apply m-2;

    & a {
      @apply font-bold;
      @apply no-underline;
      color: #2c3e50;
    }

    & a.router-link-active {
      color: #42b983;
    }
  }

  .nav-item {
    @apply px-2 py-2;
  }
}

// 大屏幕自适应样式
@screen #{$app-aside-screen} {
  .app-nav {
    @apply flex-row;
    .app-logo {
      @apply block;
    }

    .nav-menus {
      @apply flex-row;
    }
  }
}
</style>