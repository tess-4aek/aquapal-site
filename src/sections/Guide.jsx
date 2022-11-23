import style from '../scss/Guide.module.scss'
import sky from '../img/sky-dynamic_footage.png'
import phone1 from '../img/guide/guide_phone-1.png'
import phone2 from '../img/guide/guide_phone-2.png'
import phone3 from '../img/guide/guide_phone-3.png'

const Guide = () => {
    return (
        <div className={style.guideWrapper}>
            <div className={style.guide}>
                <div className="container">
                    <div className={style.guide__inner}>
                    <img src={sky} alt="I believe I can fly" className={style.guide__sky} />
                        <div className={style.guide__title}>Drink water and <br /> Grow your plant</div>
                        <div className={style.guide__text}>
                            Tracking water in its basic stages:Drink water at a set time, record it in the app and follow the evolution of your plant
                        </div>
                        <div className={style.guide__demos}>
                            <img src={phone1} alt="Drink" />
                            <img src={phone2} alt="Grow" />
                            <img src={phone3} alt="Stay healthy" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Guide