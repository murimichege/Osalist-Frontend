import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Intro from '../components/intro/Intro'




function AppRoutes() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" exact element={<Intro/>}/>
            <Route/>
            <Route/>
            <Route/>
            
        </Routes>

        </BrowserRouter>
       
    )
}

export default AppRoutes
