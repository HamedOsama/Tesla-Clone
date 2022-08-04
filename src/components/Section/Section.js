import React from 'react'
import Button from '../UI/Button'
import style from './Section.module.css'
import SectionInfo from './SectionInfo'
console.log(style.section)
const Section = props => {
  console.log(`images/${props.backgroundImage}`)
  return (
    <div className={style.section} style={{ backgroundImage: `url(./images/${props.backgroundImage})` }}>
      <SectionInfo title={props.title} linkDes={props.linkDes}>{props.description}</SectionInfo>
      <div className="buttons">
        <div className={style['btn-group']}>
          <Button className={props.rightButton ? 'left' : ''}>{props.leftButton}</Button>
          {props.rightButton && <Button className="right">{props.rightButton}</Button>}
        </div>
        <img className={style['down-arrow']} src="./images/down-arrow.svg" alt="" />
      </div>
    </div>
  )
}

export default Section