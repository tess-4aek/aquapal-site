import style from './Logo.module.scss'
import logoImg from '../../img/logo.webp'

const Logo = () => {
    return (
        <a href='https://aquapal-site.vercel.app/' className={style.logo}>
            <img src={logoImg} alt="logotype" />
            Aqua Pal
        </a>
    )
}

export default Logo
