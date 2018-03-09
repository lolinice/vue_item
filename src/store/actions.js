/*
 包含多个事件回调函数的对象
 通过执行: commit()来触发mutation的调用, 间接更新state
 谁来触发: 组件中: $store.dispatch('action名称')  // 'zzz'
 可以包含异步代码(定时器, ajax)
 const actions = {
 zzz ({commit, state}, data1) {
 commit('yyy', data2)
 }
 }
todo mutations.js里 谁来触发: action中的commit('mutation名称')
todo 触发mutation调用间接更新状态的对象
*/
import {
  reqAddress,
  reqFoodTypes,
  reqShops
} from '../api'

import {
  RECEIVE_ADDRESS,
  RECEIVE_TYPES,
  RECEIVE_SHOPS
} from './mutation-types'

export default {
  //异步获取地址
  async getAddress({commit,state}){
    const geohash = state.latitude + ',' + state.longitude
    //发送ajax请求获取数据
    const result = await reqAddress(geohash)
    //commit mutation接收数据
    commit(RECEIVE_ADDRESS,{address:result.data})
  },

  //异步获取食物分类列表
  async getFoodTypes({commit},callback){
    //发送ajax请求
    const result = await reqFoodTypes()
    //commit mutation接收数据
    commit(RECEIVE_TYPES,{foodTypes:result.data})
    callback && callback()
  },

  //异步获取商家列表
  async getShops({commit,state}){
    const {latitude,longitude} = state
    //发送ajax请求获取数据
    const result = await reqShops({latitude,longitude})
    //commit mutation接收数据
    commit(RECEIVE_SHOPS,{shops:result.data})
  }

}


