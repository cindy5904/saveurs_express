import { createBrowserRouter } from "react-router-dom";
import HomePage from "../views/HomePage";
import Layout from "../layout/Layout";

const root = createBrowserRouter([
    {
        path : "/",
        element : <Layout />,
        children : [
            {
                path : '/',
                element : <HomePage />
            }
        ]
    }
])

export default root