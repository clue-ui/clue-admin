import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import members from '@/views/members/router'
import pickup from '@/views/pickup/router'
import site from '@/views/site/router'
import book from '@/views/book/router'

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
        ...members.route,
        ...pickup.route,
        ...book.route,
        ...site.route,
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
