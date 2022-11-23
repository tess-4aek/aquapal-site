import style from '../scss/Footer.module.scss'
import nitrix from '../img/footer/nitrix-logo.png'
import instagram from '../img/footer/instagram_icon.svg'
import mail from '../img/footer/mail_icon.svg'

const Footer = () => {
    return (
        <div className={style.footer}>
            <div className="container">
                <div className={style.footer__inner}>
                    <nav className={style.footer__navigation}>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Features</a></li>
                            <li><a href="#">Team</a></li>
                            <li><a href="#">Reviews</a></li>
                        </ul>
                    </nav>
                    <div className={style.footer__info}>
                        <div className={style.footer__copyright}>
                            © 2022 Aqua Pal, All Rights Reserved
                        </div>
                        <div className={style.footer__company}>
                            Made with love by Nitrix
                            <img src={nitrix} alt="Nitrix" />
                        </div>
                        <div className={style.footer__contacts}>
                            <a href="#"><img src={instagram} alt="Instagram" /></a>
                            <a href="mailto:$$$$$$$"><img src={mail} alt="Write me" /></a>
                            Contact Us
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer