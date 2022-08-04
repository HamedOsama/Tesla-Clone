import React from 'react'
import style from './MenuItems.module.css'
const MenuItems = () => {
  return (
    <ul className={`${style.menu} ${style.middle__menu}`}>
      <li><a href='#1'>Model S</a></li>
      <li><a href='#1'>Model 3</a></li>
      <li><a href='#1'>Model X</a></li>
      <li><a href='#1'>Model Y</a></li>
      <li><a href='#1'>Solar Roof</a></li>
      <li><a href='#1'>Solar Panels</a></li>
    </ul>
  )
}

export default MenuItems