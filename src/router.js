import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '',
      component: () => import(/* webpackChunkName: "layout" */ './components/layouts/main.vue'),
      children: [
        {
          path: '/',
          name: 'home',
          component: () => import(/* webpackChunkName: "about" */ './views/home.vue')
        },
        {
          path: '/wysiwyg/quill',
          name: 'quill',
          component: () => import(/* webpackChunkName: "about" */ './views/wysiwyg/quill.vue')
        },
        {
          path: '/aa/bb/cc',
          component: () => import(/* webpackChunkName: "about" */ './views/wysiwyg/quill.vue')
        },
        {
          path: '/about',
          name: 'about',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "about" */ './views/about.vue')
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "about" */ './views/login')
    }
  ]
})
