import React from 'react'
import style from './Button.module.css'
const Button = props => {
  return <button className={`${props.className === 'left' ? style['btn-left'] : ''} ${props.className === 'right' ? style['btn-right'] : ''} ${style.btn}`}>{props.children}</button>
}

export default Button