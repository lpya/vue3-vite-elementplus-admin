import router from '@/router'
//引入加载进度条
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
//获取网站标题
import { getPageTitle } from '@/utils/get-page-title'
import { asyncRoutes, adminRoutes, visitorRoutes } from '@/router/asyncRoutes'

import store from '@/store'
import { GENERATE_ROUTES } from '@/store/type'
import { getToken } from '@/utils/auth'

NProgress.configure({ showSpinner: false })
const whiteList = ['/'] // no redirect whitelist
let isDynamicRouter = true
router.beforeEach(async (to, from, next) => {
  // 开启进度条
  NProgress.start()
  //设置site标题
  document.title = getPageTitle(String(to.meta.title))
  const toPath = to.path.replace('/', '')
  const token = getToken()
  if (token) {
    if (to.path === '/') {
      next()
    } else {
      try {
        if (isDynamicRouter) {
          if (token === 'admin') {
            asyncRoutes.splice(1, 0, adminRoutes[0])
          } else {
            asyncRoutes.splice(1, 0, visitorRoutes[0])
          }
          await store.dispatch(GENERATE_ROUTES, asyncRoutes)
          next({ ...to, replace: true })
          isDynamicRouter = false
        } else {
          const { path } = to
          if (token === 'admin' && path === '/permission/visitor') {
            next('/dashboard')
          }
          if (token === 'visitor' && path === '/permission/admin') {
            next('/dashboard')
          }
          next()
        }
      } catch (error) {
        ElMessage({
          message: 'Has Error',
          type: 'error'
        })
        next(`/?redirect=${toPath}`)
        NProgress.done()
      }
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next(`/?redirect=${toPath}`)
      NProgress.done()
    }
  }
})
router.afterEach(() => {
  // 关闭进度条
  NProgress.done()
})
