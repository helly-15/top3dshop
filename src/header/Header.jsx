import './Header.scss'
import Contacts from "./contacts/Contacts";
import Search from "./search/Search";
import Services from "./services/Services";
import Devices from "./devices/Devices";

function Header(){

    return(
        <header className='header'>
            <Contacts/>
            <Search/>
            <Services/>
            <Devices/>
        </header>
    )
}
export default Header;
