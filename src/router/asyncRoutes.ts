/*
 * @Description:模拟动态路由
 * @Author: hutu
 * @Date: 2022-01-13 16:57:13
 * @LastEditors: hutu
 * @LastEditTime: 2022-01-17 14:58:26
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
    identifier: 'charts',
    title: '图表',
    type: 'menu',
    url: '/charts',
    icon: 'icon-signal-fill',
    children: [
      { father: 'charts', identifier: 'bar', title: '柱状图', type: 'menu', url: '/bar', icon: 'icon-signal-fill' },
      { father: 'charts', identifier: 'line', title: '折线图', type: 'menu', url: '/line', icon: 'icon-signal-fill' }
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
  { father: 'sys.blog', identifier: 'theme', title: '换肤', type: 'menu', url: '/theme', icon: 'icon-skin-fill' }
]
