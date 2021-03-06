/*
 * @Description:用户信息
 * @Author: hutu
 * @Date: 2021-12-24 17:15:21
 * @LastEditors: hutu
 * @LastEditTime: 2021-12-27 10:57:45
 */
import { IUser, ILogin } from '@/interface'
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
      setToken(data.username)
      commit(SET_TOKEN, data.username)
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
