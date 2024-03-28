import { createBrowserRouter } from "react-router-dom";
import HomePage from "../views/HomePage";
import Layout from "../layout/Layout";
import MenuList from "../components/menu/MenuList";
import Commandes from "../components/Commandes/Commandes";

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
            },
            {
                path : '/commandes',
                element: <Commandes />
            }
        ]
    }
])

export default root