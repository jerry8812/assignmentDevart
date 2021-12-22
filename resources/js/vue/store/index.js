import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import state from './state'
import * as actions from './action'
import * as mutations from './mutation'

export default new Vuex.Store({
  state,
  actions,
  mutations
})