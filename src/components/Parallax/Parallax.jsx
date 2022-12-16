import style from './Parallax.module.scss'

const Parallax = (props) => {
    return(
        <div className={style.parallax} style={{backgroundImage: `url(${props.img})`, height: `${props.height}px`}}>
            {props.children}
        </div>
    )
}

export default Parallax