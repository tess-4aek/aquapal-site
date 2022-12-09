import style from '../scss/Footer.module.scss'
import { useDispatch } from 'react-redux'
import { setFooterPosAction } from '../store/sitePosReducer'
import { useEffect, useRef } from 'react'

import nitrix from '../img/footer/nitrix-logo.png'
import Contacts from '../components/Contacts/Contacts'

const Footer = () => {

    const dispatch = useDispatch()

    const ref = useRef()

    useEffect(() => {
        const footerOffsetTop = ref.current
        dispatch(setFooterPosAction(footerOffsetTop.offsetTop))
    }, [])

    return (
        <div className={style.footer} ref={ref}>
            <div className="container">
                <div className={style.footer__inner}>
                    <nav className={style.footer__navigation}>
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#features">Features</a></li>
                            <li><a href="#team">Team</a></li>
                            <li><a href="#reviews">Reviews</a></li>
                        </ul>
                    </nav>
                    <div className={style.footer__info}>
                        <div className={style.footer__copyright}>
                            © 2022 Aqua Pal, All Rights Reserved
                        </div>
                        <a href="#" className={style.footer__company}>
                            Made with love by Nitrix
                            <img src={nitrix} alt="Nitrix" />
                        </a>
                        <Contacts />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer