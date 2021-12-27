import { RouteRecordRaw } from 'vue-router'
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
  identifier: string //标识码
  title: string //名称
  icon: string //图标
  type: string //类别 menu：侧边栏
  url: string //路径
  children?: IAsyncRoutes[]
}

/**
 * 路由权限[vuex]
 */
export interface IPermission {
  accessRoutes: RouteRecordRaw[] //模拟异步路由
  menuCollapse: boolean //折叠菜单
}
