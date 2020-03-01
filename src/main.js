import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 引入element-ui模块
import ElementUI from 'element-ui'
// 引入css样式
import 'element-ui/lib/theme-chalk/index.css'
import '@/styles/index.less'
Vue.config.productionTip = false

// 注册全局组件
Vue.use(ElementUI)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
