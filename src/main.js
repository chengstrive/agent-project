// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//创建Vuex的store,使用分离store的方法，引入vuex
// import store from './store'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import Mock from './mock/index'
Mock.init()

import axios from 'axios'
Vue.prototype.$ajax = axios
Vue.config.productionTip = false
Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // store,  // 使用store
  components: { App },
  template: '<App/>'
})
