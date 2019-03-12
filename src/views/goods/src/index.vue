<template>
  <div class="clue goods">
    <div>
      <div class="flex">
        <c-input placeholder="enter search"></c-input>
        <c-button class="ml-2">搜 索</c-button>
      </div>

      <div></div>
    </div>

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
