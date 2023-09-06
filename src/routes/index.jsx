import { BrowserRouter } from "react-router-dom"
import { useAuth } from "../hooks/auth"

import AppRoutes from "./app.routes";
import AuthRoutes from "./auth.routes";

const Routes = () => {
    const { user } = useAuth()
    const isAdmin = user ? user.is_admin : false

    return (
        <BrowserRouter>
            {user ? <AppRoutes isAdmin={isAdmin} /> : <AuthRoutes />}
        </BrowserRouter>
    )
}

export default Routes