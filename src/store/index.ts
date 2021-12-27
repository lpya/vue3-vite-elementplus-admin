import { createStore } from 'vuex'
import permission from './modules/permission'
import user from './modules/user'
import theme from './modules/theme'
const state = {}

const mutations = {}

const actions = {}

const modules = {
  permission,
  user,
  theme
}

export default createStore({
  state,
  mutations,
  actions,
  modules
})
