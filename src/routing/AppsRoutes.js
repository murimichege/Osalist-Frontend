import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Intro from '../components/pages/intro/Intro'
import ProductKey from '../components/pages/productkey/ProductKey'
import Login from '../components/Authentication/Login'
import CreateProfile from '../components/Authentication/Register'
import ChangePassword from '../components/Authentication/ChangePassword'
import CreateBusinessProfile from '../components/pages/BusinessProfile/CreateBusinessProfile'
import Dashboard from '../components/pages/Dashboard/Dashboard'
function AppRoutes() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" exact element={<Intro/>}/>
            <Route path="/ProductKey" element = {<ProductKey/>}/>
            <Route path ="/login" element={<Login/>}/>
            <Route path ="/register" element={<CreateProfile/>}/>
            <Route path='/ChangeCredentials' element={<ChangePassword/>}/>
            <Route path="/CreateBusinessProfile"element={<CreateBusinessProfile/>}/>
            <Route path="/Dashboard" element={<Dashboard/>} />

        </Routes>

        </BrowserRouter>
       
    )
}

export default AppRoutes
