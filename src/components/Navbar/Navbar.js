import React, { useState } from 'react'
import style from './Navbar.module.css'
import logo from '../../images/tesla-logo.svg'
import MenuItems from './MenuItems'
import RightMenu from './RightMenu'
import SideBar from '../SideBar/SideBar'
import Overlay from '../UI/Overlay'
import { selectProducts } from '../../features/product/productSlice'
import { selectOptions } from '../../features/option/optionSlice'
import { useSelector } from 'react-redux'
const Navbar = () => {
  const [sidebarOpen, setSidebar] = useState(false);
  const openSidebarHandler = () => setSidebar(true);
  const closeSidebarHandler = () => setSidebar(false);
  const products = useSelector(selectProducts);
  const options = useSelector(selectOptions);
  return (
    <div className={style.navbar}>
      <div className={style.logo}>
        <img src={logo} alt="logo" />
      </div>
      <MenuItems products={products} />
      <RightMenu options={options} openSidebarHandler={openSidebarHandler} />
      <SideBar products={products} options={options} closeSidebarHandler={closeSidebarHandler} className={sidebarOpen ? 'active' : ''} />
      {sidebarOpen && <Overlay onClick={closeSidebarHandler} />}
    </div>
  )
}

export default Navbar