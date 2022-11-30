import style from '../scss/Progress.module.scss'
import { useDispatch } from 'react-redux'
import { setProgressPosAction } from '../store/sitePosReducer'
import { useEffect, useRef } from 'react'

import sky from '../img/sky-dynamic_footage.png'
import phone1 from '../img/progress/progress_phone-1.png'
import phone2 from '../img/progress/progress_phone-2.png'

const Progress = () => {

    const dispatch = useDispatch()

    const ref = useRef(null)

    useEffect(() => {
        const progressOffsetTop = ref.current
        dispatch(setProgressPosAction(progressOffsetTop.offsetTop))
    }, [])

    
    return (
        <div className={style.progressWrapper} ref={ref}>
            <div className={style.progress}>
                <div className="container">
                    <div className={style.progress__inner}>
                        <img src={sky} alt="I believe I can fly" className={style.progress__sky} />
                        <div className={style.progress__phones}>
                            <img src={phone1} alt="Your statistic" className={style.progress__phone1} />
                            <img src={phone2} alt="Your history" className={style.progress__phone2} />
                        </div>
                        <div className={style.progress__content}>
                            <div className={style.progress__title}>Track Your Progress, Achieve Goals</div>
                            <div className={style.progress__text}>Monitor your hydration progress.
                                Aqua Pal makes it fast and easy to set your hydration goal and then track your daily water intake progress. You can also view previous dates with a simple tap.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Progress