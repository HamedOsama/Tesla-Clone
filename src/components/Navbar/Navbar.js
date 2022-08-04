import React from 'react'
import style from './Navbar.module.css'
import logo from '../../images/tesla-logo.svg'
import MenuItems from './MenuItems'
import RightMenu from './RightMenu'
const Navbar = () => {
  return (
    <div className={style.header}>
      <div className="logo">
        {/* <img src={logo} alt="logo" /> */}
        <img src='./images/logo.svg' alt="logo" />
      </div>
      <MenuItems />
      <RightMenu />
    </div>
  )
}

export default Navbar