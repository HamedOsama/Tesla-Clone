import React, { Fragment } from 'react'
import Button from '../UI/Button'
import style from './Section.module.css'
import SectionInfo from './SectionInfo'
import { Fade } from "react-awesome-reveal";
import { useInView } from 'react-intersection-observer'
const Section = props => {
  const windowSize = window.innerWidth;
  const delay = props.first ? 1000 : '';
  const { ref: myRef, inView: myElementIsVisible, entry: testing } = useInView({ threshold: [0, 0.25, 0.5, 0.75, 1] })
  console.log(testing)
  return (
    <div className={style.section} style={{ backgroundImage: `url(./images/${props.backgroundImage})` }}>
      <div ref={myRef} style={{ opacity: testing.intersectionRatio }}>
        <SectionInfo title={props.title} linkDes={props.linkDes} animationDelay={delay}>{props.description}
        </SectionInfo>
      </div>

      <div className={style.buttons} ref={myRef} style={{ opacity: myElementIsVisible ? 1 : 0 }}>

        <div className={`${style['btn-group']} ${props.first ? style.first__section : ''}`}>
          <Fade direction={windowSize > 578 && props.rightButton ? 'left' : 'up'} delay={delay} triggerOnce>
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