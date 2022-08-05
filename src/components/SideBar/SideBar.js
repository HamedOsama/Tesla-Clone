import React from 'react'
import CloseWrapper from '../UI/CloseWrapper'
import style from './Sidebar.module.css'
const SideBar = props => {
  console.log(props.className)
  return (
    <div className={`${style.container} ${style[props.className]}`}>
      <CloseWrapper onClick={props.closeSidebarHandler} />
      <ul className={style.sidebar}>
        <li><a href="#tesla">Existing Inventory</a></li>
        <li><a href="#tesla">Used Inventory</a></li>
        <li><a href="#tesla">Trade-In</a></li>
        <li><a href="#tesla">Test Drive</a></li>
        <li><a href="#tesla">Insurance</a></li>
        <li><a href="#tesla">PowerWall</a></li>
        <li><a href="#tesla">Commercial Energy</a></li>
        <li><a href="#tesla">Utilities</a></li>
        <li><a href="#tesla">Charging</a></li>
        <li><a href="#tesla">Find Us</a></li>
        <li><a href="#tesla">Support</a></li>
        <li><a href="#tesla">Investor Relations</a></li>
        <li><a href="#tesla">shop</a></li>
        <li><a href="#tesla">Account</a></li>
        <li><a href="#tesla">More</a></li>
        <li><a href="#tesla">More</a></li>
        <li><a href="#tesla">More</a></li>
        <li><a href="#tesla">More</a></li>
      </ul>
    </div>
  )
}

export default SideBar