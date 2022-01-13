/*
 * @Descripttion:
 * @Author: hutu
 * @Date: 2021-12-07 08:36:02
 * @LastEditors: hutu
 * @LastEditTime: 2022-01-13 09:04:03
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
    identifier: 'nested',
    title: '嵌套路由',
    type: 'menu',
    url: '/nested',
    icon: 'icon-align-left',
    children: [
      { father: 'nested', identifier: 'menu1-1', title: '菜单1-1', type: 'menu', url: '/menu1-1', icon: 'icon-align-left' },
      {
        father: 'nested',
        identifier: 'menu1-2',
        title: '菜单1-2',
        type: 'menu',
        url: '/menu1-2',
        icon: 'icon-align-left',
        children: [
          { father: 'menu1-2', identifier: 'menu1-2-1', title: '菜单1-2-1', type: 'menu', url: '/menu1-2-1', icon: 'icon-align-left' },
          { father: 'menu1-2', identifier: 'menu1-2-2', title: '菜单1-2-2', type: 'menu', url: '/menu1-2-2', icon: 'icon-align-left' }
        ]
      }
    ]
  },
  {
    father: 'sys.blog',
    identifier: 'table',
    title: '表格',
    type: 'menu',
    url: '/table',
    icon: 'icon-table',
    children: [
      { father: 'table', identifier: 'drag-table', title: '拖拽表格', type: 'menu', url: '/drag-table', icon: 'icon-table' },
      { father: 'table', identifier: 'complex-table', title: '综合表格', type: 'menu', url: '/complex-table', icon: 'icon-table' }
    ]
  },
  { father: 'sys.blog', identifier: 'attachment', title: '附件管理', type: 'menu', url: '/attachment', icon: 'icon-folder' }
]
