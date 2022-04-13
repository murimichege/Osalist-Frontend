import React from 'react'
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import Sidebar from '../../components/pages/sidebar/Sidebar'
import TopNav from '../pages/TopNav/TopNav'
import AppRoutes from '../../routing/AppsRoutes'
function Layout() {
    return (
        <Router>
        <Route render={(props) => (
            <div className="">
                <Sidebar/>
                <div className="layout__content">
                    <TopNav/>
                    <div className="layout__content-main">
                        <AppRoutes/>
                    </div>
                </div>
            </div>
        )}/>

        </Router>
       
    )
}

export default Layout
