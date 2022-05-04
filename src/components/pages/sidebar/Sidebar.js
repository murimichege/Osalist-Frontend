import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../../../icons/logo.png'
import './Sidebar.css'
import { sideitems } from './Sideitems'
import SidebarItem from './SidebarItem'
function Sidebar() {
    return (
        <div className='sidebar-container'>
            <div className='logo'>
                <img src={logo} alt=""/>


            </div>
                {
                    sideitems.map((item, index) => (
                        <Link to ={ item.route} key={index} style={{ textDecoration: 'none' }}>
                            <SidebarItem 
                            title={item.name}
                            />
                            
                        </Link>

                    ))
                }
                
               
            </div>
    )
}

export default Sidebar
