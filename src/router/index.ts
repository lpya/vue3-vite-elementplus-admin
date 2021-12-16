import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
export const constantRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: 'dashboard'
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('@/views/dashboard/Index.vue'),
    meta: {
      title: '控制面板'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: constantRoutes
})
export default router
