import { Route, Routes } from "react-router-dom";
import CartPage from "../pages/CartPage";
import CheckoutPage from "../pages/CheckoutPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import ProfilePage from "../pages/ProfilePage";
import SignupPage from "../pages/SignupPage";

const ProjectRoutes = () => {
    const routes = [
        { path: '/', element: <HomePage /> },
        { path: '/cart', element: <CartPage /> },
        { path: '/checkout', element: <CheckoutPage /> },
        { path: '/login', element: <LoginPage /> },
        { path: '/signup', element: <SignupPage /> },
        { path: '/profile', element: <ProfilePage /> },
    ]

    return (
        <Routes>
            {routes.map((route) => <Route path={route.path} element={route.element} />)}
        </Routes>
    )
}

export default ProjectRoutes;