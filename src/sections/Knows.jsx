import style from '../scss/Knows.module.scss'
import { useDispatch } from 'react-redux'
import { useEffect, useRef } from 'react'
import { setKnowsPosAction } from '../store/sitePosReducer'
import { AnimationOnScroll } from 'react-animation-on-scroll'

import phone1 from '../img/knows/knows_phone-1.webp'
import phone2 from '../img/knows/knows_phone-2.webp'

import Clouds from '../components/Clouds/Clouds'

const Knows = () => {

    const dispatch = useDispatch()

    const ref = useRef(null)

    useEffect(() => {
        const knowsOffsetTop = ref.current
        dispatch(setKnowsPosAction(knowsOffsetTop.offsetTop))
    }, [])

    return (
        <div className={style.knowsWrapper}>
            <div className={style.knows} ref={ref}>
                <div className="container">
                    <div className={style.knows__inner}>
                        <Clouds />
                        <div className={style.knows__phones}>
                            <div className={style.knows__phone1}>
                                <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInLeft" style={{ animationDuration: '1.5s' }}>
                                    <img src={phone1} alt="Your daily goal" />
                                </AnimationOnScroll>
                            </div>
                            <div className={style.knows__phone2}>
                                <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInLeft" style={{ animationDuration: '1s' }}>
                                    <img src={phone2} alt="Choose ml" />
                                </AnimationOnScroll>
                            </div>
                        </div>
                        <div className={style.knows__content}>
                            <AnimationOnScroll animateOnce={true} animateIn="animate__fadeIn" style={{ animationDuration: '1s' }}>
                                <div className={style.knows__title}>Aqua Pal knows You inside out</div>
                            </AnimationOnScroll>
                            <AnimationOnScroll animateOnce={true} animateIn="animate__fadeIn" style={{ animationDuration: '1.5s' }}>
                                <div className={style.knows__text}>We calculate your daily water intake according to your weight and gender, based on research by the US National Academy of Engineering and Medicine: Dietary Reference Intakes for Water, Potassium, Sodium, Chloride, and Sulfate</div>
                            </AnimationOnScroll>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Knows