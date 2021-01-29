import './Contacts.scss'
import email from '../../assets/email.svg';
import skype from '../../assets/skype.svg';
import phone from '../../assets/phone.svg'
function Contacts(){
    return(
        <div className='contacts-wrapper'>
            <address className='contacts'>
                <div className='customSelect-city'>
                    <select name="city" id="city-select">
                        <option value="Piter">Санкт-Петербург</option>
                        <option value="Moscow">Москва</option>
                    </select>
                </div>
                <a href="tel:+78126135838" className='contacts-phone'>+7 (812) 613-58-38</a>
                <p className='contacts-time'>Пн–пт <time>10:00–19:00</time>, сб-вс <time>10:00–17:00</time></p>
            </address>
            <nav>
                <ul className='connect'>
                    <li className='connect-write'>
                        <a href = "mailto: abc@example.com" >Напишите нам</a>
                    </li>
                    <li className='connect-director'>
                        <a href = "mailto: abc@example.com" >Свяжитесь с директором</a>
                    </li>
                    <li className='connect-email'>
                        <a href = "mailto: abc@example.com">
                            <img src ={email} alt ='write email'/>
                        </a>
                    </li>
                    <li className='connect-skype'>
                        <a href="skype:********?call">
                            <img src ={skype} alt ='call Skype'/>
                        </a>
                    </li>
                    <li className='connect-phone'>
                        <a href="tel:+78126135838">
                            <img src ={phone} alt ='call Skype'/>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
export default Contacts;
