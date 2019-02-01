/**
 * 侧边栏菜单配置, 如果是动态更新可通过
 * 更新storeApp.asideMenus的值
 */

let menus = [
  {
    label: '系统配置',
    icon: 'fa fa-cogs text-green-lighter',
    path: '/site/option'
  }, {
    label: '超长文字描述测试超长文字描述测试',
    icon: 'fa fa-car text-yellow',
    children: [
      {
        label: 'Wysiwyg Quill',
        icon: 'fa fa-circle-o',
        path: '/wysiwyg/quill'
      }, {
        label: '外链测试 - 未实现',
        icon: 'fa fa-circle-o',
        path: 'http://www.baidu.com'
      }
    ]
  }, {
    label: '会员管理',
    icon: 'fa fa-id-card-o',
    path: '/members'
  }, {
    label: '优惠劵管理',
    icon: 'fa fa-random',
    path: '/coupon'
  }, {
    label: '商品管理',
    icon: 'fa fa-random text-orange-light',
    path: '/coupon'
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
            children: [
              {
                label: 'ABC',
                icon: 'fa fa-circle-o',
                path: '/aa/bb/cc'
              }
            ]
          }
        ]
      }, {
        label: 'BBBBB',
        icon: 'fa fa-circle-o',
        path: ''
      }
    ]
  }, {
    label: '小工具',
    icon: 'fa fa-cubes text-teal-light',
    path: '/tools'
  }
]

export default menus