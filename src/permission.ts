import router from '@/router'
//引入加载进度条
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
//获取网站标题
import { getPageTitle } from '@/utils/get-page-title'
import { asyncRoutes } from '@/router/asyncRoutes'

import store from '@/store'
import { GENERATE_ROUTES } from '@/store/type'

NProgress.configure({ showSpinner: false })
let isDynamicRouter = true
router.beforeEach(async (to, from, next) => {
  // 开启进度条
  NProgress.start()
  //设置site标题
  document.title = getPageTitle(String(to.meta.title))
  //设置动态路由
  if (isDynamicRouter) {
    await store.dispatch(GENERATE_ROUTES, asyncRoutes)
    next({ ...to, replace: true })
    isDynamicRouter = false
  } else {
    next()
  }
})
router.afterEach(() => {
  // 关闭进度条
  NProgress.done()
})
