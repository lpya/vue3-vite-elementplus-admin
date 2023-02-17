/*
 * @Description:用户信息
 * @Author: hutu
 * @Date: 2021-12-24 17:15:21
 * @LastEditors: hutu
 * @LastEditTime: 2023-02-17 08:50:14
 */
import { USER_LOGIN, SET_TOKEN, USER_LOGOUT } from '../type'
import { Commit } from 'vuex'
import { getToken, setToken, removeToken } from '@/utils/auth'
const state: IUser = {
  token: getToken()
}
const mutations = {
  [SET_TOKEN]: (state: IUser, token: string) => {
    state.token = token
  }
}
const actions = {
  [USER_LOGIN]({ commit }: { commit: Commit }, data: ILogin) {
    return new Promise((resolve) => {
      setToken(data.account)
      commit(SET_TOKEN, data.account)
      resolve(data)
    })
  },
  [USER_LOGOUT]({ commit }: { commit: Commit }, data: boolean) {
    return new Promise((resolve) => {
      removeToken()
      resolve(data)
    })
  }
}
const getters = {}
const user = {
  state,
  mutations,
  actions,
  getters
}
export default user
