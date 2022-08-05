import React, { useState } from 'react'
import style from './Navbar.module.css'
import logo from '../../images/tesla-logo.svg'
import MenuItems from './MenuItems'
import RightMenu from './RightMenu'
import SideBar from '../SideBar/SideBar'
import Overlay from '../UI/Overlay'
import { selectCars } from '../../features/car/carSlice'
import { useSelector } from 'react-redux'
const Navbar = () => {
  const [sidebarOpen, setSidebar] = useState(false);
  const openSidebarHandler = () => setSidebar(true);
  const closeSidebarHandler = () => setSidebar(false);
  const cars = useSelector(selectCars);
  console.log(cars)
  return (
    <div className={style.navbar}>
      <div className={style.logo}>
        <img src={logo} alt="logo" />
        {/* <img src='./images/logo.svg' alt="logo" /> */}
      </div>
      <MenuItems products={cars} />
      <RightMenu openSidebarHandler={openSidebarHandler} />
      <SideBar products={cars} closeSidebarHandler={closeSidebarHandler} className={sidebarOpen ? 'active' : ''} />
      {sidebarOpen && <Overlay onClick={closeSidebarHandler} />}
    </div>
  )
}

export default Navbar