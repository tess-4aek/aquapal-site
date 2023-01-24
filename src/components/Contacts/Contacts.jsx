import style from './Contacts.module.scss'

import { ReactComponent as InstagramIcon } from '../../img/footer/instagram_icon.svg'
import { ReactComponent as EmailIcon } from '../../img/footer/mail_icon.svg'

const Contacts = () => {
    return (
        <div className={style.contacts}>
            <a target="_blank" href="https://www.instagram.com/nitrix.soft/">
                <InstagramIcon className={style.contacts__instagramIcon} />
            </a>
            <a target="_blank" href="mailto:$$$$$$$">
                <EmailIcon className={style.contacts__emailIcon} />
            </a>
            Contact Us
        </div>
    )
}

export default Contacts