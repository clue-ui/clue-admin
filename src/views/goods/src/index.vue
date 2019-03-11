<template>
  <div class="clue goods">
    <h2>Welcome to Your About Page</h2>
    <div>筛选区域</div>

    <goods-list class="mt-2"></goods-list>
  </div>
</template>

<script>
import GoodsList from './goods-list'
export default {
  name: 'clue-goods',
  components: {
    GoodsList
  },
  data () {
    return {}
  }
}
</script>
