import { ITheme } from '@/interface'

const state: ITheme = {
  styles: {
    sidebarBg: '#304156',
    headerBg: '#ffffff',
    mainBg: '#f0f2f5',
    menuBg: '#304156',
    menuTextColor: '#bfcbd9',
    menuTextActiveColor: '#409EFF',
    subMenuBg: '#1f2d3d',
    subMenuHover: '#001528'
  }
}
const mutations = {
  SET_TEST: (state: ITheme, flag: boolean): void => {
    state.styles.menuTextColor = 'red'
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
