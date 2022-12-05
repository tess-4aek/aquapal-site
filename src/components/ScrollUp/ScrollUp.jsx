import { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import style from './ScrollUp.module.scss'

const ScrollUp = () => {

    const ref = useRef(null)
    const pos = useSelector(state => state.pos)

    window.addEventListener('scroll', (event) => {
        const arrow = ref.current

        window.scrollY + arrow.offsetTop + (arrow.offsetHeight / 2) < pos.about ? arrow.style.opacity = '0' : arrow.style.opacity = '1'

        if (window.scrollY + arrow.offsetTop + (arrow.offsetHeight / 2) > pos.about && window.scrollY + arrow.offsetTop + (arrow.offsetHeight / 2) < pos.knows) {
            arrow.style.background = 'rgba(73, 167, 255, 0.3)'
            arrow.style.transform = 'rotateY(180deg)'
        } else if (window.scrollY + arrow.offsetTop + (arrow.offsetHeight / 2) > pos.track && window.scrollY + arrow.offsetTop + (arrow.offsetHeight / 2) < pos.progress) {
            arrow.style.background = 'rgba(73, 167, 255, 0.3)'
            arrow.style.transform = 'rotateY(180deg)'
        } else if (window.scrollY + arrow.offsetTop + (arrow.offsetHeight / 2) > pos.addWater && window.scrollY + arrow.offsetTop + (arrow.offsetHeight / 2) < pos.guide) {
            arrow.style.background = 'rgba(73, 167, 255, 0.3)'
            arrow.style.transform = 'rotateY(180deg)'
        } else if (window.scrollY + arrow.offsetTop + (arrow.offsetHeight / 2) > pos.features && window.scrollY + arrow.offsetTop + (arrow.offsetHeight / 2) < pos.memories) {
            arrow.style.background = 'rgba(73, 167, 255, 0.3)'
            arrow.style.transform = 'rotateY(180deg)'
        } else if (window.scrollY + arrow.offsetTop + (arrow.offsetHeight / 2) > pos.team && window.scrollY + arrow.offsetTop + (arrow.offsetHeight / 2) < pos.reviews) {
            arrow.style.background = 'rgba(73, 167, 255, 0.3)'
            arrow.style.transform = 'rotateY(180deg)'
        } else if (window.scrollY + arrow.offsetTop + (arrow.offsetHeight / 2) > pos.reviews && window.scrollY + arrow.offsetTop + (arrow.offsetHeight / 2) < pos.wave) {
            arrow.style.background = 'rgba(73, 167, 255, 0.3)'
            arrow.style.transform = 'rotateY(180deg)'
        } else if (window.scrollY + arrow.offsetTop + (arrow.offsetHeight / 2) > pos.footer) {
            arrow.style.background = 'rgba(73, 167, 255, 0.3)'
            arrow.style.transform = 'rotateY(180deg)'
        }
        else {
            arrow.style.background = '#ffffff'
            arrow.style.transform = 'rotateY(0deg)'
        }
    })

    return (
        <div className={style.scrollUp} ref={ref} onClick={() => window.scrollTo(0, 0)}>
            <svg width="28" height="35" viewBox="0 0 28 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 34.0078C15.1426 34.0078 15.9512 33.1992 15.9512 32.0391V10.3301L15.8105 6.5332L20.3633 11.6133L24.3711 15.5859C24.7227 15.9375 25.2148 16.166 25.7598 16.166C26.832 16.166 27.6406 15.3574 27.6406 14.25C27.6406 13.7402 27.4473 13.2656 27.0254 12.8438L15.4414 1.24219C15.0547 0.837891 14.5273 0.626953 14 0.626953C13.4551 0.626953 12.9277 0.837891 12.541 1.24219L0.974609 12.8438C0.552734 13.2656 0.359375 13.7402 0.359375 14.25C0.359375 15.3574 1.15039 16.166 2.22266 16.166C2.78516 16.166 3.27734 15.9375 3.62891 15.5859L7.61914 11.6133L12.1895 6.51562L12.0312 10.3301V32.0391C12.0312 33.1992 12.8398 34.0078 14 34.0078Z" fill="#49A7FF" />
            </svg>
        </div>
    )
}

export default ScrollUp;