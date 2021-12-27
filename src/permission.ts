import router from '@/router'
//引入加载进度条
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
//获取网站标题
import { getPageTitle } from '@/utils/get-page-title'
import { asyncRoutes } from '@/router/asyncRoutes'

import store from '@/store'
import { GENERATE_ROUTES } from '@/store/type'
import { getToken } from '@/utils/auth'
import { ElMessage } from 'element-plus'

NProgress.configure({ showSpinner: false })
const whiteList = ['/'] // no redirect whitelist
let isDynamicRouter = true
router.beforeEach(async (to, from, next) => {
  // 开启进度条
  NProgress.start()
  //设置site标题
  document.title = getPageTitle(String(to.meta.title))
  if (getToken()) {
    if (to.path === '/') {
      next()
    } else {
      try {
        if (isDynamicRouter) {
          await store.dispatch(GENERATE_ROUTES, asyncRoutes)
          next({ ...to, replace: true })
          isDynamicRouter = false
        } else {
          next()
        }
      } catch (error) {
        ElMessage({
          message: 'Has Error',
          type: 'error'
        })
        next(`/?redirect=${to.path}`)
        NProgress.done()
      }
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next(`/?redirect=${to.path}`)
      NProgress.done()
    }
  }
})
router.afterEach(() => {
  // 关闭进度条
  NProgress.done()
})
