<template>
  <div class="goods-list clue table">
    <div class="clue table-row" v-for="(v, id) in tableData" :key="id">
      <div class="clue table-col w-8 text-center">{{v.id}}</div>
      <div class="goods-info flex-1">
        <img class="goods-img" :src="v.image">
        <div class="">
          <h4 class="goods-title">{{v.title}}</h4>

          <div>{{v.time}}</div>
        </div>
      </div>
      <!-- <div class="clue table-col">{{v.title}}</div> -->
      <div class="clue table-col">库存: {{v.number}}</div>
      <div class="clue table-col">{{v.time}}</div>

      <div class="clue table-col">
        <!-- <c-button class="text-xs">操作</c-button> -->
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import 'moment/locale/zh-cn'
export default {
  name: 'goods-list',
  data () {
    return {
      tableData: []
    }
  },
  mounted () {
    let imgs = [
      '/images/shuiguo-201903111737002.jpg',
      '/images/baicai-201903111726001.jpeg'
    ]

    for (var i = 0; i < 5; i++) {
      this.tableData.push({
        id: i+1,
        title: '希腊大白菜, 又脆又甜',
        image: imgs[i],
        number: Math.random() * 1000000 & 0xFFFFFFFF,
        time: moment().format('YYYY/MM/DD H:mm')
      })
    }
  }
}
</script>
