import style from '../scss/About.module.scss'
import { setAboutPosAction } from '../store/sitePosReducer'
import { useDispatch } from 'react-redux'
import { useEffect, useRef } from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll'

import phone1 from '../img/about-it/about-it_phone-1.png'
import phone2 from '../img/about-it/about-it_phone-2.png'
import phone3 from '../img/about-it/about-it_phone-3.png'



const About = () => {

    const dispatch = useDispatch()

    const ref = useRef(null)

    useEffect(() => {
        const aboutOffsetTop = ref.current
        dispatch(setAboutPosAction(aboutOffsetTop.offsetTop))
    }, [])

    const about = useRef()

    return (
        <div id='about' className={style.about} ref={ref}>
            <div className="container">
                <div className={style.about__inner}>
                    <div className={style.about__text}>
                    Aqua Pal is a Water Tracker, that allows you to track how much water you drink with a click of a button. This is just what you need to make sure you stay healthy, hydrated and energetic!
                    </div>
                    <div className={style.about__demos}>
                        <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInUp" style={{animationDuration: '.5s'}}>
                            <img src={phone1} alt="Your daily goal" />
                        </AnimationOnScroll>
                        <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInUp" style={{animationDuration: '1s'}}>
                            <img src={phone2} alt="Main screen" />
                        </AnimationOnScroll>
                        <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInUp" style={{animationDuration: '1.5s'}}>
                            <img src={phone3} alt="Your statistic" />
                        </AnimationOnScroll>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About