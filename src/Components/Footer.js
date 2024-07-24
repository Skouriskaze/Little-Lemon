import Logo from '../assets/Logo.svg'
import { Link } from 'react-router-dom';
import '../App.css'

const Footer = () => {
    return (
        <footer>
            <img src={Logo} alt="Little Lemon Logo" />
            <ul>
                <li>
                    <h3>Home</h3>
                    <ul>
                        <li><a href="#hero">Introduction</a></li>
                        <li><a href="#highlights">Specials</a></li>
                        <li><a href="#testimonials">Testimonials</a></li>
                        <li><a href="#about">About</a></li>
                    </ul>
                </li>
                <li>
                    <h3>Order Online</h3>
                    <ul>
                        <li><a href="https://doordash.com" target='_blank' rel='noreferrer'>Doordash</a></li>
                    </ul>
                </li>
                <li>
                    <h3>Reserve a Table</h3>
                    <ul>
                        <li><Link to="/reservations">Reserve Here</Link></li>
                    </ul>
                </li>
            </ul>
        </footer>
    )
}

export default Footer;