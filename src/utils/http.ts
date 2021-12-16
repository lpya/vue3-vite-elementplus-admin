/*
 * @Description:请求
 * @Author: hutu
 * @Date: 2021-12-15 15:18:42
 * @LastEditors: hutu
 * @LastEditTime: 2021-12-16 11:30:14
 */
import { Method } from 'axios'
import service from './request'

/**
 * @desc: 请求
 * @param {string} url 路径
 * @param {object} params 参数
 * @param {Method} method 方法默认为POST
 * @return {*}
 */
export function request(url: string, params: object, method: Method = 'POST') {
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
