/*
 * @Description:初步封装axios
 * @Author: hutu
 * @Date: 2021-12-15 15:18:42
 * @LastEditors: hutu
 * @LastEditTime: 2022-01-13 10:02:41
 */
import axios from 'axios'

const service = axios.create({
  baseURL: '/',
  timeout: 60000,
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  }
})

service.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default service
