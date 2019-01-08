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
    adide: true,
    abc: 'aaaa'
  },
  mutations: {
    increment (state, val) {
      state.abc = val
    }
  },
  actions: {

  }
}

export default store
