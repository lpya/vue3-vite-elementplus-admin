/*
 * @Descripttion:
 * @Author: hutu
 * @Date: 2021-12-07 08:36:02
 * @LastEditors: hutu
 * @LastEditTime: 2021-12-20 10:00:42
 */
import { IAsyncRoutes } from '@/interface/index'
/**
 * 模拟请求后的路由数据
 */
export const asyncRoutes: IAsyncRoutes[] = [
  {
    father: 'sys.blog',
    identifier: 'dashboard',
    title: '控制面板',
    type: 'menu',
    url: '/dashboard',
    icon: 'icon-dashboard'
  },
  {
    father: 'sys.blog',
    identifier: 'article',
    title: '文章管理',
    type: 'menu',
    url: '/article',
    icon: 'icon-dashboard',
    children: [
      { father: 'article', identifier: 'list', title: '文章列表', type: 'menu', url: '/list', icon: 'icon-dashboard' },
      {
        father: 'article',
        identifier: 'type',
        title: '文章类别',
        type: 'menu',
        url: '/type',
        icon: 'icon-dashboard',
        children: [
          { father: 'type', identifier: 'list1', title: '文章列表1', type: 'menu', url: '/list1', icon: 'icon-dashboard' },
          { father: 'type', identifier: 'type1', title: '文章类别1', type: 'menu', url: '/type1', icon: 'icon-dashboard' }
        ]
      }
    ]
  },
  { father: 'sys.blog', identifier: 'attachment', title: '附件管理', type: 'menu', url: '/attachment', icon: 'icon-dashboard' }
]
