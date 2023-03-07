// declare interface ITemp {} 基础
// declare interface ...AddReq {} 添加请求
// declare interface ...AddResp {} 添加请求返回数据
// declare interface ...DelReq {} 删除请求
// declare interface ...DelResp {} 删除请求返回数据
// declare interface ...UpdateReq {} 更新请求
// declare interface ...UpdateResp {} 更新请求返回数据
// declare interface ...detailReq {} 详情请求
// declare interface ...detailResp {} 详情请求返回数据
// declare interface ...ListReq {} 列表请求
// declare interface ...ListResp {} 列表请求返回数据
// 其他...

// 所有字段
declare interface ITemp {
  id: number
  name: string
  create_at: string
  update_at: string
}

// 添加请求
declare interface ITempAddReq {
  name: string
}

// 删除请求
declare interface ITempDelReq {
  id: number
}

// 修改请求
declare interface ITempUpdateReq {
  name: string
}

// 详情请求
declare interface ITempDetailReq {
  id: number
}

// 详情请求返回
declare interface ITempDetailResp {
  id: number
}

// 列表请求
declare interface ITempListReq {
  data: {
    search: string
  }
  page: IPage
}

// 列表请求返回
declare interface ITempListResp {
  datas: ITemp[]
  page: IPage
}
