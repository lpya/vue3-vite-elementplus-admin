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
      const arr: RouteRecordRaw[] = []
      // data.forEach((item) => {
      //   let accessRoutes: RouteRecordRaw
      //   if (item.children && item.children.length > 0) {
      //     accessRoutes = {
      //       path: item.url,
      //       component: Layout,
      //       children: getChildrenRouter(item, item.father, true)
      //     }
      //   } else {
      //     accessRoutes = {
      //       path: item.url,
      //       component: Layout,
      //       name: getTitleCase(item.identifier),
      //       meta: { title: item.title, icon: item.icon },
      //       redirect: 'index',
      //       children: getChildrenRouter(item, item.father, true)
      //     }
      //   }
      //   arr.push(accessRoutes)
      //   router.addRoute(accessRoutes)
      // })
      // router.options.routes = constantRoutes.concat(arr)
      // commit(SET_ROUTES, arr)
      resolve(arr)
      // let accessRoutes: RouteRecordRaw = {//动态路由表
      //     path: "/",
      //     component: Layout,
      //     children: []
      // }
      // let menuRouterList: RouteRecordRaw[] = []//需要渲染到侧边栏的路由
      // data.forEach((route, key) => {
      //     let obj: RouteRecordRaw
      //     if (route.children && route.children.length > 0) {
      //         obj = {
      //             path: `${route.url}`,
      //             name: route.identifier.toUpperCase(),
      //             component: () => import(`@/views${route.url}/Index.vue`),
      //             meta: { title: route.name, icon: route.icon },
      //             children: getChildrenRouter(route, route.father, true),
      //         }
      //         accessRoutes.children = accessRoutes.children?.concat(getChildrenRouter(route, route.father, true))
      //     } else {
      //         obj = {
      //             path: `${route.url}`,
      //             name: route.identifier.toUpperCase(),
      //             component: () => import(`@/views${route.url}/Index.vue`),
      //             meta: { title: route.name, icon: route.icon },
      //         }
      //         accessRoutes.children?.push(obj)
      //     }
      //     menuRouterList.push(obj)
      // })
      // // console.log(menuRouterList,accessRoutes);

      // commit(SET_ROUTES, menuRouterList)
      // resolve(accessRoutes)
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
// /**
//  * @desc: 根据children生成路由表
//  * @param {IAsyncRoutes} routes 路由
//  * @param {string} fatherName 父级
//  * @param {boolean} isFirst 是否是第一级路由
//  * @return {Array}
//  */
// const getChildrenRouter = (routes: IAsyncRoutes, fatherName: string, isFirst: boolean): Array<RouteRecordRaw> => {
//   const arr: RouteRecordRaw[] = []
//   const dirName = getDirName(routes.identifier, fatherName, isFirst)
//   if (routes.children && routes.children.length > 0) {
//     routes.children.forEach((item) => {
//       const url: string = item.url.split('/')[1]
//       const fileName: string = url.charAt(0).toUpperCase() + url.slice(1).toLowerCase()
//       console.log(dirName.slice(1))
//       arr.push({
//         path: dirName + item.url,
//         name: item.identifier.toUpperCase(),
//         component: modules[`../../views${dirName}/${fileName}.vue`],
//         meta: { title: item.title, icon: item.icon },
//         children: getChildrenRouter(item, `${dirName}/${item.identifier}`, false)
//       })
//     })
//   } else {
//     if (isFirst) {
//       arr.push({
//         path: 'index',
//         name: `${getTitleCase(routes.identifier)}Index`,
//         component: modules[`../../views${dirName}/Index.vue`],
//         meta: { title: routes.title, icon: routes.icon }
//       })
//     }
//   }

//   return arr
// }
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
// /**
//  * @desc: 根据children生成路由表
//  * @param {IAsyncRoutes} routes 路由
//  * @param {string} fatherName 父级
//  * @param {boolean} isFirst 是否是第一级路由
//  * @return {Array}
//  */

// const getChildrenRouter = (routes: IAsyncRoutes, fatherName: string, isFirst: boolean): Array<RouteRecordRaw> => {
//     let arr: RouteRecordRaw[] = []
//     let dirName: string = routes.father === process.env.VUE_APP_PREFIX_ROUTE ? `/${routes.identifier.toLowerCase()}` : `${fatherName.toLowerCase()}`;
//     if (routes.children && routes.children.length > 0) {
//         routes.children.forEach((item, key) => {
//             const url: string = item.url.split("/")[1]
//             const fileName: string = url.charAt(0).toUpperCase() + url.slice(1).toLowerCase()
//             arr.push(
//                 {
//                     path: dirName + item.url,
//                     name: item.identifier.toUpperCase(),
//                     component: () => import(`@/views${dirName}/${fileName}.vue`),
//                     meta: { title: item.title, icon: item.icon },
//                     children: getChildrenRouter(item, `${dirName}/${item.identifier}`, false)
//                 }
//             )
//         })
//     } else {
//         if (isFirst) {
//             arr.push(
//                 {
//                     path: "index",
//                     name: routes.title.toUpperCase(),
//                     component: () => import(`@/views${dirName}/Index.vue`),
//                     meta: { title: routes.title, icon: routes.icon },
//                 }
//             )
//         }

//     }
//     return arr
// }

export default permission
