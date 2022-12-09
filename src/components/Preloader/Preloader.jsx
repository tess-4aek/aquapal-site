import style from './Preloader.module.scss'

const Preloader = () => {
    return (
        <div className={style.preloader}>
            <div className={style.preloader__inner}>
                <div className={style.preloader__text}>Aqua Pal!</div>
            </div>
        </div>
    )
}

export default Preloader