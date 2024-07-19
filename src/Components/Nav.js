import Logo from '../Assets/Logo.svg'
import '../App.css'

const Nav = () => {
    return (
        <nav>
            <img src={Logo} alt="Little Lemon Logo" />
            <ul>
                <li><a href="/about">About</a></li>
                <li><a href="/home">Home</a></li>
                <li><a href="/menu">Menu</a></li>
                <li><a href="/orderonline">Order Online</a></li>
                <li><a href="/reservations">Reservations</a></li>
                <li><a href="/login">Login</a></li>
            </ul>
        </nav>
    )
}

export default Nav;