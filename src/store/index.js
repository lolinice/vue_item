/*
 vuex最核心的管理模块: store对象
 向外暴露store对象
 export default new Vuex.Store({
 state,
 mutations,
 actions,
 getters
 })

todo vuex最核心的管理模块：store对象
 */

import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
