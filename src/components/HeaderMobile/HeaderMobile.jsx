import style from './HeaderMobile.module.scss'
import { useRef, useState } from 'react'
import scrollLock from 'scroll-lock';
import Contacts from '../Contacts/Contacts'

import Logo from '../Logo/Logo'

import appStore from '../../img/app-store_btn.svg'
import playMarket from '../../img/play-market_btn.svg'
import BurgerMenu from '../BurgerMenu/BurgerMenu';


const HeaderMobile = () => {

    const [menuState, setMenuState] = useState(false)

    const menuList = useRef(null)


    const top = useRef(null)
    const bottom = useRef(null)

    const toggleMenuState = () => {

        if (menuState === true) {
            setMenuState(false)
            top.current.classList.toggle(style.menu__top_click)
            bottom.current.classList.toggle(style.menu__bottom_click)
            menuList.current.classList.toggle(style._active)
            scrollLock.enablePageScroll()
        } else {
            setMenuState(true)
            top.current.classList.toggle(style.menu__top_click)
            bottom.current.classList.toggle(style.menu__bottom_click)
            menuList.current.classList.toggle(style._active)
            scrollLock.disablePageScroll()
        }
    }

    return (
        <div className={style.headerMobile}>
            <div className="container">
                <div className={style.headerMobile__inner}>
                    <Logo />
                    <div className={style.menu} onClick={toggleMenuState}>
                        <span className={`${style.menu__global} ${style.menu__top}`} ref={top}></span>
                        <span className={`${style.menu__global} ${style.menu__bottom}`} ref={bottom}></span>
                    </div>
                    {/* <BurgerMenu state={menuState} list={menuList} /> */}
                    <nav className={style.headerMobile__navigation} ref={menuList}>
                        <ul>
                            <li onClick={toggleMenuState}><a href="#home">Home</a></li>
                            <li onClick={toggleMenuState}><a href="#about">About</a></li>
                            <li onClick={toggleMenuState}><a href="#features">Features</a></li>
                            <li onClick={toggleMenuState}><a href="#team">Team</a></li>
                            <li onClick={toggleMenuState}><a href="#reviews">Reviews</a></li>
                        </ul>
                        <div className={style.headerMobile__contactsWrapper}>
                            <Contacts />
                        </div>
                        <div className={style.headerMobile__links}>
                            <a href="#">
                                <img src={appStore} alt="Download from App Store" />
                            </a>
                            <a href="#">
                                <img src={playMarket} alt="Download from Play Market" />
                            </a>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default HeaderMobile