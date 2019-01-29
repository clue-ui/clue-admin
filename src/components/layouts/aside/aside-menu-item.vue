<template>
  <div class="aside-menu-item">
    <i :class="icon" class="w-6 text-center border" aria-hidden="true"></i>

    <span class="inline-block">{{label}}</span>
  </div>
</template>

<script>
export default {
  name: 'menu-item',
  props: {
    label: {
      default: ''
    },
    icon: {
      default: null
    },
    to: {
      default: null
    }
  },
  data () {
    return {
      //
    }
  }
}
</script>
