import style from './Logo.module.scss'
import logoImg from '../../img/logo.png'

const Logo = () => {
    return (
        <a href='localhost:3000' className={style.logo}>
            <img src={logoImg} alt="logotype" />
            Aqua Pal
        </a>
    )
}

export default Logo
