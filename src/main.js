/*todo 注册路由器：main.js*/
import Vue from 'vue'
import app from './App'
import router from './router'
import store from './store'

/*创建vue配置路由器*/
new Vue({
  el:'#app',
  router, /*注册路由器*/ // 结果所有组件多了2个属性: $route/$router
  render:h => h(app),
  store // 所有的组件都多了一个属性: $store
})
