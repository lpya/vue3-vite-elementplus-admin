import { createRouter, createWebHistory, createWebHashHistory, RouteRecordRaw } from 'vue-router'
export const constantRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Login',
    component: () => import('@/views/login/Index.vue'),
    meta: {
      title: ''
    }
  }
]
// createWebHistory(process.env.BASE_URL)
// createWebHashHistory(process.env.BASE_URL)
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: constantRoutes
})
export default router
