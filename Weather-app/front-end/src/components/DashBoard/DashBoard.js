import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
// import HorizontalNavbar from '../../HorizontalNavbar/HorizontalNavbar'
import './DashBoard.css'
const DashBoard = () => {
  return (<>
    <header>
    <div class="nbar">
    <nav >
        <ul>
            <li class="nav-list">
                <NavLink to='/weather' className='st-option'>
                    {/* <i class="fa-solid fa-clipboard fa-2x fas"></i> */}
                    <i class="fa-solid fa-cloud fa-2x fas"></i>
                    <span class="nav-item">Current Weather</span>
                </NavLink> 
            </li>
            <li class="nav-list">
                <NavLink to='/forecast'>
                    <i class="fa-solid fa-triangle-exclamation fa-2x fas"></i>
                    <span class="nav-item">Weather Forecast</span>
                </NavLink>
            </li>
        </ul>
    </nav>
</div>
</header>
{/* <HorizontalNavbar/> */}
{/* ! scorecard and requests are coming from the outlet when the nested child routes are being hit */}
<Outlet/>
</>
  )
}

export default DashBoard