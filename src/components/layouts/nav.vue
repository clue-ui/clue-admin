<template>
  <div id="nav">
    <ul class="flex">
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Projects</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </div>
<!--   <nav class="app-nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>

    <div class="inline-block w-2/3"></div>
    <c-input v-model="model" style="width:10rem;" class="mr-2"></c-input>
    <router-link to="/login">Login</router-link>
  </nav> -->
</template>

<script>
export default {
  name: 'app-nav',
  data () {
    return {
      model: ''
    }
  },
  mounted () {
    // const nav = document.getElementById('nav')
    var navigation = responsiveNav('#nav', { // Selector: The ID of the wrapper
      animate: true, // Boolean: 是否启动CSS过渡效果（transitions）， true 或 false
      transition: 400, // Integer: 过渡效果的执行速度，以毫秒（millisecond）为单位
      label: "Menu", // String: Label for the navigation toggle
      insert: "after", // String: Insert the toggle before or after the navigation
      customToggle: "", // Selector: Specify the ID of a custom toggle
      openPos: "relative", // String: Position of the opened nav, relative or static
      jsClass: "js", // String: 'JS enabled' class which is added to <html> el
      debug: false, // Boolean: Log debug messages to console, true 或 false
      init: function(){}, // Function: Init callback
      open: function(){}, // Function: Open callback
      close: function(){} // Function: Close callback
    });
  },
  watch: {
    model: function (val) {
      this.$store.dispatch('app/increment', val)
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