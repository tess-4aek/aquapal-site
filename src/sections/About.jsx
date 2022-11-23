import style from '../scss/About.module.scss'
import phone1 from '../img/about-it/about-it_phone-1.png'
import phone2 from '../img/about-it/about-it_phone-2.png'
import phone3 from '../img/about-it/about-it_phone-3.png'

const About = () => {

    // const animItems = document.querySelectorAll(`.${style._animItems}`)

    // if (animItems.length > 0) {
    //     window.addEventListener('scroll', animOnScroll)
    //     console.log('work');
    //     console.log('work');
    //     function animOnScroll(params) {
    //         for (let index = 0; index < animItems.length; index++) {
    //             const animItem = animItems[index]
    //             const animItemHeight = animItem.offsetHeight
    //             const animItemOffset = offset(animItem).top
    //             const animStart = 4

    //             let animItemPoint = window.innerHeight - animItemHeight / animStart

    //             if (animItemHeight > window.innerHeight) {
    //                 animItemPoint = window.innerHeight - window.innerHeight / animStart
    //             }

    //             console.log(window.scrollY);
    //             console.log(animItemOffset - animItemPoint);
    //             if ((window.scrollY > animItemOffset - animItemPoint) && window.scrollY < (animItemOffset + animItemHeight)) {
    //                 animItem.classList.add(style._active)
    //             } else {
    //                 animItem.classList.remove(style._active)
    //             }
    //         }
    //     }
    //     function offset(el) {
    //         const rect = el.getBoundingClientRect(),
    //             scrollLeft = window.screenX || document.documentElement.scrollLeft,
    //             scrollTop = window.scrollY || document.documentElement.scrollTop
    //         return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    //     }
    //     animOnScroll()
    // }
    

    return (
        <div id='about' className={style.about}>
            <div className="container">
                <div className={style.about__inner}>
                    <div className={style.about__text}>
                        Aqua Pal is a Water abouter, that allows you to about how much water you drink with a click of a button. This is just what you need to make sure you stay healthy, hydrated and energetic!
                    </div>
                    <div className={style.about__demos}>
                        <img src={phone1} alt="Your daily goal" 
                        // className={style._animItems}
                         />
                        <img src={phone2} alt="Main screen" 
                        // className={style._animItems}
                         />
                        <img src={phone3} alt="Your statistic" 
                        // className={style._animItems}
                         />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About