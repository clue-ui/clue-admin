import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// import clue-ui
import '@/clue-ui/style.scss'
import ClueUI from '@/clue-ui'
Vue.use(ClueUI)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
