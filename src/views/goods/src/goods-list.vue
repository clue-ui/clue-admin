<template>
  <div class="goods-list clue table">
    <div class="clue table-row" v-for="(v, id) in tableData" :key="id">
      <div class="clue table-col">{{v.id}}</div>
      <div class="clue table-col">{{v.title}}</div>
      <div class="clue table-col">{{v.number}}</div>
      <div class="clue table-col">{{v.time}}</div>

      <div class="clue table-col">
        <c-button class="text-xs">操作</c-button>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  name: 'goods-list',
  data () {
    return {
      tableData: []
    }
  },
  mounted () {
    for (var i = 0; i < 5; i++) {
      this.tableData.push({
        id: i+1,
        title: 'lskdlksd',
        number: Math.random() * 1000000 & 0xFFFFFFFF,
        time: moment().format('l')
      })
    }
  }
}
</script>
