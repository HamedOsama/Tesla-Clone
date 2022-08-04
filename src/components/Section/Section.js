import React from 'react'
import Button from '../UI/Button'
import style from './Section.module.css'
import SectionInfo from './SectionInfo'
import Fade from 'react-reveal/Fade';
const Section = props => {
  return (
    <div className={style.section} style={{ backgroundImage: `url(./images/${props.backgroundImage})` }}>
      <Fade bottom>
        <SectionInfo title={props.title} linkDes={props.linkDes}>{props.description}</SectionInfo>
      </Fade>
      <div className="buttons">
        <div className={style['btn-group']}>
          <Fade left>
            <Button className={props.rightButton ? 'left' : ''}>{props.leftButton}</Button>
          </Fade>
          <Fade right>
            {props.rightButton && <Button className="right">{props.rightButton}</Button>}
          </Fade>
        </div>
        <Fade top>
          <div className="down">
            <img className={style['down-arrow']} src="./images/down-arrow.svg" alt="" />
          </div>
        </Fade>
      </div>
    </div>
  )
}

export default Section