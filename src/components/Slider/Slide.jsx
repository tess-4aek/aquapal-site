import style from './Slide.module.scss'

const Slide = (props) =>{
    return(
        <div id={props.id}>
            {props.children}
        </div>
    )
}

export default Slide