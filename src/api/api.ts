import request from "./request"

interface ILoginParams {
  userName: string
  pwd: string
}

interface ILoginRes {
  token: string
  roles: string[]
}

export default {


  login(data: ILoginParams) {
    return request.post("/login", data)
  }

}