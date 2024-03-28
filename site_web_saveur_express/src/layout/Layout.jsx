import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"
import { useState } from "react";


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