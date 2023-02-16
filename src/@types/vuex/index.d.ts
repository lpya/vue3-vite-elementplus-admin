import { RouteRecordRaw } from 'vue-router'
declare global {
  interface IPermission {
    accessRoutes: RouteRecordRaw[] //模拟异步路由
    menuCollapse: boolean //折叠菜单
  }

  interface ITheme {
    styles: IThemeStyles
  }

  interface IThemeStyles {
    isLogo: boolean //是否展示logo
    headerBg: string //头部背景颜色
    mainBg: string //主体内容背景颜色
    sidebarBg: string //侧边栏背景颜色
    menuBg: string //菜单栏背景颜色
    menuTextColor: string //菜单栏字体颜色
    menuTextActiveColor: string //菜单栏选中字体颜色
    subMenuBg: string //子菜单栏背景颜色
    subMenuHover: string //子菜单栏悬浮颜色
    subMenuActive: string //子菜单选中背景颜色
  }
}
