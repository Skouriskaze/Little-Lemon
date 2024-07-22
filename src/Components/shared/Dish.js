import '../../styles/highlights.css'

const Dish = ({image, dishName}) => {
    return (
        <div className='card vertical-splitter'>
            <img src={image} alt={dishName} />
            <div className="horizontal-splitter">
                <span className='card-title'>{dishName}</span>
                <span className='card-highlight'>$12.99</span>
            </div>
            <p className="card-text">Get your {dishName} today!</p>
            <p className="card-highlight card-bottom">Order {dishName} here!</p>
        </div>
    )
}

export default Dish;