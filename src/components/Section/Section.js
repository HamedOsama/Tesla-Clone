import React from 'react'
import Button from '../UI/Button'
import style from './Section.module.css'
import SectionInfo from './SectionInfo'
// import Fade from 'react-reveal/Fade';
import { Fade } from "react-awesome-reveal";
const Section = props => {
  const windowSize = window.innerWidth;
  const delay = props.first ? 1000 : '';
  return (
    <div className={style.section} style={{ backgroundImage: `url(./images/${props.backgroundImage})` }}>
      <SectionInfo title={props.title} linkDes={props.linkDes} animationDelay={delay}>{props.description}</SectionInfo>
      <div className={style.buttons}>
        <div className={`${style['btn-group']} ${props.first ? style.first__section : ''}`}>
          <Fade direction={windowSize > 578 ? 'left' : 'up'} delay={delay} triggerOnce>
            <Button className={props.rightButton ? 'left' : ''}>{props.leftButton}</Button>
          </Fade>
          {props.rightButton &&
            <Fade direction={windowSize > 578 ? 'right' : 'up'} delay={delay} triggerOnce>
              <Button className="right">{props.rightButton}</Button>
            </Fade>}
        </div>
        {props.first &&
          <Fade direction="down" delay={delay} triggerOnce	>
            <div className="down">
              <img className={style['down-arrow']} src="./images/down-arrow-2.svg" alt="" />
            </div>
          </Fade>
        }
      </div>
    </div>
  )
}

export default Section