import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入rem适配基准
import 'lib-flexible/flexible'
// vant 
import '@/plugins/vant.js'
// 阿里图标库
import '@/assets/iconfont/iconfont.css'
import axios from 'axios'
import { baseUrl } from '@/config'
console.log(baseUrl)

Vue.config.productionTip = false
// 原型
Vue.prototype.$axios=axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
