import { useRef, useState } from 'react'
import style from './BurgerMenu.module.scss'
import scrollLock from 'scroll-lock';


const BurgerMenu = (props) => {
    const [menuState, setMenuState] = useState(false)

    const top = useRef(null)
    const bottom = useRef(null)

    const menuActive = () => {

        console.log(props);
        if (props.state === true || menuState === true) {
            setMenuState(false)
            top.current.classList.toggle(style.menu__top_click)
            bottom.current.classList.toggle(style.menu__bottom_click)
            props.list.current.classList.toggle(style._active)
            scrollLock.enablePageScroll()
        } else {
            setMenuState(true)
            top.current.classList.toggle(style.menu__top_click)
            bottom.current.classList.toggle(style.menu__bottom_click)
            props.list.current.classList.toggle(style._active)
            scrollLock.disablePageScroll()
        }
    }







    return (
        <div className={style.menu} onClick={menuActive}>
            <span className={`${style.menu__global} ${style.menu__top}`} ref={top}></span>
            <span className={`${style.menu__global} ${style.menu__bottom}`} ref={bottom}></span>
        </div>
    )
}

export default BurgerMenu