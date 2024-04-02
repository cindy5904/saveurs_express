import { createBrowserRouter } from "react-router-dom";
import HomePage from "../views/HomePage";
import Layout from "../layout/Layout";
import MenuList from "../components/menu/MenuList";
import Commandes from "../components/Commandes/Commandes";
import EspaceClientPage from "../views/EspaceClientPage";
import ProtectedRoute from "../middleware/ProtectedRoute";


const root = createBrowserRouter([
    {
        path: "/",
        element: <Layout footer={true}/>,
        children: [
            {
                path: '/',
                element: <HomePage />
            },
            {
                path: '/menu',
                element: <MenuList />
            },
            {
                path: '/commande',
                element: <Commandes />
            }
        ]
    },
    {
        path: "/espace-client",
        // element: <ProtectedRoute><Layout footer={false} /></ProtectedRoute>,
        element: <Layout footer={false} />,
        children: [
            {
                path: "/espace-client",
                element: <EspaceClientPage />

            }
        ]
    }

])

export default root