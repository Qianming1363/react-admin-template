import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Login() {

  const [user, setUser] = useState("")
  const [pwd, setPwd] = useState("")

  const navigateTo = useNavigate()
  const login = () => {
    console.log('使用当前密码登录', user, pwd)
    navigateTo("/home")

  }

  return (
    <div>
      <span>账号</span> <input value={user} onChange={(e) => setUser(e.target.value)} type="text" />
      <span>密码</span> <input value={pwd} onChange={(e) => setPwd(e.target.value)} type="password" />
      <button onClick={login}>登录</button>
    </div>
  )
}