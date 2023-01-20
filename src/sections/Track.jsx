import style from '../scss/Track.module.scss'
import { useDispatch } from 'react-redux'
import { setTrackPosAction } from '../store/sitePosReducer'
import { useEffect, useRef } from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll'

import appleWatch1 from '../img/track/track_apple-watch-1.webp'
import appleWatch2 from '../img/track/track_apple-watch-2.webp'
import phone from '../img/track/track_phone.webp'

const Track = () => {

    const dispatch = useDispatch()

    const ref = useRef(null)

    useEffect(() => {
        const trackOffsetTop = ref.current
        dispatch(setTrackPosAction(trackOffsetTop.offsetTop))
    }, [])

    const track = useRef()

    return (
        <div className={style.track} ref={ref}>
            <div className="container">
                <div className={style.track__inner}>
                    <div className={style.track__content}>
                        <div className={style.track__title}>
                            <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInDown">
                                Track and synchronize <br /> your hydration <br /> on different devices
                            </AnimationOnScroll>
                        </div>
                        <div className={style.track__devicesList}>
                            <div className={style.track__device}>
                                Android
                            </div>
                            <div className={style.track__device}>
                                iOS
                            </div>
                            <div className={style.track__device}>
                                Apple Watch
                            </div>
                        </div>
                        <div className={style.track__text}>
                            <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInUp">
                                Log your drinks, no matter where you are or what you're doing. Choose any platform and convenient device to make your water intake as efficient as possible.
                            </AnimationOnScroll>
                        </div>
                    </div>
                    <div className={style.track__images}>
                        <div className={style.track__watch1}>
                            <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInLeft" style={{ animationDuration: '.5s' }}>
                                <img src={appleWatch1} alt="Add water with watches" />
                            </AnimationOnScroll>
                        </div>
                        <div className={style.track__phone}>
                            <img src={phone} alt="Add water with smartphone" />
                        </div>
                        <div className={style.track__watch2}>
                            <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInRight" style={{ animationDuration: '1s' }}>
                                <img src={appleWatch2} alt="Daily Goal" />
                            </AnimationOnScroll>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Track