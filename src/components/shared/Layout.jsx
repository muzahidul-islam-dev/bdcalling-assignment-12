import React from 'react'
import Nav from './Nav'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

function Layout() {
    return (
        <div>
            <Nav />
            <main id="main-content">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default Layout
