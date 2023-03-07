import Http from '@/utils/request'

export class TempApi {
  static async addTemp(data: ITempAddReq) {
    return Http.post<IResult>('/temp/add', data)
  }
  static async delTemp(data: ITempDelReq) {
    return Http.post<IResult>('/temp/del', data)
  }
  static async updateTemp(data: ITempUpdateReq) {
    return Http.post<IResult>('/temp/update', data)
  }
  static async getTempDetail(data: ITempDetailReq) {
    return Http.get<IResultData<ITempDetailResp>>('/temp/read', data)
  }
  static async getTempList(data: ITempListReq) {
    return Http.post<IResultDatasPage<ITempListResp['datas'], ITempListResp['page']>>('/temp/list', data)
  }
}
