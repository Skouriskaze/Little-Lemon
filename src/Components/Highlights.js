import '../styles/highlights.css'
import Dish from './shared/Dish';
import GreekSalad from '../assets/dishes/greek salad.jpg'
import LemonDessert from  '../assets/dishes/lemon dessert.jpg'
import Bruchetta from  '../assets/dishes/bruchetta.svg'

const Highlights = () => {
    return (
        <div className='highlights-container primary-section-even' id='highlights'>
            <div className="highlights-row horizontal-splitter">
                <h1>
                    Specials
                </h1>
                <a href="https://doordash.com" target='_blank' rel="noreferrer">
                    <button id='order-online-button' aria-label='On Click'>
                        Order Online
                    </button>
                </a>
            </div>
            <div className="card-container">
                <Dish image={GreekSalad} dishName="Greek Salad" />
                <Dish image={LemonDessert} dishName="Lemon Dessert" />
                <Dish image={Bruchetta} dishName="Bruchetta" />
            </div>
        </div>
    )
}

export default Highlights;
