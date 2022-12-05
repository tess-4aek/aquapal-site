import style from '../scss/Team.module.scss'
import { useDispatch } from 'react-redux'
import { setTeamPosAction } from '../store/sitePosReducer'
import { useEffect, useRef } from 'react'

import NikitaAxyonov from '../img/team/NikitaAxyonov.png'
import HannaTyrinova from '../img/team/HannaTyrinova.png'
import AlinaShevtsova from '../img/team/AlinaShevtsova.png'
import MaxLysiahin from '../img/team/MaxLysiahin.png'
import IlliaBorshchov from '../img/team/IlliaBorshchov.png'
import RuslanVyshnevskyi from '../img/team/RuslanVyshnevskyi.png'
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
                    <div className={style.team__list}>
                        <div className={style.team__item}>
                            <div className={style.team__avatar}>
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
                                    A wise director of his company, fully committed to the business and expects the same from his employees
                                </div>
                            </div>
                        </div>
                        <div className={style.team__item}>
                            <div className={style.team__avatar}>
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
                                    A wise director of his company, fully committed to the business and expects the same from his employees
                                </div>
                            </div>
                        </div>
                        <div className={style.team__item}>
                            <div className={style.team__avatar}>
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
                                    A wise director of his company, fully committed to the business and expects the same from his employees
                                </div>
                            </div>
                        </div>
                        <div className={style.team__item}>
                            <div className={style.team__avatar}>
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
                                    A wise director of his company, fully committed to the business and expects the same from his employees
                                </div>
                            </div>
                        </div>
                        <div className={style.team__item}>
                            <div className={style.team__avatar}>
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
                                    A wise director of his company, fully committed to the business and expects the same from his employees
                                </div>
                            </div>
                        </div>
                        <div className={style.team__item}>
                            <div className={style.team__avatar}>
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
                                    A wise director of his company, fully committed to the business and expects the same from his employees
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team