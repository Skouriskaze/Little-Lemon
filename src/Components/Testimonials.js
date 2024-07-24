import Rating from "./shared/Rating";
import '../styles/testimonials.css'

const Testimonials = () => {
    const ratings = [{
        'name': "Adam Smith",
        'starCount': 4,
        'comments': "The food was amazing!"
    }, {
        'name': "Mary Jane",
        'starCount': 5,
        'comments': "Chefs Adrian and Mario were very friendly!"
    }, {
        'name': "Leslie Horton",
        'starCount': 5,
        'comments': "The best food I've ever had."
    }, {
        'name': "Sophie Ellis",
        'starCount': 4,
        'comments': "I loved the vibe of the place."
    }, 
    ];
    return (
        <div className="testimonial primary-section-odd" id="testimonials">
            <h1>Testimonial Section</h1>
            <div className="card-container">
                {
                    ratings.map((item) => (
                        <Rating {...item} />
                    ))
                }
            </div>
        </div>
    )
}

export default Testimonials;