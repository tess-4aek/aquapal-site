import { useRef } from 'react'
import style from './BurgerMenu.module.scss'

const BurgerMenu = () => {

    const top = useRef(null)
    const bottom = useRef(null)

    const menuActive = () => {
        top.current.classList.toggle(style.menu__top_click)
        bottom.current.classList.toggle(style.menu__bottom_click)
    }

    return (
        <div className={style.menu} onClick={menuActive}>
            <span className={`${style.menu__global} ${style.menu__top}`} ref={top}></span>
            <span className={`${style.menu__global} ${style.menu__bottom}`} ref={bottom}></span>
        </div>
    )
}

export default BurgerMenu