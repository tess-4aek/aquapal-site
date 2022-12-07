import style from '../scss/Knows.module.scss'
import { useDispatch } from 'react-redux'
import { useEffect, useRef } from 'react'
import { setKnowsPosAction } from '../store/sitePosReducer'
import { AnimationOnScroll } from 'react-animation-on-scroll'

import sky from '../img/sky-dynamic_footage.png'
import phone1 from '../img/knows/knows_phone-1.png'
import phone2 from '../img/knows/knows_phone-2.png'

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
                        <img src={sky} alt="I believe I can fly" className={style.knows__sky} />
                        <div className={style.knows__phones}>
                            <div className={style.knows__phone1}>
                                <img src={phone1} alt="Your daily goal" />
                            </div>
                            <div className={style.knows__phone2}>
                                <img src={phone2} alt="Choose ml" />
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