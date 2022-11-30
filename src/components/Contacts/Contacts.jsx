import style from './Contacts.module.scss'

import instagram from '../../img/footer/instagram_icon.svg'
import mail from '../../img/footer/mail_icon.svg'

const Contacts = () => {
    return (
        <div className={style.contacts}>
            <a href="#"><img src={instagram} alt="Instagram" /></a>
            <a href="mailto:$$$$$$$"><img src={mail} alt="Write me" /></a>
            Contact Us
        </div>
    )
}

export default Contacts