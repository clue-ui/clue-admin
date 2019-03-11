import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// import clue-ui
import '@/clue-ui/style.scss'
import ClueUI from '@/clue-ui'
Vue.use(ClueUI)

// import app style
import '@/assets/style/index.scss'
import '@/views/site/style/index.scss'
import '@/views/pickup/style/index.scss'
import '@/views/goods/style/index.scss'

// import utils
import Utils from '@/utils'
Vue.use(Utils)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
