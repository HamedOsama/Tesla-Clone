import React from 'react'
import style from './SectionInfo.module.css'
const SectionInfo = props => {
  return (
    <div className={style['info-container']}>
      <h1 className={style.header}>{props.title}</h1>
      <p>{props.children}<a href={props.link || '#'}>{props.linkDes || ''}</a></p>
    </div>
  )
}

export default SectionInfo