import React from 'react'
import style from './MenuItems.module.css'
const RightMenu = props => {
  return (
    <ul className={`${style.menu} ${style.right__menu}`}>
      {props.options &&
        props.options.map((el, i) => {
          return <li className={style.options} key={i}><a href={`#${el}`}>{el}</a></li>
        })
      }
      <li className={style.open__menu} onClick={props.openSidebarHandler}><a href='#1'>Menu</a></li>
    </ul>
  )
}

export default RightMenu