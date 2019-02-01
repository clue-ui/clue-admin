<template>
  <div class="site-option">

    <c-form>
      <c-form-item label="网站名称">
        <c-input></c-input>
      </c-form-item>

      <c-form-item label="网站描述" desc="输入一两句话简单描述论坛。这将会显示为 Meta 标签，并出现在搜索引擎结果中。">
        <c-input></c-input>
      </c-form-item>
    </c-form>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    // HelloWorld
  },
  data () {
    return {
      isFold: false
    }
  }
}
</script>
