import React from 'react'
import './Sidebar.css'
function SidebarItem({title}) {
    return (
        <div className='sidebar-item'>
            <div className="sidebar-item-name">
                {title}
            </div>
            
        </div>
    )
}

export default SidebarItem
