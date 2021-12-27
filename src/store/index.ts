import { createStore } from 'vuex'
import permission from './modules/permission'
import user from './modules/user'
const state = {}

const mutations = {}

const actions = {}

const modules = {
  permission,
  user
}

export default createStore({
  state,
  mutations,
  actions,
  modules
})
