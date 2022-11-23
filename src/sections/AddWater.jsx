import style from '../scss/AddWater.module.scss'
import appleWatch from '../img/add-water/add-water_apple-watch.png'
import phone from '../img/add-water/add-water_phone.png'

const AddWater = () => {
    return (
        <div className={style.addWater}>
            <div className="container">
                <div className={style.addWater__inner}>
                    <div className={style.addWater__content}>
                        <div className={style.addWater__title}>
                        Flexible water <br /> addition system
                        </div>
                        <div className={style.addWater__text}>
                        Add water in different volumes: system-calculated optimal amount, manually or by sips, if you do not know the volume of the glass from which you drink.
                        </div>
                    </div>
                    <div className={style.addWater__images}>
                        <img src={appleWatch} alt="Add water with watches" className={style.addWater__watch} />
                        <img src={phone} alt="Add water with smartphone" className={style.addWater__phone}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddWater