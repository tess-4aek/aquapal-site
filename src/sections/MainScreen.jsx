import style from '../scss/MainScreen.module.scss'
import flag from '../img/ukrainian-flag_icon.png'
import appStore from '../img/app-store_btn.svg'
import playMarket from '../img/play-market_btn.svg'
import Header from '../components/Header/Header'

const MainScreen = () => {
    return (<div className={style.mainScreenWrapper}>
        <Header />
        <div className={style.mainScreen}>
            <div className="container">
                <div className={style.mainScreen__inner}>
                    <div className={style.mainScreen__subtitle}>
                        Water Tracker app
                    </div>
                    <div className={style.mainScreen__title}>
                        Track your daily water intake with Aqua Pal!
                    </div>
                    <div className={style.mainScreen__madeBy}>
                        <img src={flag} alt="Stand with Ukraine" />
                        made by ukrainian team
                    </div>
                    <div className={style.mainScreen__links}>
                        <a href="#">
                            <img src={appStore} alt="Download from App Store" />
                        </a>
                        <a href="#">
                            <img src={playMarket} alt="Download from Play Market" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    )
}

export default MainScreen