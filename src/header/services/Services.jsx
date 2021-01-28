import './Services.scss';

function Services(){

    return(

<>
        <button className="accordion" onClick={(e)=>{
            e.target.classList.toggle('active');
            let panel = e.target.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = "400px";
            }
        }}>Справочная информация</button>
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

</>


    )
}
export default Services;
