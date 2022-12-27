import style from '../scss/AddWater.module.scss'
import { useDispatch } from 'react-redux'
import { useEffect, useRef } from 'react'
import { setAddWaterPosAction } from '../store/sitePosReducer'
import { AnimationOnScroll } from 'react-animation-on-scroll'

import appleWatch from '../img/add-water/add-water_apple-watch.png'
import phone from '../img/add-water/add-water_phone.png'

const AddWater = () => {

    const dispatch = useDispatch()

    const ref = useRef()

    useEffect(() => {
        const addWaterOffsetTop = ref.current
        dispatch(setAddWaterPosAction(addWaterOffsetTop.offsetTop))
    }, [])

    return (
        <div className={style.addWater} ref={ref}>
            <div className="container">
                <div className={style.addWater__inner}>
                    <div className={style.addWater__content}>
                        <div className={style.addWater__title}>
                            <AnimationOnScroll animateOnce={true} animateIn="animate__fadeIn" style={{ animationDuration: '.5s' }}>
                                Flexible water <br /> addition system
                            </AnimationOnScroll>
                        </div>
                        <div className={style.addWater__text}>
                            <AnimationOnScroll animateOnce={true} animateIn="animate__fadeIn" style={{ animationDuration: '1s' }}>

                                Add water in different volumes: system-calculated optimal amount, manually or by sips, if you do not know the volume of the glass from which you drink. For effective water intake, choose a convenient device and track your water rate.                            </AnimationOnScroll>
                        </div>
                    </div>
                    <div className={style.addWater__images}>
                        <div className={style.addWater__watch}>
                            <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInLeft" style={{ animationDuration: '1.5s' }}>
                                <img src={appleWatch} alt="Add water with watches" />
                            </AnimationOnScroll>
                        </div>
                        <div className={style.addWater__phone}>
                            <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInRight" style={{ animationDuration: '1s' }}>
                                <img src={phone} alt="Add water with smartphone" />
                            </AnimationOnScroll>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddWater