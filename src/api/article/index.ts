import Http from '@/utils/request'
export class ArticleApi {
  static async getArticle() {
    const res = await Http.get<IResultDatas<IArticle[]>>(`/api/article/list`)
    return res.data
  }
}
