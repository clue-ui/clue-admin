<template>
  <div class="clue goods">
    <div>
      <div class="flex">
        <c-input></c-input>
        <!-- <c-button>Search</c-button> -->
      </div>
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
