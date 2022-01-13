/*
 * @Description:
 * @Author: hutu
 * @Date: 2022-01-12 14:16:11
 * @LastEditors: hutu
 * @LastEditTime: 2022-01-12 14:18:12
 */
import { IDictionary } from '@/interface'

/**
 * @desc: 获取url上的参数
 * @param {string} url 请求路径
 * @return {object}
 */
export function param2Obj(url: string) {
  const search = decodeURIComponent(url.split('?')[1]).replace(/\+/g, ' ')
  if (!search) {
    return {}
  }
  const obj: IDictionary<string> = {}
  const searchArr = search.split('&')
  searchArr.forEach((v) => {
    const index = v.indexOf('=')
    if (index !== -1) {
      const name = v.substring(0, index)
      const val = v.substring(index + 1, v.length)
      obj[name] = val
    }
  })
  return obj
}
