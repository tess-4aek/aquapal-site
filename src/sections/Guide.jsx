import style from '../scss/Guide.module.scss'
import { useDispatch } from 'react-redux'
import { useEffect, useRef } from 'react'
import { setGuidePosAction } from '../store/sitePosReducer'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import { Parallax } from 'react-parallax';

import sky from '../img/sky-dynamic_footage.png'
import phone1 from '../img/guide/guide_phone-1.png'
import phone2 from '../img/guide/guide_phone-2.png'
import phone3 from '../img/guide/guide_phone-3.png'
import background from '../img//guide/guide_back.png'
import background_m from '../img//guide/guide_back_mobile.png'

const Guide = () => {

    const dispatch = useDispatch()

    const ref = useRef(null)

    useEffect(() => {
        const guideOffsetTop = ref.current
        dispatch(setGuidePosAction(guideOffsetTop.offsetTop))
    }, [])


    return (
        <div className={style.guideWrapper} ref={ref}>
            <Parallax bgImage={window.innerWidth > 720 ? background : background_m} strength={200}>
                <div className={style.guide}>
                    <div className="container">
                        <div className={style.guide__inner}>
                            <img src={sky} alt="I believe I can fly" className={style.guide__sky} />
                            <div className={style.guide__title}>
                                <AnimationOnScroll animateOnce={true} animateIn="animate__fadeIn" style={{ animationDuration: '.5s' }}>
                                    Drink water and <br /> Grow your plant
                                </AnimationOnScroll>
                            </div>
                            <div className={style.guide__text}>
                                <AnimationOnScroll animateOnce={true} animateIn="animate__fadeIn" style={{ animationDuration: '1s' }}>
                                    Tracking water in its basic stages:Drink water at a set time, record it in the app and follow the evolution of your plant
                                </AnimationOnScroll>
                            </div>
                            <div className={style.guide__demos}>
                                <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInUp" style={{ animationDuration: '.5s' }}>
                                    <img src={phone1} alt="Drink" />
                                </AnimationOnScroll>
                                <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInUp" style={{ animationDuration: '1s' }}>
                                    <img src={phone2} alt="Grow" />
                                </AnimationOnScroll>
                                <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInUp" style={{ animationDuration: '1.5s' }}>
                                    <img src={phone3} alt="Stay healthy" />
                                </AnimationOnScroll>
                            </div>
                        </div>
                    </div>
                </div>
            </Parallax>
        </div>
    )
}

export default Guide