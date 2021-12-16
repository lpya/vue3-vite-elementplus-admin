import { Method } from 'axios'
import service from './request'
export function request(url: string, params: object, method: Method) {
  return new Promise((resolve, reject) => {
    service(url, { method: method, data: params })
      .then((response) => {
        resolve(response)
      })
      .catch((error) => {
        reject(error)
      })
  })
}
