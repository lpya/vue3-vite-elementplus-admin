/**
 * 用户信息
 */
export interface IUser {
  token: string | undefined
}
/**
 * 用户登陆信息
 */
export interface ILogin {
  username: string
  password: string
}

/**
 * 自定义异步路由
 */
export interface IAsyncRoutes {
  father: string //父级
  identifier: string //标识码，也是目录名称
  title: string //名称
  icon: string //图标
  type: string //类别 menu：侧边栏
  url: string //路径
  children?: IAsyncRoutes[]
}

/**
 * 路由权限[vuex]
 */
import { RouteRecordRaw } from 'vue-router'
export interface IPermission {
  accessRoutes: RouteRecordRaw[] //模拟异步路由
  menuCollapse: boolean //折叠菜单
}

/**
 * 主题颜色、字体
 */
export interface ITheme {
  styles: IThemeStyles
}
export interface IThemeStyles {
  sidebarBg: string //侧边栏背景颜色
  headerBg: string //头部背景颜色
  mainBg: string //主体内容背景颜色
  menuBg: string //菜单栏背景颜色
  menuTextColor: string //菜单栏字体颜色
  menuTextActiveColor: string //菜单栏选中字体颜色
  subMenuBg: string //子菜单栏背景颜色
  subMenuHover: string //子菜单栏悬浮颜色
}
export interface IPromise {
  code: number
  data: {
    items?: []
    total: number
  }
  message: string
}
/**
 * 文章列表
 */
export interface IArticleList {
  id: number
  title: string
  author: string
  type: string
  content: string
  status: string
  pageviews: number
  created_at: string
}
/**
 * 文章列表查询
 */
export interface IArticleListQuery {
  type: string
  title: string
  page?: number
  limit?: number
  sort: string
}

/**
 * 引入echarts
 */
// 引入 echarts 核心模块，核心模块提供了 echarts 使用必须要的接口。
import * as echarts from 'echarts/core'
// 引入图表，图表后缀都为 Chart
import { BarSeriesOption, LineSeriesOption, PieSeriesOption } from 'echarts/charts'
// 引入提示框，标题，直角坐标系，组件后缀都为 Component
import { TitleComponentOption, TooltipComponentOption, GridComponentOption } from 'echarts/components'
// 通过 ComposeOption 来组合出一个只有必须组件和图表的 Option 类型
export type IEchartsOption = echarts.ComposeOption<BarSeriesOption | LineSeriesOption | PieSeriesOption | TitleComponentOption | TooltipComponentOption | GridComponentOption>

/**
 * 字典
 */
export type IDictionary<T> = { [key: string]: T }
