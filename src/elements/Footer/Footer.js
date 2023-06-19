import './footer.css'
import Logo from '../../img/logo-footer.png'


export default function Footer() {
    return (
        <footer className='footer'>
            <img src={Logo} alt="Logo Kasa - noir et blanc" className='footer_logo'/>
            <p className='footer_text'>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}


