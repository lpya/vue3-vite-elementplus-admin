import Mock from 'mockjs'
import { article } from './article'
import { param2Obj } from './utils'

type IOptions = {
  url: string
  type: string
  body: string
}
const mocks = [...article]

function mockXHR() {
  Mock.XHR.prototype.proxy_send = Mock.XHR.prototype.send
  Mock.XHR.prototype.send = function () {
    if (this.custom.xhr) {
      this.custom.xhr.withCredentials = this.withCredentials || false

      if (this.responseType) {
        this.custom.xhr.responseType = this.responseType
      }
    }
    this.proxy_send(...arguments)
  }
  // : { (config: any): { code: number; data: { total: number; items: any[] } }; (arg0: { method: string; body: any; query: IDictionary<string> }): any }
  function XHR2ExpressReqWrap(respond) {
    return function (options: IOptions) {
      let result = null
      if (respond instanceof Function) {
        const { body, type, url } = options
        result = respond({
          method: type,
          body: JSON.parse(body),
          query: param2Obj(url)
        })
      } else {
        result = respond
      }
      return Mock.mock(result)
    }
  }

  for (const i of mocks) {
    Mock.mock(new RegExp(i.url), i.type || 'get', XHR2ExpressReqWrap(i.response))
  }
}
mockXHR()
