import Logo from '../Assets/Logo.svg'
import '../App.css'

const Footer = () => {
    return (
        <footer>
            <img src={Logo} alt="Little Lemon Logo" />
            <ul>
                <li>
                    <h3>Header 1</h3>
                    <ul>
                        <li>Link 1</li>
                        <li>Link 2</li>
                        <li>Link 3</li>
                    </ul>
                </li>
                <li>
                    <h3>Header 2</h3>
                    <ul>
                        <li>Link 1</li>
                        <li>Link 2</li>
                        <li>Link 3</li>
                    </ul>
                </li>
                <li>
                    <h3>Header 3</h3>
                    <ul>
                        <li>Link 1</li>
                        <li>Link 2</li>
                        <li>Link 3</li>
                    </ul>
                </li>
            </ul>
        </footer>
    )
}

export default Footer;