import style from '../scss/Features.module.scss'
import { useDispatch } from 'react-redux'
import { setFeaturesPosAction } from '../store/sitePosReducer'
import { useEffect, useRef } from 'react'

import modes from '../img/features/ld-modes_icon.svg'
import achievements from '../img/features/achivments_icon.svg'
import sounds from '../img/features/sounds_icon.svg'
import widgets from '../img/features/widgets_icon.svg'
import history from '../img/features/history_icon.svg'
import notification from '../img/features/noticication_icon.svg'
import sync from '../img/features/sync_icon.svg'
import activity from '../img/features/activity_icon.svg'
import animations from '../img/features/animations_icon.svg'
import pots from '../img/features/pots_icon.svg'
import languages from '../img/features/languages_icon.svg'
import plants from '../img/features/plants_icon.svg'

const Features = () => {

    const dispatch = useDispatch()

    const ref = useRef(null)

    useEffect(() => {
        const featuresOffsetTop = ref.current
        dispatch(setFeaturesPosAction(featuresOffsetTop.offsetTop))
    }, [])


    return (
        <div id='features' className={style.features} ref={ref}>
            <div className="container">
                <div className={style.features__inner}>
                    <div className={style.features__more}>
                        <div className={style.features__title}>
                            And more other features
                        </div>
                        <div className={style.features__subtitle}>
                            Explore Aqua Pal's other great features that will help you meet your daily hydration goal. The ultimate water tracker app!
                        </div>
                        <div className={style.features__moreList}>
                            <div className={style.features__element}>
                                <img src={modes} alt="Light and Dark modes" />
                                Light and Dark modes
                            </div>
                            <div className={style.features__element}>
                                <img src={achievements} alt="Achievements" />
                                Achievements
                            </div>
                            <div className={style.features__element}>
                                <img src={sounds} alt="Nice sounds" />
                                Nice sounds
                            </div>
                            <div className={style.features__element}>
                                <img src={widgets} alt="Hydration widgets" />
                                Hydration widgets
                            </div>
                            <div className={style.features__element}>
                                <img src={history} alt="History log" />
                                History log
                            </div>
                            <div className={style.features__element}>
                                <img src={notification} alt="Smart notifications" />
                                Smart notifications
                            </div>
                            <div className={style.features__element}>
                                <img src={sync} alt="Synchronizing devices" />
                                Synchronizing devices
                            </div>
                            <div className={style.features__element}>
                                <img src={activity} alt="Live Activity" />
                                Live Activity
                            </div>
                            <div className={style.features__element}>
                                <img src={animations} alt="Pretty animations" />
                                Pretty animations
                            </div>
                        </div>
                    </div>
                    <div className={style.features__soon}>
                        <div className={style.features__title}>
                            Coming soon
                        </div>
                        <div className={style.features__soonList}>
                            <div className={style.features__element}>
                                <img src={achievements} alt="More achievements" />
                                More achievements
                            </div>
                            <div className={style.features__element}>
                                <img src={pots} alt="New pots" />
                                New pots
                            </div>
                            <div className={style.features__element}>
                                <img src={languages} alt="More languages" />
                                More languages
                            </div>
                            <div className={style.features__element}>
                                <img src={plants} alt="New plants" />
                                New plants
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features