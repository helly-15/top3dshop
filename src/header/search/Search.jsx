import './Search.scss';
import logo from '../../assets/logo.svg';
import yandex from '../../assets/yandex.png';
import enter from '../../assets/enter.svg';
import basket from '../../assets/basket.svg';
function Search(){

    return(
        <div className='search'>
            <img src={logo} alt={'site logo'} className='company-logo'/>
            <p className='company-logo__text' > Ваш эксперт<br/>
                на рынке <span>3D</span>-техники</p>
            <div className='yandex-add'>
                <img src={yandex} alt={'site logo'} />
            </div>

            <form action="#"  className='search-field'>
                <input className='search-field__place' type="text" placeholder="Введите запрос, например, Formlabs Form 2" name="search"/>
                <button className='search-field__button' type="submit">Найти</button>
            </form>
            <div className='auth'>
                <img className='auth-pic' src ={enter} alt={'enter button'}/>
                <span className='auth-text'> Войти </span>
            </div>
            <button className='basket'>
                <img className='basket-img' src ={basket} alt={'basket button'}/>
                <span className='basket-text'> Корзина пуста </span>
            </button>
        </div>


    )
}
export default Search;
