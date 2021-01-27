import './Header.scss'
import Contacts from "./contacts/Contacts";
import Search from "./search/Search";

function Header(){

    return(
        <header className='header'>
            <Contacts/>
            <Search/>
        </header>

    )
}
export default Header;
