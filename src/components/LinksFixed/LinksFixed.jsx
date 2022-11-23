import style from './LinksFixed.module.scss'
import Logo from '../Logo/Logo'
import appStore from '../../img/app-store_btn.svg'
import playMarket from '../../img/play-market_btn.svg'

const LinksFixed = () => {

    // window.onscroll = () => {
    //     const linksWrapper = document.querySelector(`.${style.linksFixedWrapper}`)
    //     const links = document.querySelector(`.${style.linksFixed}`)

    //     if (window.scrollY <= (linksWrapper.offsetTop - window.innerHeight)) {
    //         links.classList.remove(`${style.linksFixed_fixed}`)
    //     } else if ((window.scrollY - links.clientHeight) > 10150) {
    //         links.classList.add(`${style.linksFixed_animationEnd}`)
    //         links.classList.remove(`${style.linksFixed_fixed}`)
    //     } else {
    //         links.classList.add(`${style.linksFixed_fixed}`)
    //         links.classList.remove(`${style.linksFixed_animationEnd}`)
    //     }
    // }

    return (
        <div className={style.linksFixedWrapper}>
            <div className={style.linksFixed}>
                <div className="container">
                    <div className={style.linksFixed__inner}>
                        <Logo />
                        <div className={style.linksFixed__links}>
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

export default LinksFixed