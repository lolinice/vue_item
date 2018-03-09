/*
 包含多个直接更新state的方法(回调函数)的对象
 谁来触发: action中的commit('mutation名称')
 只能包含同步的代码, 不能写异步代码
 const mutations = {
    yyy (state, data) {
    // 更新state的某个属性
   }
 }

 todo 直接操作state的对象
 */
import {
  RECEIVE_ADDRESS,
  RECEIVE_SHOPS,
  RECEIVE_TYPES
} from './mutation-types'

/*state.js里有三个属性 address地址 foodTypes食物分类 shops商家列表*/
export default {
  [RECEIVE_ADDRESS](state,{address}){
    state.address = address
  },
  [RECEIVE_TYPES](state,{foodTypes}){
    state.foodTypes = foodTypes
  },
  [RECEIVE_SHOPS](state,{shops}){
    state.shops = shops
  }

}


