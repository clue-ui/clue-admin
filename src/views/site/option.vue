<template>
  <div class="site-option">

    <c-form>
      <c-form-item>
        <div slot="label">
          <h3>网站名称</h3>
        </div>

        <c-input></c-input>
      </c-form-item>
      <c-form-item>
        <div slot="label">
          <h3>网站描述</h3>
          <p>输入一两句话简单描述论坛。这将会显示为 Meta 标签，并出现在搜索引擎结果中。</p>
        </div>

        <c-input></c-input>
      </c-form-item>

      <c-form-item>
        <div slot="label">
          <h3>默认语言</h3>
        </div>

        <c-input></c-input>
      </c-form-item>

      <!-- footer -->
      <c-form-item slot="footer">
        <c-button type="primary" class="font-bold">保存</c-button>
      </c-form-item>
    </c-form>
  </div>
</template>

<script>
export default {
  name: 'site-option',
  data () {
    return {
      form: {
        siteTitle: '',
        siteDesc: ''
      }
    }
  }
}
</script>
