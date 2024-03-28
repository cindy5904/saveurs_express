import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"

const Layout = ({ footer }) => {
    return (
        <>
            <Header />
            <Outlet />
            {(footer) ? <Footer /> : <></>}

        </>
    )
}

export default Layout