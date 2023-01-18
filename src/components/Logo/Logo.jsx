import style from './Logo.module.scss'
import logo from '../../img/logo.png'

const Logo = () => {
    return (
        <a href="#" className={style.logo}>
            <img src={logo} alt="logotype" />
            Aqua Pal
        </a>
    )
}

export default Logo
