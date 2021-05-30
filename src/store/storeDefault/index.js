import state from './state'
import * as getters from './getters'
import * as mutations from './mutations'
import * as actions from './actions'
import modules from './modules'

export default {
  namespaced: true,
  modules,
  getters,
  mutations,
  actions,
  state
}
