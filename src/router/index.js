/*路由器模块*/

import Vue from 'vue'
import VueRouter from 'vue-router'

import Msite from '../pages/Msite/Msite.vue'
import Order from '../pages/Order/Order.vue'
import Search from '../pages/Search/Search.vue'
import Profile from '../pages/Profile/Profile.vue'
import Login from '../pages/Login/Login.vue'

Vue.use(VueRouter)

/*
todo 路由器模块：src/router/index.js
VueRouter(): 用于创建路由器的构建函数
 路由器里配路由，路由里有path…
*/
export default new VueRouter({
  /*路由配置*/
  routes:[
    /*配置默认的 自动跳转路由*/
    {
      path:'/',
      redirect:'/msite'
    },
    /*一般路由*/
    {
      path:'/msite',
      component:Msite,
      meta:{ //给当前
        showFooter:true //标识当前组件需要显示底部，其它的不需要
      }
    },
    {
      path:'/search',
      component:Search,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/order',
      component:Order,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/profile',
      component:Profile,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/login',
      component:Login
    }
  ]
})
