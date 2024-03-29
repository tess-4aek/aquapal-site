import style from '../scss/Team.module.scss'
import { useDispatch } from 'react-redux'
import { setTeamPosAction } from '../store/sitePosReducer'
import { useEffect, useRef } from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll'

import NikitaAxyonov from '../img/team/NikitaAxyonov.webp'
import HannaTyrinova from '../img/team/HannaTyrinova.webp'
import AlinaShevtsova from '../img/team/AlinaShevtsova.webp'
import MaxLysiahin from '../img/team/MaxLysiahin.webp'
import IlliaBorshchov from '../img/team/IlliaBorshchov.webp'
import RuslanVyshnevskyi from '../img/team/RuslanVyshnevskyi.webp'
import Aries from '../img/team/astr-sign_aries.svg'
import Cancer from '../img/team/astr-sign_cancer.svg'
import Gemini from '../img/team/astr-sign_gemini.svg'
import Libra from '../img/team/astr-sign_libra.svg'
import Vigro from '../img/team/astr-sign_vigro.svg'

const Team = () => {

    const dispatch = useDispatch()

    const ref = useRef(null)

    useEffect(() => {
        const teamOffsetTop = ref.current
        dispatch(setTeamPosAction(teamOffsetTop.offsetTop))
    }, [])

    function onClick(e) {
        if (window.innerWidth < 720) e.parentNode.classList.toggle(style._active)
    }

    // function onClick(e) {
    //     if (window.innerWidth < 720) document.querySelectorAll(`.${style.team__avatar}`).forEach(e => {
    //         console.log(e);
    //         e.classList.toggle(style._active)
    //         if(e.classList.contains(style._active))
    //     })
    // }

    return (
        <div id='team' className={style.team} ref={ref}>
            <div className="container">
                <div className={style.team__inner}>
                    <div className={style.team__title}>
                        Meet the team
                    </div>
                    <div className={style.team__subtitle}>
                        Application was made by Super Hero Software agency - Nitrix! <br /> Let’s introduce a small part of our friendly team.
                    </div>
                    <div className={style.team__guideText}>
                        Tap and you discover some interesting moments about us
                    </div>
                    <div className={style.team__list}>
                        <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInUp" style={{ animationDuration: '.5s' }}>
                            <div className={style.team__item}>
                                <div className={`${style.team__avatar} ${window.innerWidth > 720 ? style.team__avatarHover : null}`}>
                                    <div className={style.team__avatarWrapper} onClick={e => onClick(e.target)}></div>
                                    <img src={NikitaAxyonov} alt="Nikita Axyonov – Founder & CEO" />
                                    <div className={style.team__sign}>
                                        <img src={Cancer} alt="Cancer" />
                                    </div>
                                    <div className={style.team__substrate} style={{ background: "rgba(252, 219, 255, 0.5)" }}>
                                        <div> Plant: <br /> <span>Cactus</span></div>
                                        <div>  Daily Water: <br /> <span>3650ml</span></div>
                                    </div>
                                </div>
                                <div className={style.team__content}>
                                    <div className={style.team__name}>
                                        Nikita Axyonov
                                    </div>
                                    <div className={style.team__position}>
                                        Founder & CEO
                                    </div>
                                    <div className={style.team__text}>
                                        A wise director of his company, fully committed to the business and expects the same from his employees.
                                    </div>
                                </div>
                            </div>
                        </AnimationOnScroll>
                        <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInUp" style={{ animationDuration: '.5s' }}>
                            <div className={style.team__item}>
                                <div className={`${style.team__avatar} ${window.innerWidth > 720 ? style.team__avatarHover : null}`}>
                                    <div className={style.team__avatarWrapper} onClick={e => onClick(e.target)}></div>
                                    <img src={MaxLysiahin} alt="Max Lysiahin – PM" />
                                    <div className={style.team__sign}>
                                        <img src={Vigro} alt="Vigro" />
                                    </div>
                                    <div className={style.team__substrate} style={{ background: "rgba(210, 250, 255, 0.5)" }}>
                                        <div> Plant: <br /> <span>Thuja</span></div>
                                        <div>  Daily Water: <br /> <span>3000ml</span></div>
                                    </div>
                                </div>
                                <div className={style.team__content}>
                                    <div className={style.team__name}>
                                        Max Lysiahin
                                    </div>
                                    <div className={style.team__position}>
                                        PM
                                    </div>
                                    <div className={style.team__text}>
                                        A good communicator who is skilled in dealing with problems in a resourceful manner and negotiating to achieve beneficial agreement.
                                    </div>
                                </div>
                            </div>
                        </AnimationOnScroll>
                        <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInUp" style={{ animationDuration: '.5s' }}>
                            <div className={style.team__item}>
                                <div className={`${style.team__avatar} ${window.innerWidth > 720 ? style.team__avatarHover : null}`}>
                                    <div className={style.team__avatarWrapper} onClick={e => onClick(e.target)}></div>
                                    <img src={AlinaShevtsova} alt="Alina Shevtsova – Illustartor" />
                                    <div className={style.team__sign}>
                                        <img src={Gemini} alt="Gemini" />
                                    </div>
                                    <div className={style.team__substrate} style={{ background: "rgba(232, 255, 210, 0.5)" }}>
                                        <div> Plant: <br /> <span>Water lily</span></div>
                                        <div>  Daily Water: <br /> <span>1850ml</span></div>
                                    </div>
                                </div>
                                <div className={style.team__content}>
                                    <div className={style.team__name}>
                                        Alina Shevtsova
                                    </div>
                                    <div className={style.team__position}>
                                        Illustartor
                                    </div>
                                    <div className={style.team__text}>
                                        The magician of raster and vector graphics, who is ready to capture all the wonders of your world.
                                    </div>
                                </div>
                            </div>
                        </AnimationOnScroll>
                        <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInUp" style={{ animationDuration: '.5s' }}>
                            <div className={style.team__item}>
                                <div className={`${style.team__avatar} ${window.innerWidth > 720 ? style.team__avatarHover : null}`}>
                                    <div className={style.team__avatarWrapper} onClick={e => onClick(e.target)}></div>
                                    <img src={HannaTyrinova} alt="Hanna Tyrinova – Designer" />
                                    <div className={style.team__sign}>
                                        <img src={Gemini} alt="Gemini" />
                                    </div>
                                    <div className={style.team__substrate} style={{ background: "rgba(255, 204, 204, 0.5)" }}>
                                        <div> Plant: <br /> <span>Cotton</span></div>
                                        <div>  Daily Water: <br /> <span>1900ml</span></div>
                                    </div>
                                </div>
                                <div className={style.team__content}>
                                    <div className={style.team__name}>
                                        Hanna Tyrinova
                                    </div>
                                    <div className={style.team__position}>
                                        Designer
                                    </div>
                                    <div className={style.team__text}>
                                        An essential part of the creative department, happy to turn your most unexpected ideas into a real product.
                                    </div>
                                </div>
                            </div>
                        </AnimationOnScroll>
                        <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInUp" style={{ animationDuration: '.5s' }}>
                            <div className={style.team__item}>
                                <div className={`${style.team__avatar} ${window.innerWidth > 720 ? style.team__avatarHover : null}`}>
                                    <div className={style.team__avatarWrapper} onClick={e => onClick(e.target)}></div>
                                    <img src={IlliaBorshchov} alt="Illia Borshchov – Developer" />
                                    <div className={style.team__sign}>
                                        <img src={Libra} alt="Libra" />
                                    </div>
                                    <div className={style.team__substrate} style={{ background: "rgba(208, 255, 249, 0.5)" }}>
                                        <div> Plant: <br /> <span>Rose</span></div>
                                        <div>  Daily Water: <br /> <span>3080ml</span></div>
                                    </div>
                                </div>
                                <div className={style.team__content}>
                                    <div className={style.team__name}>
                                        Illia Borshchov
                                    </div>
                                    <div className={style.team__position}>
                                        Developer
                                    </div>
                                    <div className={style.team__text}>
                                        A professional in his own right who brings strong practices and experience to build software in a collaborative environment.
                                    </div>
                                </div>
                            </div>
                        </AnimationOnScroll>
                        <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInUp" style={{ animationDuration: '.5s' }}>
                            <div className={style.team__item}>
                                <div className={`${style.team__avatar} ${window.innerWidth > 720 ? style.team__avatarHover : null}`}>
                                    <div className={style.team__avatarWrapper} onClick={e => onClick(e.target)}></div>
                                    <img src={RuslanVyshnevskyi} alt="Ruslan Vyshnevskyi – Developer" />
                                    <div className={style.team__sign}>
                                        <img src={Aries} alt="Aries" />
                                    </div>
                                    <div className={style.team__substrate} style={{ background: "rgba(255, 241, 204, 0.5)" }}>
                                        <div> Plant: <br /> <span>Corn</span></div>
                                        <div>  Daily Water: <br /> <span>3500ml</span></div>
                                    </div>
                                </div>
                                <div className={style.team__content}>
                                    <div className={style.team__name}>
                                        Ruslan Vyshnevskyi
                                    </div>
                                    <div className={style.team__position}>
                                        Developer
                                    </div>
                                    <div className={style.team__text}>
                                        A jack of all trades who thrives on building quality systems that surpass end users' expectations.
                                    </div>
                                </div>
                            </div>
                        </AnimationOnScroll>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team