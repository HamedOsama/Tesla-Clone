import React from 'react'
import style from './MenuItems.module.css'
const RightMenu = props => {
  return (
    <ul className={style.menu}>
      <li><a href='#1'>Shop</a></li>
      <li><a href='#1'>Account</a></li>
      <li onClick={props.openSidebarHandler}><a href='#1'>Menu</a></li>
    </ul>
  )
}

export default RightMenu