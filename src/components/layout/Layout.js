import React from 'react'
import {Route, BrowserRouter} from 'react-router-dom'
import Sidebar from '../../components/pages/sidebar/Sidebar'
import TopNav from '../pages/TopNav/TopNav'
import AppRoutes from '../../routing/AppsRoutes'
function Layout() {
    return (
        <BrowserRouter>
        <Route render={(props) => (
            <div className="">
                <Sidebar {...props}/>
                <div className="layout__content">
                    <TopNav/>
                    <div className="layout__content-main">
                        <AppRoutes/>
                    </div>
                </div>
            </div>
        )}/>
    </BrowserRouter>
    )
}

export default Layout
