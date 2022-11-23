import style from '../scss/Memories.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import photoCard1 from '../img/memories/photoCard1.png'
import photoCard2 from '../img/memories/photoCard2.png'
import photoCard3 from '../img/memories/photoCard3.png'
import photoCard4 from '../img/memories/photoCard4.png'
import photoCard5 from '../img/memories/photoCard5.png'
import photoCard6 from '../img/memories/photoCard6.png'
import photoCard7 from '../img/memories/photoCard7.png'
import photoCard8 from '../img/memories/photoCard8.png'

const Memories = () => {
    return (
        <div className={style.memoriesWrapper}>
            <div className={style.memories}>
                <Swiper
                    spaceBetween={30}
                    slidesPerView={5}
                    grabCursor={true}
                    loop={true}
                >
                    <SwiperSlide><img src={photoCard1} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={photoCard2} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={photoCard3} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={photoCard4} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={photoCard5} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={photoCard6} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={photoCard7} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={photoCard8} alt="" /></SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default Memories