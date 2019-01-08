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
    uid: 88723,
    name: '利卡哇'
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
