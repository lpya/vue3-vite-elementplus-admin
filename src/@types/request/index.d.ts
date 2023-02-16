declare interface IResult {
  errcode: number
  errmsg: string
}

declare interface IResultData<T> {
  errcode: number
  errmsg: string
  data: T
}

declare interface IResultDatas<T> {
  errcode: number
  errmsg: string
  datas: T
}

declare interface IResultDatasPage<T, P> {
  errcode: number
  errmsg: string
  datas: T
  page: P
}

interface IPage {
  page_size: number // 每一页的大小
  page_number: number // 当前页码
  total: number // 总的数据条数
}
