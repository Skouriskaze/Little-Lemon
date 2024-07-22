import Restaurant from '../assets/restaurant.jpg'
import '../styles/hero.css'

const Hero = () => {
    return (
        <div className="hero primary-section-odd">
            <div className="hero-container">
                <div className="hero-description">
                    <h1 id='hero-title'>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin semper orci eu dapibus pellentesque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dignissim vel odio vitae molestie. Fusce et tempor magna, vel scelerisque nisl. Integer et lacus rhoncus, fringilla lectus id, dictum odio.</p>
                    <button id='reserve-table-button'>
                        Reserve a Table
                    </button>
                </div>
                <div className="hero-image">
                    <img src={Restaurant} alt="Little Lemon Restaurant" />
                </div>
            </div>
        </div>
    )
}

export default Hero;