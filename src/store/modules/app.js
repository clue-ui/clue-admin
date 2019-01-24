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
    title: 'clue-admin',
    version: '0.1.0',

    // 是否显示默认侧边栏
    aside: true,

    // 默认侧边栏当前显示状态, 默认auto自适应
    asideVisible: 'auto',
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
