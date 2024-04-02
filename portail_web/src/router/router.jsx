import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import RestaurantPage from "../pages/RestaurantPage/RestaurantPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <HomePage />,
            },
            {
                path: "/connexion",
                element: <LoginPage />,
            },
            {
                path: "/mon-compte",
                element: <ProfilePage />,
            },
            {
                path: "/restaurant/:restaurantId",
                element: <RestaurantPage />,
            },
        ],
    },
]);

export default router;
