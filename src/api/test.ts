import { request } from '@/utils/http'
//测试
export const test = (params: object) => {
  return request(`/api/article/getArticleList`, params, 'get')
}
