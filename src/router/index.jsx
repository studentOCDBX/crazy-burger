import { createBrowserRouter } from "react-router-dom"
import ErrorPage from "../components/pages/error/ErrorPage"
import LoginPage from "../components/pages/login/LoginPage"
import OrderPage from "../components/pages/order/OrderPage"

const router = createBrowserRouter([
    {
        errorElement: <ErrorPage />,
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
export default router