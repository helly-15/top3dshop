import './Devices.scss';

function Devices(){

    return(
        <>
        <button className="accordion" onClick={(e)=>{
            e.target.classList.toggle('active');
            let panel = e.target.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = '500px';
            }
        }}>Наши продукты</button>
        <ul className="devices">
            <li className='devices-item'>
                    <select id="printer" name="printer">
                        <option value="3d">3D-принтеры</option>
                    </select>
            </li>
            <li className='devices-item'>
                    <select id="scaner" name="scaner">
                        <option value="3d">3D-сканеры</option>
                    </select>
            </li>
            <li className='devices-item'>
                    <select id="devicestan" name="devicestan">
                        <option value="3d">Станки</option>
                    </select>
            </li>
            <li className='devices-item'>
                    <select id="robot" name="robot">
                        <option value="3d">Роботы</option>
                    </select>
            </li>
            <li className='devices-item'>
                <select id="education" name="education">
                    <option value="3d">Образование</option>
                </select>
            </li>
            <li className='devices-item'>
                    <select id="dentist" name="dentist">
                        <option value="3d">Стоматологам</option>
                    </select>
            </li>
            <li className='devices-item'>
                    <select id="printer" name="printer">
                        <option value="3d">Гаджеты</option>
                    </select>
            </li>
            <li className='devices-item'>
                    <select id="gadget" name="gadget">
                        <option value="3d">Материалы</option>
                    </select>
            </li>
            <li className='devices-item'>
                    <select id="po" name="po">
                        <option value="3d">ПО</option>
                    </select>
            </li>
            <li className='devices-item'>
                    <select id="solutions" name="solutions">
                        <option value="3d">Решения</option>
                    </select>
            </li>
            <li className='devices-item'>
                    <select id="center" name="center">
                        <option value="3d">Учебный центр</option>
                    </select>
            </li>
            <li className='devices-item'>
                    <select id="services" name="services">
                        <option value="3d">Услуги</option>
                    </select>
            </li>
        </ul>

        </>
    )
}
export default Devices;
