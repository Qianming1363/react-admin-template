import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
// 初始化样式
import "reset-css"
// UI 框架样式 

// 全局样式
import "@/assets/styles/global.scss"
// 组件样式，防止被覆盖

import { BrowserRouter} from "react-router-dom"

// redux toolkit
import { Provider } from 'react-redux'
import store from './store/index.ts'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
