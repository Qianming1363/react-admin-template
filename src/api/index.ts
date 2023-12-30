/**
 * 通用返回体
 */
export interface IBaseReponse<T> {
  code: number
  message: string
  data: T
}

