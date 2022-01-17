/*
 * @Description:文章
 * @Author: hutu
 * @Date: 2022-01-12 09:29:52
 * @LastEditors: hutu
 * @LastEditTime: 2022-01-17 09:43:26
 */
import * as Mock from 'mockjs'
import { IArticleList, IArticleListQuery } from '@/interface'

const List: IArticleList[] = []
const count = 100
for (let i = 0; i < count; i++) {
  List.push(
    Mock.mock({
      id: '@increment',
      title: '@title(5, 10)',
      author: '@first',
      'type|1': ['vue', 'Laravel', 'react', 'thinkphp'],
      content: '@title(5, 10)',
      'status|1': ['published', 'draft'],
      pageviews: '@integer(300, 5000)',
      created_at: '@datetime'
    })
  )
}

export const article = [
  {
    url: '/api/article/list',
    type: 'get',
    response: (config: { body: IArticleListQuery }) => {
      const { type, title, page = 1, limit = 20, sort } = config.body
      let mockList = List.filter((item) => {
        if (type && item.type !== type) return false
        if (title && item.title.indexOf(title) < 0) return false
        return true
      })

      if (sort === '-id') {
        mockList = mockList.reverse()
      }
      const pageList = mockList.filter((item, index) => index < limit * page && index >= limit * (page - 1))
      return {
        code: 10000,
        data: {
          total: mockList.length,
          items: pageList
        }
      }
    }
  }
]
