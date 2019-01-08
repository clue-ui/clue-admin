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
    asideVisible: true,
    abc: 'aaaa'
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
