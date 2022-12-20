import style from '../scss/Memories.module.scss'
import { useDispatch } from 'react-redux'
import { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode } from "swiper";
import { setMemoriesPosAction } from '../store/sitePosReducer';
import 'swiper/css';

import photoCard1 from '../img/memories/photoCard1.png'
import photoCard2 from '../img/memories/photoCard2.png'
import photoCard3 from '../img/memories/photoCard3.png'
import photoCard4 from '../img/memories/photoCard4.png'
import photoCard5 from '../img/memories/photoCard5.png'
import photoCard6 from '../img/memories/photoCard6.png'
import photoCard7 from '../img/memories/photoCard7.png'
import photoCard8 from '../img/memories/photoCard8.png'
import photoCard9 from '../img/memories/photoCard9.png'
import photoCard10 from '../img/memories/photoCard10.png'

const Memories = () => {

    const dispatch = useDispatch()

    const ref = useRef(null)

    useEffect(() => {
        const memoriesOffsetTop = ref.current
        dispatch(setMemoriesPosAction(memoriesOffsetTop.offsetTop))
    }, [])


    return (
        <div className={style.memoriesWrapper} ref={ref}>
            <div className={style.memories}>
                <Swiper
                    slidesPerView={5}
                    loop={true}
                    freeMode={true}
                    modules={[FreeMode]}
                >
                    <SwiperSlide>
                        <div className={style.memories__slide} style={{transform: 'rotateZ(10deg)'}}>
                            <img src={photoCard1} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={style.memories__slide} style={{transform: 'rotateZ(-10deg)'}}>
                            <img src={photoCard2} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={style.memories__slide} style={{transform: 'rotateZ(10deg)'}}>
                            <img src={photoCard3} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={style.memories__slide} style={{transform: 'rotateZ(-10deg)'}}>
                            <img src={photoCard4} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={style.memories__slide} style={{transform: 'rotateZ(10deg)'}}>
                            <img src={photoCard5} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={style.memories__slide} style={{transform: 'rotateZ(-10deg)'}}>
                            <img src={photoCard6} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={style.memories__slide} style={{transform: 'rotateZ(10deg)'}}>
                            <img src={photoCard7} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={style.memories__slide} style={{transform: 'rotateZ(-10deg)'}}>
                            <img src={photoCard8} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={style.memories__slide} style={{transform: 'rotateZ(10deg)'}}>
                            <img src={photoCard9} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={style.memories__slide} style={{transform: 'rotateZ(-10deg)'}}>
                            <img src={photoCard10} alt="" />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default Memories