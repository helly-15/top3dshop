import './Contacts.scss'

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
            <a href = "mailto: abc@example.com">Напишите нам</a>
            <a href = "mailto: abc@example.com">Свяжитесь с директором</a>
            <nav>
                <ul>
                    <li>

                    </li>
                </ul>
            </nav>
        </div>



    )
}
export default Contacts;
