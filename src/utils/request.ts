import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

const config: AxiosRequestConfig = {
  baseURL: '/',
  timeout: 60000
}

class Http {
  private static axiosInstance: AxiosInstance
  constructor(config: AxiosRequestConfig) {
    Http.axiosInstance = axios.create(config)
    this.interceptorsRequest()
    this.interceptorsResponse()
  }

  //请求拦截器
  private interceptorsRequest() {
    Http.axiosInstance.interceptors.request.use(
      (config: AxiosRequestConfig) => {
        return config
      },
      (error: string) => {
        return Promise.reject(error)
      }
    )
  }
  //响应拦截器
  private interceptorsResponse() {
    Http.axiosInstance.interceptors.response.use(
      async (response) => {
        return response
      },
      (error: string) => {
        return Promise.reject(error)
      }
    )
  }
  get<T>(url: string, params?: object): Promise<AxiosResponse<T>> {
    return Http.axiosInstance.get(url, { data: params })
  }
  post<T>(url: string, data?: object): Promise<AxiosResponse<T>> {
    return Http.axiosInstance.post(url, data)
  }
}

export default new Http(config)
