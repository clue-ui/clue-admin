<template>
  <aside class="app-aside" :id="storeApp.asideId" v-if="storeApp.aside === true">
    <ul class="app-aside-menu">
      <aside-menu v-for="(m, idx) in menus"
        :model="m"
        :key="idx"
      ></aside-menu>
    </ul>
  </aside>
</template>

<script>
import AsideMenu from './aside-menu'

import mixin from '../mixin'
export default {
  name: 'app-aside',
  mixins: [mixin],
  components: {
    AsideMenu
  },
  data () {
    return {
      menus: []
    }
  },
  mounted () {
    this.menus = [
      {
        label: '仪表盘',
        icon: 'fa fa-dashboard text-green-light',
        path: 'bb'
      }, {
        label: '超长文字描述测试超长文字描述测试',
        icon: 'fa fa-car text-yellow',
        children: [
          {
            label: 'Wysiwyg Quill',
            icon: 'fa fa-circle-o',
            path: '/wysiwyg/quill'
          }, {
            label: 'Page About',
            icon: 'fa fa-circle-o',
            path: '/about'
          }, {
            label: 'Page About2',
            icon: 'fa fa-circle-o',
            path: '/about?a=2'
          }, {
            label: '外链测试 - 未实现',
            icon: 'fa fa-circle-o',
            path: 'http://www.baidu.com'
          }
        ]
      }, {
        label: '组建列表',
        icon: 'fa fa-snowflake-o text-teal-light',
        children: [
          {
            label: 'button 按钮',
            icon: 'fa fa-circle-o',
            path: '/about?a=1'
          }, {
            label: 'icon 图标',
            icon: 'fa fa-circle-o',
            path: '/about?a=22'
          }, {
            label: 'table',
            icon: 'fa fa-circle-o',
            path: '/about?a=3'
          }, {
            label: 'tabs',
            icon: 'fa fa-circle-o',
            path: ''
          }
        ]
      }, {
        label: '表单组件',
        icon: 'fa fa-laptop text-pink-light',
        children: [
          {
            label: 'input 输入框',
            icon: 'fa fa-circle-o',
            path: ''
          }, {
            label: 'form',
            icon: 'fa fa-circle-o',
            path: ''
          }, {
            label: 'checkbox',
            icon: 'fa fa-circle-o',
            path: ''
          }, {
            label: 'radio',
            icon: 'fa fa-circle-o',
            path: ''
          }, {
            label: 'select',
            icon: 'fa fa-circle-o',
            path: ''
          }
        ]
      }, {
        label: '多级菜单',
        icon: 'fa fa-share text-blue-light',
        children: [
          {
            label: 'AAAA',
            icon: 'fa fa-circle-o',
            children: [
              {
                label: 'AAAA-1',
                icon: 'fa fa-circle-o',
                path: ''
              }
            ]
          }, {
            label: 'BBBBB',
            icon: 'fa fa-circle-o',
            path: ''
          }
        ]
      }
    ]
  },
  methods: {
    // RouterTo (node) {
    //   //
    // }
  }
}
</script>

<style lang="scss" scoped>
.app-aside {
  // min-width: $app-aside-width;
  width: $app-aside-width;
  @apply #{$app-aside-bgcolor};
  @apply hidden;

  .aside-menu-item {
    @apply cursor-pointer;
  }
}

@screen #{$app-aside-screen} {
  .app-aside {
    @apply block;
  }
}
</style>
