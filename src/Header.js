import bank_logo from './bank_logo.jpg';
import { NavLink } from 'react-router-dom';
const Header = () => {
    return ( 
        <div className="header">
        <img className="logo" src={bank_logo} alt="bank_logo" />
        <h1> SPARKS BANK </h1>
        <nav>
            <ul>
                <li><a><NavLink exact to='/home' activeClassName="activeclass">Home</NavLink></a></li>
                <li><a><NavLink exact to='/customer' activeClassName="activeclass">View All Customers</NavLink></a></li>
                <li><a><NavLink exact to='/transfer' activeClassName="activeclass">Transfer Money</NavLink></a></li>
                <li><a><NavLink exact to='/transaction' activeClassName="activeclass">Transaction History</NavLink></a></li>
            </ul>
        </nav>
        </div>
     );
}
export default Header;