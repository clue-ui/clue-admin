<template>
  <div class="app-float-bar">
    <div>
      <c-button @click="aside = !aside">
        {{ aside ? '展示' : '收起' }}
      </c-button>
    </div>
  </div>
</template>

<script>
import { storeApp } from '@/mixins/store'
export default {
  name: 'app-float-bar',
  mixins: [storeApp],
  data () {
    return {
      aside: null
    }
  },
  mounted () {
    if (this.aside === null) {
      this.aside = this.storeApp.asideVisible
    }
  },
  watch: {
    aside: function (val) {
      this.$store.dispatch('app/setAside', val)
    }
  }
}
</script>

<style lang="scss" scoped>
.app-float-bar {
  top: 30%;
  @apply border bg-green;
  @apply p-2;
  @apply absolute pin-r;
}
</style>