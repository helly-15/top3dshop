import './Services.scss';

function Services(){

    return(
        <div id='menuToggle'>
            <input type="checkbox" className='burger' />
            <p className='burger'> О нас</p>
            <span className='burger'></span>
            <span className='burger'></span>
            <span className='burger'></span>
            <ul className="services">
                <li className='services-item'>Акции</li>
                <li className='services-item'>О нас</li>
                <li className='services-item'>Мероприятия</li>
                <li className='services-item'>Оплата и доставка</li>
                <li className='services-item'>Что с моим заказом</li>
                <li className='services-item'>Гос. закупки</li>
                <li className='services-item'>Блог</li>
                <li className='services-item'>Мастер класс</li>
                <li className='services-item'>Контакты</li>
            </ul>
        </div>



    )
}
export default Services;
