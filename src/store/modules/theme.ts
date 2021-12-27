import { ITheme } from '@/interface'

const state: ITheme = {
  styles: {
    menuBg: '#304156',
    test: 'eee'
  }
}
const mutations = {
  SET_TEST: (state: ITheme, flag: boolean): void => {
    state.styles.menuBg = 'red'
  }
}
const actions = {}
const getters = {}
const theme = {
  state,
  mutations,
  actions,
  getters
}
export default theme
