import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import members from '@/views/members/router'

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '',
      component: () => import(/* webpackChunkName: "chunk.main" */ './components/layouts/main.vue'),
      children: [
        {
          path: '/',
          name: 'home',
          component: () => import(/* webpackChunkName: "chunk.about" */ './views/home.vue')
        },
        ...members,
        {
          path: '/site/option',
          name: 'site-option',
          component: () => import(/* webpackChunkName: "chunk.site" */ './views/site/option.vue')
        },
        {
          path: '/wysiwyg/quill',
          name: 'quill',
          component: () => import(/* webpackChunkName: "chunk.wysiwyg" */ './views/wysiwyg/quill.vue')
        },
        {
          path: '/aa/bb/cc',
          component: () => import(/* webpackChunkName: "chunk.abc" */ './views/wysiwyg/quill.vue')
        },
        {
          path: '/about',
          name: 'about',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "chunk.about" */ './views/about.vue')
        },
        {
          path: '*',
          name: 'not-found',
          component: () => import(/* webpackChunkName: "chunk.about" */ './views/not-found.vue')
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "login" */ './views/login')
    }
  ]
})
