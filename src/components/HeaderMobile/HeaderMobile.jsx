import { useRef, useState } from 'react'
import Contacts from '../Contacts/Contacts'
import Logo from '../Logo/Logo'
import style from './HeaderMobile.module.scss'


const HeaderMobile = () => {

    const [menuState, setMenuState] = useState(false)

    const menu = useRef(null)
    const menuList = useRef(null)

    const toggleMenuState = () => {
        if(menuState === true){
            setMenuState(false)
            menu.current.classList.toggle(style._active)
            menuList.current.classList.toggle(style._active)
        } else {
            setMenuState(true)
            menu.current.classList.toggle(style._active)
            menuList.current.classList.toggle(style._active)
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
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#features">Features</a></li>
                            <li><a href="#team">Team</a></li>
                            <li><a href="#reviews">Reviews</a></li>
                        </ul>
                        <div className={style.headerMobile__contactsWrapper}>
                            <Contacts />
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default HeaderMobile