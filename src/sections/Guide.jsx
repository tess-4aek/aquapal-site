import style from '../scss/Guide.module.scss'
import { useDispatch } from 'react-redux'
import { useEffect, useRef } from 'react'
import { setGuidePosAction } from '../store/sitePosReducer'
import { AnimationOnScroll } from 'react-animation-on-scroll'

import phone1 from '../img/guide/guide_phone-1.png'
import phone2 from '../img/guide/guide_phone-2.png'
import phone3 from '../img/guide/guide_phone-3.png'
import background from '../img//guide/guide_back.png'
import background_m from '../img//guide/guide_back_mobile.png'
import Clouds from '../components/Clouds/Clouds'
import Parallax from '../components/Parallax/Parallax'

const Guide = () => {

    const dispatch = useDispatch()

    const ref = useRef(null)

    useEffect(() => {
        const guideOffsetTop = ref.current
        dispatch(setGuidePosAction(guideOffsetTop.offsetTop))
    }, [])

    return (
        <div className={style.guideWrapper} ref={ref}>
            <Parallax
                img={window.innerWidth > 720 ? background : background_m}
                height={'auto'}>
                <div className={style.guide}>
                    <div className="container">
                        <div className={style.guide__inner}>
                            <Clouds />
                            <div className={style.guide__title}>
                                <AnimationOnScroll animateOnce={true} animateIn="animate__fadeIn" style={{ animationDuration: '.5s' }}>
                                    Drink water and <br /> Grow your plant
                                </AnimationOnScroll>
                            </div>
                            <div className={style.guide__text}>
                                <AnimationOnScroll animateOnce={true} animateIn="animate__fadeIn" style={{ animationDuration: '1s' }}>
                                    Tracking water in its basic stages: <br /> Drink water at a set time, record it in the app and follow the evolution of your plant
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