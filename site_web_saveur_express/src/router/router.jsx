import { createBrowserRouter } from "react-router-dom";
import HomePage from "../views/HomePage";
import Layout from "../layout/Layout";
import MenuList from "../components/menu/MenuList";

const root = createBrowserRouter([
    {
        path : "/",
        element : <Layout />,
        children : [
            {
                path : '/',
                element : <HomePage />
            },
            {
                path: '/menu',
                element : <MenuList />
            }
        ]
    }
])

export default root