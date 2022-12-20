import style from './HeaderMobile.module.scss'
import { useRef, useState } from 'react'
import scrollLock from 'scroll-lock';
import Contacts from '../Contacts/Contacts'

import Logo from '../Logo/Logo'

import appStore from '../../img/app-store_btn.svg'
import playMarket from '../../img/play-market_btn.svg'


const HeaderMobile = () => {

    const [menuState, setMenuState] = useState(false)

    const menu = useRef(null)
    const menuList = useRef(null)
    scrollLock.disablePageScroll()
    console.log(scrollLock.getScrollState());
    const toggleMenuState = () => {
        if (menuState === true) {
            setMenuState(false)
            menu.current.classList.toggle(style._active)
            menuList.current.classList.toggle(style._active)
            scrollLock.enablePageScroll()
        } else {
            setMenuState(true)
            menu.current.classList.toggle(style._active)
            menuList.current.classList.toggle(style._active)
            scrollLock.disablePageScroll()
        }
    }

    return (
        <div className={style.headerMobile} id="home">
            <div className="container">
                <div className={style.headerMobile__inner}>
                    <Logo />
                    <div onClick={toggleMenuState} className={style.headerMobile__burgerMenu} ref={menu}>
                        <div className={style.headerMobile__burgerMenu_element1}></div>
                        <div className={style.headerMobile__burgerMenu_element2}></div>
                    </div>
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