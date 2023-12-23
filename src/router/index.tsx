import { Navigate } from "react-router-dom"
import Home from "@/views/Home"
import User from "@/views/User"
import About from "@/views/About"


const routes = [
  {
    path: '/',
    element: <Navigate to="/home"></Navigate>
  },
  {
    path: "/home",
    element: <Home />
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/user",
    element: <User />
  }
]


export default routes