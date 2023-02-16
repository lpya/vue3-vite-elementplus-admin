declare interface IArticleState {
  article: IArticle[]
  tableData: IArticle[]
  loading: boolean
  ids: number[]
  page: IPage
}
declare interface IArticle {
  id: number
  title: string
  author: string
  type: string
  content: string
  status: string
  pageviews: number
  created_at: string
}
