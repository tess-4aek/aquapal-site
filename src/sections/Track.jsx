import style from '../scss/Track.module.scss'
import appleWatch1 from '../img/track/track_apple-watch-1.png'
import appleWatch2 from '../img/track/track_apple-watch-2.png'
import phone from '../img/track/track_phone.png'

const Track = () => {
    return (
        <div className={style.track}>
            <div className="container">
                <div className={style.track__inner}>
                    <div className={style.track__content}>
                        <div className={style.track__title}>
                            Track and synchronize <br /> your hydration <br /> on different devices
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
                            Log your drinks, no matter where you are or what you're doing. Choose any platform and convenient device to make your water intake as efficient as possible.
                        </div>
                    </div>
                    <div className={style.track__images}>
                        <img src={appleWatch1} alt="Add water with watches" className={style.track__watch1} />
                        <img src={phone} alt="Add water with smartphone" className={style.track__phone} />
                        <img src={appleWatch2} alt="Daily Goal" className={style.track__watch2} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Track