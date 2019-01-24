/**
 * app 应用配置
 *
 * @author [author]
 * @since [version]
 * @copyright [description]
 */

const store = {
  namespaced: true,
  state: {
    // 基本信息
    title: 'clue-admin',
    version: '0.1.0',

    // 是否显示默认侧边栏
    aside: true,

    // 侧边栏DOM节点ID
    asideId: 1100,

    // aside display 状态
    asideDisplay: null
  },
  mutations: {

  },
  actions: {
    increment ({state}, val) {
      state.abc = val
    },
    setAside ({state}, val) {
      state.asideVisible = val
    }
  }
}

export default store
