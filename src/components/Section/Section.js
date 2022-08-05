import React from 'react'
import Button from '../UI/Button'
import style from './Section.module.css'
import SectionInfo from './SectionInfo'
import { Fade } from "react-awesome-reveal";
import { useInView } from 'react-intersection-observer'
const Section = props => {
  const windowSize = window.innerWidth;
  const delay = props.first ? 1000 : '';
  const { ref: myRef, inView: myElementIsVisible, entry: sectionEntry } = useInView({ root: null, rootMargin: '0px', threshold: [0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.5, 0.75, 0.9, 1], })
  return (
    <div className={style.section} style={{ backgroundImage: `url(./images/${props.backgroundImage})` }}>
      <div style={{ opacity: sectionEntry ? sectionEntry.intersectionRatio * 5 : 0, transform: `translateY(${sectionEntry ? sectionEntry.intersectionRatio * 30 : 0}px)` }}>
        <SectionInfo title={props.title} linkDes={props.linkDes} animationDelay={delay}>{props.description}
        </SectionInfo>
      </div>
      <div className={style.buttons} >
        <div className={`${style['btn-group']} ${props.first ? style.first__section : ''}`}>
          <div ref={myRef} className={style.btnScrollIntersectionAnimation} style={{ opacity: sectionEntry ? sectionEntry.intersectionRatio : 0, transform: `translateY(${sectionEntry ? sectionEntry.intersectionRatio * 50 : 0}px)` }}>
            <Fade direction={windowSize > 578 && props.rightButton ? 'left' : 'up'} delay={delay} >
              <Button className={props.rightButton ? 'left' : ''}>{props.leftButton}</Button>
            </Fade>
            {props.rightButton &&
              <Fade direction={windowSize > 578 ? 'right' : 'up'} delay={delay} >
                <Button className="right">{props.rightButton}</Button>
              </Fade>}
          </div>
        </div>
        {props.first &&
          <Fade direction="down" delay={delay} 	>
            <div className="down">
              <img className={style['down-arrow']} src="./images/down-arrow-2.svg" alt="" />
            </div>
          </Fade>
        }
      </div>
    </div >
  )
}

export default Section