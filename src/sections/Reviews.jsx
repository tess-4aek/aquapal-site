import style from '../scss/Reviews.module.scss'
import star from '../img/reviews/star_icon.svg'

const Reviews = () => {
    return (
        <div id='reviews' className={style.reviews}>
            <div className="container">
                <div className={style.reviews__inner}>
                    <div className={style.reviews__title}>
                        Reviews from our Happy Users
                    </div>
                    <div className={style.reviews__subtitle}>
                        What do people think about our app?
                    </div>
                    <div className={`${style.reviews__card} ${style.reviews__card_1}`}>
                        <div className={style.reviews__cardTitle}>
                            “Amazing”
                        </div>
                        <div className={style.reviews__cardText}>
                            Just got this app and it is helping so much now I am influencing my family now.
                        </div>
                        <div className={style.reviews__cardReview}>
                            <div className={style.reviews__from}>Google Store Review</div>
                            <div className={style.reviews__review}>
                                <img src={star} alt="star" />
                                <img src={star} alt="star" />
                                <img src={star} alt="star" />
                                <img src={star} alt="star" />
                                <img src={star} alt="star" />
                            </div>
                        </div>
                        <div className={style.reviews__point}>
                            Happy User
                        </div>
                    </div>
                    <div className={`${style.reviews__card} ${style.reviews__card_2}`}>
                        <div className={style.reviews__cardTitle}>
                            “The best Aqua Trecker ever”
                        </div>
                        <div className={style.reviews__cardText}>
                            The app is very good I’m the type of person who drink less water but I started drinking more water with this app I really recommend this to ppl like me.
                        </div>
                        <div className={style.reviews__cardReview}>
                            <div className={style.reviews__from}>App Store Review</div>
                            <div className={style.reviews__review}>
                                <img src={star} alt="star" />
                                <img src={star} alt="star" />
                                <img src={star} alt="star" />
                                <img src={star} alt="star" />
                                <img src={star} alt="star" />
                            </div>
                        </div>
                    </div>
                    <div className={`${style.reviews__card} ${style.reviews__card_3}`}>
                        <div className={style.reviews__cardTitle}>
                            “The best Aqua Trecker ever”
                        </div>
                        <div className={style.reviews__cardText}>
                            The app is very good I’m the type of person who drink less water but I started drinking more water with this app I really recommend this to ppl like me.
                            <br />
                            <br />
                            just got this app and it is helping so much now I am influencing my family now.
                        </div>
                        <div className={style.reviews__cardReview}>
                            <div className={style.reviews__from}>App Store Review</div>
                            <div className={style.reviews__review}>
                                <img src={star} alt="star" />
                                <img src={star} alt="star" />
                                <img src={star} alt="star" />
                                <img src={star} alt="star" />
                                <img src={star} alt="star" />
                            </div>
                        </div>
                    </div>
                    <div className={`${style.reviews__card} ${style.reviews__card_4}`}>
                        <div className={style.reviews__cardTitle}>
                            “The best Aqua Trecker everThe best Aqua Trecker everThe best Aqua”
                        </div>
                        <div className={style.reviews__cardText}>
                            The app is very good I’m the type of person who drink less water but I started drinking more water with this app I really recommend this to ppl like me.
                            <br />
                            <br />
                            just got this app and it is helping so much now I am influencing my family now. and it is helping so much now I am influencing my family now. and it is helping so much now I am influencing my family now. and it is helping so much now I am influencing my family now.
                        </div>
                        <div className={style.reviews__cardReview}>
                            <div className={style.reviews__from}>App Store Review</div>
                            <div className={style.reviews__review}>
                                <img src={star} alt="star" />
                                <img src={star} alt="star" />
                                <img src={star} alt="star" />
                                <img src={star} alt="star" />
                                <img src={star} alt="star" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reviews