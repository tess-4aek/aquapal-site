import Logo from '../Logo/Logo'
import style from './Header.module.scss'


const Header = () => {
    return (
        <div className={style.header} id="home">
            <div className="container">
                <div className={style.header__inner}>
                    <Logo />
                    <nav className={style.header__navigation}>
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#features">Features</a></li>
                            <li><a href="#team">Team</a></li>
                            <li><a href="#reviews">Reviews</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Header