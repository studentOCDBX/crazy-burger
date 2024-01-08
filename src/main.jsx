import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import LoginPage from './components/pages/login/LoginPage'
import ErrorPage from './components/pages/error/ErrorPage.jsx'
import OrderPage from './components/pages/order/OrderPage.jsx'

const router = createBrowserRouter([
  {
    errorElement: < ErrorPage />,
    children: [
      {
        path: "/",
        element: <LoginPage />
      },
      {
        path: "/order/:username",
        element: <OrderPage />
      },
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
