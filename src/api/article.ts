import { request } from '@/utils/http'
//获取文章列表
export const getArticleList = (params?: object) => {
  return request(`/api/article/list`, params, 'get')
}
