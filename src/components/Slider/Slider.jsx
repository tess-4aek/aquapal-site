import { useEffect } from 'react'
import Slide from './Slide'
import style from './Slider.module.scss'

const Slider = (props) => {

    const slidesList = props.children.map((e, index) =>
        <Slide key={index} id={index}>{e}</Slide>
    )

    // setTimeout(() => {
    //     let item = document.getElementById('4')
    //     document.getElementById('0').replaceWith(item)
    // }, 3000)

    return (
        <div className={style.slider}>
            {slidesList}
        </div>
    )
}

export default Slider