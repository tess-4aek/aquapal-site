import style from '../scss/Knows.module.scss'
import sky from '../img/sky-dynamic_footage.png'
import phone1 from '../img/knows/knows_phone-1.png'
import phone2 from '../img/knows/knows_phone-2.png'

const Knows = () => {
    return (
        <div className={style.knowsWrapper}>
            <div className={style.knows}>
                <div className="container">
                    <div className={style.knows__inner}>
                        <img src={sky} alt="I believe I can fly" className={style.knows__sky} />
                        <div className={style.knows__phones}>
                            <img src={phone1} alt="Your daily goal" className={style.knows__phone1} />
                            <img src={phone2} alt="Choose ml" className={style.knows__phone2} />
                        </div>
                        <div className={style.knows__content}>
                            <div className={style.knows__title}>Aqua Pal knows You inside out</div>
                            <div className={style.knows__text}>We calculate your daily water intake according to your weight and gender, based on research by the US National Academy of Engineering and Medicine: Dietary Reference Intakes for Water, Potassium, Sodium, Chloride, and Sulfate</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Knows