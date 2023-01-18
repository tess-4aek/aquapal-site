import style from './LinksFixed.module.scss'
import Logo from '../Logo/Logo'
import appStore from '../../img/app-store_btn.svg'
import playMarket from '../../img/play-market_btn.svg'
import { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import {getBrowser} from '../../assets/getBrowser.js'

const LinksFixed = () => {

    const linksWrapper = useRef()
    const links = useRef()

    const pos = useSelector(state => state.pos)

    const [browserSafari, setBrowserSafari] = useState(false);

    useEffect(() => {
        let browser = getBrowser()
        setBrowserSafari(browser.isSafari)
        if (browserSafari) stylesForBrowserSafari()
        console.log(browserSafari)
    }, [browserSafari]);


    const stylesForBrowserSafari = () => {
        links.current.classList.add(style.safariStyles)
    }

    window.onscroll = function () {
        // console.log(window.scrollY + window.innerHeight)

        let windowScrollPos = window.scrollY + window.innerHeight

        if (
            windowScrollPos <= (linksWrapper.current.offsetTop)
            && links.current.classList.contains(style.linksFixed_fixed)) {
            links.current.classList.add(`${style.linksFixed_animationEnd}`)
            links.current.classList.remove(`${style.linksFixed_fixed}`)
        }
        else if ((windowScrollPos - links.current.clientHeight) > pos.wave) {
            links.current.classList.add(`${style.linksFixed_animationEnd}`)
            links.current.classList.remove(`${style.linksFixed_fixed}`)
        }
        else if (
            windowScrollPos > (linksWrapper.current.offsetTop)
        ) {
            links.current.classList.add(`${style.linksFixed_fixed}`)
            links.current.classList.remove(`${style.linksFixed_animationEnd}`)
        }

    }

    return (
        <div className={style.linksFixedWrapper} ref={linksWrapper}>
            <div className={style.linksFixed} ref={links}>
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