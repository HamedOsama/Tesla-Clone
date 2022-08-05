import React from 'react'
import style from './Overlay.module.css'
const Overlay = props => {
  return (
    <div onClick={props.onClick} className={style.overlay}></div>
  )
}
export default Overlay