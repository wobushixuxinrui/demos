import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/core/lazy_use.js'
import '@/tools/index.js'

import './global.scss' // global style

import Prism from '@/tools/Prism'

Vue.component('Prism',Prism)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
