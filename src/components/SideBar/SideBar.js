import React from 'react'
import CloseWrapper from '../UI/CloseWrapper'
import style from './Sidebar.module.css'
const SideBar = props => {
  const windowSize = window.innerWidth;
  return (
    <div className={`${style.container} ${style[props.className]}`}>
      <CloseWrapper onClick={props.closeSidebarHandler} />
      <ul className={style.sidebar}>
        {windowSize < 1198 &&
          props.products &&
          props.products.map((el, i) => {
            return <li key={i}><a href={`#${el}`}>{el}</a></li>
          })
        }
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
        {windowSize < 1198 &&
          props.options &&
          props.options.map((el, i) => {
            return <li key={i}><a href={`#${el}`}>{el}</a></li>
          })
        }
      </ul>
    </div>
  )
}

export default SideBar