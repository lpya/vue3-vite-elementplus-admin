import { IAsyncRoutes, IPermission } from '@/interface/index'
import { SET_ROUTES, GENERATE_ROUTES, SET_MENU_COLLAPSE } from '../type/index'
import { RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/Index.vue'
import router, { constantRoutes } from '@/router'
import { Commit } from 'vuex'
const modules = import.meta.glob('../../views/**/**.vue')
const state: IPermission = {
  accessRoutes: [], //模拟异步路由
  menuCollapse: false //侧边栏展开||折叠
}
const mutations = {
  //设置路由
  [SET_ROUTES]: (state: IPermission, routes: RouteRecordRaw[]): void => {
    state.accessRoutes = routes
  },
  //设置侧边栏折叠、展开
  [SET_MENU_COLLAPSE]: (state: IPermission, flag: boolean): void => {
    state.menuCollapse = flag
  }
}
const actions = {
  /**
   * @desc: 根据请求回来的数据生成路由表
   * @param {object} params
   * @param {IAsyncRoutes} data //异步路由列表
   * @return {Promise}
   */
  [GENERATE_ROUTES]({ commit }: { commit: Commit }, data: IAsyncRoutes[]): Promise<RouteRecordRaw[]> {
    return new Promise((resolve) => {
      let arr: RouteRecordRaw[] = []
      const accessRoutes: RouteRecordRaw = {
        //动态路由表
        path: '/',
        component: Layout,
        children: []
      }
      const VUE_APP_PREFIX_ROUTE = process.env.VUE_APP_PREFIX_ROUTE || 'sys.blog'
      arr = getChildrenRouter(data, VUE_APP_PREFIX_ROUTE, true)
      console.log(arr)
      accessRoutes.children = arr
      router.addRoute(accessRoutes)
      resolve(arr)
    })
  }
}
const getters = {}
const permission = {
  state,
  mutations,
  actions,
  getters
}
/**
 * @desc: 根据children生成路由表
 * @param {IAsyncRoutes} routes 路由
 * @param {string} fatherName 父级
 * @param {boolean} isFirst 是否是第一级路由
 * @return {Array}
 */
const getChildrenRouter = (routes: IAsyncRoutes[], fatherName: string, isFirst: boolean): Array<RouteRecordRaw> => {
  const arr: RouteRecordRaw[] = []
  // let accessRoutes: RouteRecordRaw
  routes.forEach((item) => {
    const dirName: string = item.father === process.env.VUE_APP_PREFIX_ROUTE ? `/${item.identifier.toLowerCase()}` : `/${fatherName.toLowerCase()}`
    if (item.children && item.children.length > 0) {
      const accessRoutes: RouteRecordRaw = {
        path: item.url,
        name: `${getTitleCase(item.identifier)}`,
        component: modules[`../../views${dirName}/Index.vue`],
        meta: { title: item.title, icon: item.icon },
        children: []
      }
      accessRoutes.children = getChildrenRouter(item.children, item.identifier, false)
      console.log(accessRoutes, 'aaa')
      arr.push(accessRoutes)
    } else {
      if (isFirst) {
        arr.push({
          path: item.url,
          name: `${getTitleCase(item.identifier)}`,
          component: modules[`../../views${dirName}/Index.vue`],
          meta: { title: item.title, icon: item.icon }
        })
      } else {
        console.log(`../../views${dirName}/Index.vue`)
        arr.push({
          path: item.url,
          name: `${getTitleCase(item.identifier)}`,
          component: modules[`../../views/${dirName}/Index.vue`],
          meta: { title: item.title, icon: item.icon }
        })
      }
    }
  })
  return arr
}
/**
 * @desc: 获取文件当前目录
 * @param {string} identifier 标识符
 * @param {string} fatherName 父级标识符
 * @param {boolean} isFirst 是否是第一路由
 * @return {string}
 */
const getDirName = (identifier: string, fatherName: string, isFirst: boolean): string => {
  if (isFirst) {
    return `/${identifier.toLowerCase()}`
  }
  return fatherName.toLowerCase()
}
/**
 * @desc: 首字母大写
 * @param {string} str 字符串
 * @return {*}
 */
const getTitleCase = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
}

export default permission
