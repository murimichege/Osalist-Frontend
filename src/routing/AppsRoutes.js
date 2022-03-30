import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Intro from '../components/intro/Intro'
import ProductKey from '../components/productkey/ProductKey'
import Login from '../components/Authentication/Login'
import CreateProfile from '../components/Authentication/Register'

function AppRoutes() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" exact element={<Intro/>}/>
            <Route path="/ProductKey" element = {<ProductKey/>}/>
            <Route path ="/login" element={<Login/>}/>
            <Route path ="/register" element={<CreateProfile/>}/>
            
        </Routes>

        </BrowserRouter>
       
    )
}

export default AppRoutes
