import style from './Clouds.module.scss'

import { useSelector } from 'react-redux'
import { useRef } from 'react'

import sky from '../../img/sky-dynamic_footage.webp'

const Clouds = () => {

    const clouds = useRef(null)
    const pos = useSelector(state => state.pos)

    window.addEventListener('scroll', (event) => {

        if (window.scrollY > pos.guide && window.scrollY < pos.features) {
            clouds.current.classList.toggle('_animatedClouds')
        } else if (window.scrollY > pos.progress && window.scrollY < pos.addWater) {
            clouds.current.classList.toggle('_animatedClouds')
        } else if (window.scrollY > pos.knows && window.scrollY < pos.track) {
            clouds.current.classList.toggle('_animatedClouds')
        }
        else {
            clouds.current.classList.toggle('_animatedClouds')
        }
    })

    return (
        <img src={sky} alt="I believe I can fly" className={style.clouds} ref={clouds} />
    )
}

export default Clouds