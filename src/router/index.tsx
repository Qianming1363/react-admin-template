import React,{ lazy } from "react"

import { Navigate } from "react-router-dom"
import Home from "@/views/Home"
import Login from "@/views/Login"
import Data from "@/views/Data"
// import User from "@/views/User"
// import About from "@/views/About"


const User = lazy(() => import("../views/User"))
const About = lazy(() => import("../views/About"))
// 懒加载的模式 需要添加一个loading组件

const withLoadingComponent = (component: JSX.Element) => <React.Suspense fallback={<div>loading</div>}>{component}</React.Suspense>

const routes = [
  {
    path: '/',
    element: <Navigate to="/home"></Navigate>
  },
  {
    path: "/home/*",
    name: "home",
    element: <Home />,
    children: [
      {
        path: "*",
        element: withLoadingComponent(<Data/>)
      },
      {
        path: "about",
        element: withLoadingComponent(<About/>)
      },
      {
        path: "user",
        element: withLoadingComponent(<User/>)
      },
      {
        path: "data",
        element: withLoadingComponent(<Data/>)
      },
    ]
  },
  {
    path: "/login",
    element: withLoadingComponent(<Login/>)
  }
]


export default routes