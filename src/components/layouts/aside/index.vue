<template>
  <aside class="app-aside" :id="storeApp.asideId" v-if="storeApp.aside === true">

    <aside-menu></aside-menu>

    <!-- <ul class="list-reset">
      <li v-for="(m1, idx1) in menus" :key="idx1">
        <app-menu-item :label="m1.label" :icon="m1.icon" :to="m1.path"></app-menu-item>

        <ul>
          <li><div>aaa-11</div></li>
          <li><div>aaa-22</div></li>
          <li><div>aaa-33</div></li>
        </ul>
      </li>
    </ul> -->
  </aside>
</template>

<script>
// import appMenuItem from './menu-item'
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
        icon: 'fa fa-ravelry',
        path: ''
      }, {
        label: '组建列表',
        icon: 'fa fa-ravelry',
        children: [
          {
            label: 'button 按钮',
            icon: '',
            path: ''
          }, {
            label: 'icon 图标',
            icon: '',
            path: ''
          }, {
            label: 'table',
            icon: '',
            path: ''
          }, {
            label: 'tabs',
            icon: '',
            path: ''
          }
        ]
      }, {
        label: '表单组建',
        icon: '',
        children: [
          {
            label: 'input 输入框',
            icon: '',
            path: ''
          }, {
            label: 'form',
            icon: '',
            path: ''
          }, {
            label: 'checkbox',
            icon: '',
            path: ''
          }, {
            label: 'radio',
            icon: '',
            path: ''
          }, {
            label: 'select',
            icon: '',
            path: ''
          }
        ]
      }, {
        label: '测试',
        icon: 'fa fa-ravelry',
        children: [
          {
            label: 'AAAA',
            icon: '',
            children: [
              {
                label: 'AAAA-1',
                icon: '',
                path: ''
              }
            ]
          }, {
            label: 'BBBBB',
            icon: '',
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
  min-width: $app-aside-width;
  @apply bg-grey;
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
