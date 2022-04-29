import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Intro from '../components/pages/intro/Intro'
import ProductKey from '../components/pages/productkey/ProductKey'
import Login from '../components/Authentication/Login'
import CreateProfile from '../components/Authentication/Register'
import ChangePassword from '../components/Authentication/ChangePassword'
import CreateBusinessProfile from '../components/pages/BusinessProfile/CreateBusinessProfile'
import Dashboard from '../components/pages/Dashboard/Dashboard'
import Settings from '../components/pages/Dashboard/Settings/Settings'
import DateSettings from '../components/pages/Dashboard/Settings/DateSettings'
import SalesTax from '../components/pages/Dashboard/Settings/SalesTax'
import InvoiceSettings from '../components/pages/Dashboard/Settings/InvoiceSettings'
import QuotationSettings from '../components/pages/Dashboard/Settings/QuotationSettings'
import New from '../components/pages/Dashboard/New.js'
import Invoice from '../components/pages/Invoice/Invoice'
import NewInvoice from '../components/pages/Invoice/NewInvoice'
function AppRoutes() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/Intro" exact element={<Intro/>}/>
            <Route path="/ProductKey" element = {<ProductKey/>}/>
            <Route path ="/login" element={<Login/>}/>
            <Route path ="/register" element={<CreateProfile/>}/>
            <Route path='/ChangeCredentials' element={<ChangePassword/>}/>
            <Route path="/CreateBusinessProfile"element={<CreateBusinessProfile/>}/>
            <Route path="/" element={<Dashboard/>}/>
            <Route path="/Settings"  element={<Settings/>}/>
            <Route path="/DateSettings"  element={<DateSettings/>}/>
            <Route path="/InvoiceSettings"  element={<InvoiceSettings/>}/>
            <Route path="/QuotationSettings"  element={<QuotationSettings/>}/>
            <Route path="/SalesTaxSettings"  element={<SalesTax/>}/>
            <Route path="/New"  element={<New/>}/>
            <Route path="/Invoice"  element={<Invoice/>}/>
            <Route path ="/NewInvoice" element={<NewInvoice/>}/>


        </Routes>

        </BrowserRouter>
       
    )
}

export default AppRoutes
