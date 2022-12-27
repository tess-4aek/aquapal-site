import style from '../scss/Progress.module.scss'
import { useDispatch } from 'react-redux'
import { setProgressPosAction } from '../store/sitePosReducer'
import { useEffect, useRef } from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll'

import phone1 from '../img/progress/progress_phone-1.png'
import phone2 from '../img/progress/progress_phone-2.png'
import background from '../img/progress/progress_back.png'
import background_m from '../img/progress/progress_back_mobile.png'
import Clouds from '../components/Clouds/Clouds'
import Parallax from '../components/Parallax/Parallax'

const Progress = () => {

    const dispatch = useDispatch()

    const ref = useRef(null)

    useEffect(() => {
        const progressOffsetTop = ref.current
        dispatch(setProgressPosAction(progressOffsetTop.offsetTop))
    }, [])


    return (
        <div className={style.progressWrapper} ref={ref}>
            <Parallax img={window.innerWidth > 720 ? background : background_m} height={'auto'}>
                <div className={style.progress}>
                    <div className="container">
                        <div className={style.progress__inner}>
                            <Clouds />
                            <div className={style.progress__phones}>
                                <div className={style.progress__phone1}>
                                    <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInLeft" style={{ animationDuration: '1s' }}>
                                        <img src={phone1} alt="Your statistic" />
                                    </AnimationOnScroll>
                                </div>
                                <div className={style.progress__phone2}>
                                    <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInLeft" style={{ animationDuration: '1.5s' }}>
                                        <img src={phone2} alt="Your history" />
                                    </AnimationOnScroll>
                                </div>
                            </div>
                            <div className={style.progress__content}>
                                <div className={style.progress__title}>
                                    <AnimationOnScroll animateOnce={true} animateIn="animate__fadeIn" style={{ animationDuration: '.5s' }}>
                                        Track Your Progress, Achieve Goals
                                    </AnimationOnScroll>
                                </div>
                                <div className={style.progress__text}>
                                    <AnimationOnScroll animateOnce={true} animateIn="animate__fadeIn" style={{ animationDuration: '1s' }}>
                                        Analyse your hydration progress. <br />
                                        Aqua Pal is an application that is aimed at constantly renewing the water balance. Set a goal and track your daily water intake. In order to conduct a complete analysis, review previous data.
                                    </AnimationOnScroll>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Parallax>
        </div>
    )
}

export default Progress