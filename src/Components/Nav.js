import Logo from '../assets/Logo.svg'
import { Link } from 'react-router-dom';
import '../styles/nav.css'


const Nav = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">
                        <img src={Logo} alt="Little Lemon Logo" />
                    </Link>
                </li>
                <li><Link to="/">Home</Link></li>
                {/* <li><a href="#menu">Menu</a></li> */}
                <li><a href="https://doordash.com" target='_blank'
                    rel="noreferrer">
                        Order Online
                </a></li>
                {/* <li><Link to="/orderonline">Order Online</Link></li> */}
                <li><Link to="/reservations">Reservations</Link></li>
                {/* <li><a href="#login">Login</a></li> */}
            </ul>
        </nav>
    )
}

export default Nav;