import React from 'react'
import style from './SectionInfo.module.css'
import { Fade } from "react-awesome-reveal";
const SectionInfo = props => {
  return (
    <div className={style['info-container']}>
      <Fade direction='up' triggerOnce>
        <h1 className={style.header}>{props.title}</h1>
      </Fade>
      <Fade direction='up' delay={props.animationDelay} triggerOnce>
        <p>{props.children}<a href={props.link || '#'}>{props.linkDes || ''}</a></p>
      </Fade>
    </div>
  )
}

export default SectionInfo