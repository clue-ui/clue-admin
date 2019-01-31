/**
 * app 应用配置
 *
 * @author [author]
 * @since [version]
 * @copyright [description]
 */

import asideMenus from '../config/aside-menus.js'

const store = {
  namespaced: true,
  state: {
    // 基本信息
    title: 'clue-admin',
    version: '0.1.0',

    // 是否显示侧边栏
    aside: true,

    // 侧边栏DOM节点ID
    asideId: 'sidebar',

    // aside display 状态
    asideDisplay: null,

    // 侧边栏菜单配置
    asideMenus: asideMenus
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
