// app utils
// author fxue

const install = function (Vue) {
  // $utils 工具集
  Vue.prototype.$utils = {
    /**
     * 获取dom计算后的样式
     * todo
     *   浏览器兼容性处理
     *   目前没有仔细测试, chrome/ff/safari 支持, 没具体测试各版本
     * @param  {[type]} node      [description]
     * @param  {[type]} pseudoElt [description]
     * @return {[type]}           [description]
     */
    getComputedStyle: function (node, pseudoElt = null) {
      return getComputedStyle(node)
    }
  }
}

// export utils
export default {
  install
}