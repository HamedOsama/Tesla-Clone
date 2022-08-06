import React from 'react'
import style from './MenuItems.module.css'
const MenuItems = props => {
  return (
    <ul className={`${style.menu} ${style.middle__menu}`}>
      {props.products &&
        props.products.map((el, i) => {
          return <li key={i}><a href={`#${el}`}>{el}</a></li>
        })}
    </ul>
  )
}

export default MenuItems