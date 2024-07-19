import Logo from '../Assets/Logo.svg'
import '../App.css'
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav>
            <img src={Logo} alt="Little Lemon Logo" />
            <ul>
                <li><a href="#about">About</a></li>
                <li><Link to="/">Home</Link></li>
                <li><a href="#menu">Menu</a></li>
                <li><Link to="/orderonline">Order Online</Link></li>
                <li><Link to="/reservations">Reservations</Link></li>
                <li><a href="#login">Login</a></li>
            </ul>
        </nav>
    )
}

export default Nav;