import style from '../scss/Wave.module.scss'
import { useDispatch } from 'react-redux'

import appStore from '../img/app-store_btn.svg'
import playMarket from '../img/play-market_btn.svg'
import { setWavePosAction } from '../store/sitePosReducer'
import { useEffect, useRef } from 'react'

const Wave = () => {

    const dispatch = useDispatch()

    const ref = useRef(null)

    useEffect(() => {
        const waveOffsetTop = ref.current
        dispatch(setWavePosAction(waveOffsetTop.offsetTop))
    }, [])


    return (
        <div className={style.wave} ref={ref}>
            <div className={style.wave__bubbles}>
                <ul>
                <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            <div className={style.wave__wrapper}>

                <div className={style.wave__title}>Refresh your Life!</div>
                <div className={style.wave__subtitle}>Now is the best time to start drink water</div>
                <div className={style.wave__links}>
                    <a href="#">
                        <img src={appStore} alt="Download from App Store" style={window.innerWidth < 720 ? { width: '135px' } : { width: 'auto' }} />
                    </a>
                    <a href="#">
                        <img src={playMarket} alt="Download from Play Market" style={window.innerWidth < 720 ? { width: '135px' } : { width: 'auto' }} />
                    </a>
                </div>

            </div>
        </div>
    )
}

export default Wave