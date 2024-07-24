import Rating from "./shared/Rating";
import '../styles/testimonials.css'

const Testimonials = () => {
    const ratings = [{
        'starCount': 4,
        'comments': "The food was amazing!"
    }, {
        'starCount': 5,
        'comments': "Chefs Adrian and Mario were very friendly!"
    }, {
        'starCount': 5,
        'comments': "The best food I've ever had."
    }, {
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