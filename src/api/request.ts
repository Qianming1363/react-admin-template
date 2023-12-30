import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { IBaseReponse } from ".";
import { message } from "antd";

/**
 * 接收两个泛型
 * T 是业务层的请求类型，也就是接口定义的类型
 * 所以用统一的返回结构， 又接收一个类型 这个是具体
 */
axios.interceptors.response.use((response: AxiosResponse<IBaseReponse<any>>) => {
  // 返回为非200全是报错，需要前端提示出来message
  if (response.data.code !== 200) {
    // 提示报错信息
    message.error(response.data.message)
    // 抛出错误，阻塞后续程序运行
    throw new Error(response.data.message)
  }

  // 返回给业务层的数据，只需要关心业务

  return response.data.data
})


axios.interceptors.request.use((config: any) => {
  if (config.headers) {
    config.headers['Authorization'] = ''
  }
  return config
})


export default axios