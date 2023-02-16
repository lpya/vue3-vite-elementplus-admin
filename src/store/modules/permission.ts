/*
 * @Description:路由权限
 * @Author: hutu
 * @Date: 2021-12-21 16:57:25
 * @LastEditors: hutu
 * @LastEditTime: 2022-02-11 14:47:12
 */
import { SET_ROUTES, GENERATE_ROUTES, SET_MENU_COLLAPSE } from '../type'
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
  [SET_ROUTES]: (state: IPermission, routes: RouteRecordRaw[]) => {
    state.accessRoutes = routes
  },
  //设置侧边栏折叠、展开
  [SET_MENU_COLLAPSE]: (state: IPermission, flag: boolean) => {
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
      const arr: RouteRecordRaw[] = []
      let menuList: RouteRecordRaw[] = []
      data.forEach((item) => {
        const accessRoutes: RouteRecordRaw = {
          path: `/${item.identifier}`,
          component: Layout,
          // meta: { title: item.title, icon: item.icon },
          children: []
        }
        let isEnd: boolean = true
        if (item.children && item.children.length > 0) {
          isEnd = false
          accessRoutes.meta = { title: item.title, icon: item.icon }
        }
        accessRoutes.children = getChildrenRouter(item, item.identifier, isEnd)
        router.addRoute(accessRoutes)
        arr.push(accessRoutes)
        if (isEnd) {
          menuList = menuList.concat(accessRoutes.children)
        } else {
          menuList.push(accessRoutes)
        }
      })
      router.options.routes = constantRoutes.concat(arr)
      commit(SET_ROUTES, menuList)
      resolve(menuList)
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
const getChildrenRouter = (routes: IAsyncRoutes, fatherName: string, isEnd: boolean): RouteRecordRaw[] => {
  const arr = []
  if (routes.children && routes.children.length > 0) {
    routes.children.forEach((item) => {
      const routerData = getRouterData(fatherName, item.identifier, item.url, isEnd)
      if (item.children && item.children.length > 0) {
        arr.push({
          path: routerData.routePath,
          name: routerData.componentName,
          component: modules[routerData.componentPath],
          meta: { title: item.title, icon: item.icon },
          children: getChildrenRouter(item, routerData.fatherName, false)
        })
      } else {
        arr.push({
          path: routerData.routePath,
          name: routerData.componentName,
          component: modules[routerData.componentPath],
          meta: { title: item.title, icon: item.icon }
        })
      }
    })
  } else {
    const routerData = getRouterData(fatherName, routes.identifier, routes.url, isEnd)
    arr.push({
      path: routerData.routePath,
      name: routerData.componentName,
      component: modules[routerData.componentPath],
      meta: { title: routes.title, icon: routes.icon }
    })
  }
  return arr
}
interface RouterData {
  fatherName: string //连接后的子父级
  componentName: string //组件名称
  routePath: string //路由
  componentPath: string //组件路径
}
/**
 * @desc: 获取路由数据
 * @param {string} fatherName 父级标识符
 * @param {string} identifier 子级标识符
 * @param {string} url 路由
 * @param {boolean} isEnd 是否是最后一级
 * @return {*}
 */
const getRouterData = (fatherName: string, identifier: string, url: string, isEnd: boolean): RouterData => {
  const obj: RouterData = {
    fatherName: '',
    componentName: '',
    routePath: '',
    componentPath: ''
  }
  obj.fatherName = getCurrentFatherName(fatherName, identifier, isEnd)
  obj.routePath = getCurrentRoutePath(fatherName, url, isEnd)
  obj.componentPath = getCurrentComponentPath(obj.fatherName)
  obj.componentName = getCurrentComponentName(fatherName, identifier)
  return obj
}
/**
 * @desc: 获取当前路由子父级连接后的路径
 * @param {string} fatherName 父级标识符
 * @param {string} identifier 子级标识符
 * @param {boolean} isEnd 是否是最后一级路由
 * @return {*}
 */
const getCurrentFatherName = (fatherName: string, identifier: string, isEnd: boolean): string => {
  if (isEnd) {
    return fatherName
  }
  return `${fatherName}/${identifier}`
}
/**
 * @desc: 获取组件路径
 * @param {string} fatherName 连接后的路径
 * @return {*}
 */
const getCurrentComponentPath = (fatherName: string): string => {
  return `../../views/${fatherName}/Index.vue`
}
/**
 * @desc: 获取组件名称
 * @param {string} fatherName 父级标识符
 * @param {string} identifier 子级标识符
 * @return {*}
 */
const getCurrentComponentName = (fatherName: string, identifier: string): string => {
  if (fatherName === identifier) {
    return getTitleCase(fatherName.replace('/', ''))
  }
  return getTitleCase(fatherName.replace('/', '')) + getTitleCase(identifier.replace('/', ''))
}
/**
 * @desc: 获取当前路径名称
 * @param {string} fatherName 父级标识符
 * @param {string} url 路由
 * @param {boolean} isEnd 是否是最后一级路由
 * @return {*}
 */
const getCurrentRoutePath = (fatherName: string, url: string, isEnd: boolean): string => {
  if (isEnd) {
    return `/${fatherName}`
  }
  return `/${fatherName}${url}`
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
